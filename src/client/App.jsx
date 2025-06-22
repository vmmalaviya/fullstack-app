import React from 'react';
import ReactDOM from 'react-dom/client';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    axios
      .get('/api/get-messages')
      .then((res) => setMessages(res.data))
      .catch((err) => console.error(err));
  }, []);

  const handleCreateMessage = (text, id = null) => {
    axios
      .post('/api/create-message', { text, id })
      .then((res) => {
        console.log('Message created:', res.data);
        if (id) {
          // If updating, replace the old message
          setMessages(messages.map((message) => (message._id === id ? res.data : message)));
          return;
        }
        setMessages([...messages, res.data]);
      })
      .catch((err) => console.error(err));
  };

  const handleDeleteMessage = (id) => {
    axios
      .get(`/api/delete-message/${id}`)
      .then((res) => {
        console.log('Message deleted:', res.data);
        setMessages(messages.filter((message) => message._id !== id));
      })
      .catch((err) => console.error(err));
  };
  return (
    <div style={{ maxWidth: 600, margin: '40px auto', fontFamily: 'sans-serif' }}>
      <h1 style={{ textAlign: 'center' }}>Messages</h1>
      <div style={{ marginBottom: 24 }}>
        {messages.length === 0 ? (
          <p style={{ textAlign: 'center', color: '#888' }}>No messages yet.</p>
        ) : (
          messages.map((message) => (
            <div
              key={message?._id}
              style={{
                background: '#f9f9f9',
                borderRadius: 8,
                padding: 16,
                marginBottom: 12,
                boxShadow: '0 1px 4px rgba(0,0,0,0.06)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <div>
                <div style={{ fontSize: 16, marginBottom: 4 }}>{message?.text}</div>
                <div style={{ fontSize: 12, color: '#888' }}>
                  {new Date(message?.createdAt).toLocaleString()}
                </div>
              </div>
              <button
                onClick={() => handleCreateMessage(prompt('Edit message:', message?.text), message._id)}
                style={{
                  background: '#1890ff',
                  color: '#fff',
                  border: 'none',
                  borderRadius: 4,
                  padding: '6px 12px',
                  marginRight: 8,
                  cursor: 'pointer',
                }}
              >
                Edit
              </button>
              <button
                onClick={() => handleDeleteMessage(message?._id)}
                style={{
                  background: '#ff4d4f',
                  color: '#fff',
                  border: 'none',
                  borderRadius: 4,
                  padding: '6px 12px',
                  cursor: 'pointer',
                }}
              >
                Delete
              </button>
            </div>
          ))
        )}
      </div>
      <textarea
        placeholder="Type your message here and press Enter..."
        onKeyDown={(e) => {
          if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            const value = e.target.value.trim();
            if (value) {
              handleCreateMessage(value);
              e.target.value = '';
            }
          }
        }}
        rows="4"
        cols="50"
        style={{
          width: '100%',
          borderRadius: 6,
          border: '1px solid #ccc',
          padding: 12,
          fontSize: 16,
          resize: 'vertical',
        }}
      />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
