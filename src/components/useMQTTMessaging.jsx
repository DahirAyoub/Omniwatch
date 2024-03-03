// useMQTTMessaging.jsx
import { useEffect, useState } from 'react';
import mqtt from 'mqtt';
import messagingOptions from '../messaging-options';

export const useMQTTMessaging = () => {
  const [client, setClient] = useState(null);
  const [isConnected, setIsConnected] = useState(false);
  const [logs, setLogs] = useState([]);
  // Initialize the state for user counts
  const [userCounts, setUserCounts] = useState({
    student: 0,
    staff: 0,
    admin: 0
  });

  useEffect(() => {
    const url = `wss://${messagingOptions.host}:${messagingOptions.port}`;
    const mqttClient = mqtt.connect(url, {
      username: messagingOptions.username,
      password: messagingOptions.password,
      connectTimeout: messagingOptions.timeout * 1000,
      clean: messagingOptions.cleanSession,
      reconnectPeriod: messagingOptions.reconnect ? 1000 * 60 : 0,
      ca: messagingOptions.useSSL ? [/* Your CA certificate if required */] : undefined
    });

    mqttClient.on('connect', () => {
      setIsConnected(true);
      console.log('Connected to MQTT broker.');
      // Subscribe to both topics
      mqttClient.subscribe(['backend/logs', 'backend/new_user']);
    });

    mqttClient.on('error', (error) => {
      console.error('Connection error:', error);
      setIsConnected(false);
    });

    mqttClient.on('message', (topic, message) => {
      if (topic === 'backend/logs') {
        const log = JSON.parse(message.toString());
        setLogs(currentLogs => [log, ...currentLogs].slice(0, 6)); // Add new log at the start and keep only the most recent 6
      } else if (topic === 'backend/new_user') {
        // Handle the new_user messages
        const { count, user_type } = JSON.parse(message.toString());
        setUserCounts(prevCounts => ({
          ...prevCounts,
          [user_type]: prevCounts[user_type] + count
        }));
      }
    });

    setClient(mqttClient);

    return () => {
      mqttClient.end();
    };
  }, []);

  // Return both logs and userCounts
  return { logs, userCounts };
};
