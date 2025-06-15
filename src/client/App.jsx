import React from 'react';
import ReactDOM from 'react-dom/client';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [msg, setMsg] = useState('');

  useEffect(() => {
    axios
      .get('/api/message')
      .then((res) => setMsg(res.data?.text || 'No message'))
      .catch((err) => console.error(err));
  }, []);

  return <h2>{msg}</h2>;
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
