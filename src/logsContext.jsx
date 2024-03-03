import React, { createContext, useContext, useState, useEffect } from 'react';
import { useMQTTMessaging } from './components/useMQTTMessaging';

const LogsContext = createContext();

export const LogsProvider = ({ children }) => {
  const [recentLogs, setRecentLogs] = useState([]);
  const [fullLogs, setFullLogs] = useState([]);
  const { logs } = useMQTTMessaging();

  useEffect(() => {
    // Assuming 'logs' contains the most recently received log as the first element
    if (logs.length > 0) {
      // Prepend the new log to the recent logs and keep only the last 6 entries
      console.log(logs)
      setRecentLogs(recentLogs => [logs[0], ...recentLogs].slice(0, 6));

      // Add the new log to the full logs array without slicing
      setFullLogs(fullLogs => [logs[0], ...fullLogs]);
    }
  }, [logs]);

  return (
    <LogsContext.Provider value={{ recentLogs, fullLogs }}>
      {children}
    </LogsContext.Provider>
  );
};

export const useLogs = () => useContext(LogsContext);
