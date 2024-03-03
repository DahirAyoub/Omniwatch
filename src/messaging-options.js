// messaging-options.js
const messagingOptions = {
    host: import.meta.env.VITE_MQTT_BROKER_ADDRESS,
    port: parseInt(import.meta.env.VITE_MQTT_PORT, 10), // Vite injects environment variables as strings, so make sure to convert port to a number
    username: import.meta.env.VITE_MQTT_USERNAME,
    password: import.meta.env.VITE_MQTT_PASSWORD,
    useSSL: true, // Assuming you are using SSL
    timeout: 3,
    keepAliveInterval: 60,
    protocol: 'wss',
    cleanSession: true,
    reconnect: true
  };
  
  export default messagingOptions;
  