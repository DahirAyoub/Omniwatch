// useMQTTMessaging.jsx
import { useEffect, useState } from 'react';
import mqtt from 'mqtt';
import messagingOptions from '../messaging-options'; // Make sure this path is correct

export const useMQTTMessaging = () => {
  const [client, setClient] = useState(null);
  const [isConnected, setIsConnected] = useState(false); // State to track connection status
  const [logs, setLogs] = useState([]); // State to store logs

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

    // On connect event
    mqttClient.on('connect', () => {
      console.log('Connected to MQTT broker.');
      setIsConnected(true);
    });

    // On error event
    mqttClient.on('error', (error) => {
      console.error('Connection error:', error);
      setIsConnected(false);
    });

    setClient(mqttClient);

    // Clean up on component unmount or client change
    return () => {
      mqttClient.end();
    };
  }, []);

  useEffect(() => {
    if (client && isConnected) {
      const topic = 'backend/logs'; // The topic to subscribe to for logs
      client.subscribe(topic, (err) => {
        if (err) {
          console.error(`Could not subscribe to topic ${topic}:`, err);
        } else {
          console.log(`Subscribed to topic ${topic}`);
        }
      });

      const handleIncomingMessage = (topic, message) => {
        if (topic === 'backend/logs') {
          const log = JSON.parse(message.toString());
          setLogs(currentLogs => [...currentLogs, log]);
        }
      };

      client.on('message', handleIncomingMessage);

      return () => {
        client.off('message', handleIncomingMessage);
      };
    }
  }, [client, isConnected]); // Depend on the client and connection status

  // Return everything including logs
  return { client, sendMessage: (topic, message) => client?.publish(topic, message), logs };
};
