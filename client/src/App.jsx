import { useEffect, useState } from 'react';
import io from 'socket.io-client';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const url = "http://localhost:3000"; 
    const url2 = "https://overlay-be.onrender.com"
    const socketInstance = io(url2);
    setSocket(socketInstance);

    socketInstance.on('send_changes',(data)=>{
      setCount(data);
    })

    return () => {
      if (socketInstance) {
        socketInstance.off('send_changes');
        socketInstance.disconnect();}
    };
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const message = event.target.previousSibling.value;

    if (socket && message) {
      socket.emit('update_change', message);
    }
  };

  return (
    <>
      <div className='text-center bg-info'>overlay
        <p>{count}</p>
      </div>
      <div className='bg-danger'>
        <input type='text' value={count} onChange={(e) => setCount(e.target.value)} />
        <button onClick={handleSubmit}>Send</button>
      </div>
    </>
  );
}

export default App;
