import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import io from 'socket.io-client';
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [socket, setSocket] = useState(null)

  useEffect(()=>{
    const soket = io()
  })

  const change = (e)=>{
    setCount(e.target.value)
  }

  return (
    <>
     <div className='text-center bg-info'>overlay
      <p>{count}</p>
     </div>
     <div className='bg-danger'>
      <input type='text' value={count} onChange={(e)=>setCount(e.target.value)} />
     </div>
    </>
  )
}

export default App
