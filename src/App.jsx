import { useState } from 'react'

function App() {
  const [color, setColor] = useState('olive')

  return (
    <div className='w-full h-screen duration-200' style={{backgroundColor: color}}>
      <div className='fixed bottom-12 flex flex-wrap justify-center inset-x-0 px-0'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg px-2 py-2 rounded-full bg-white'>
          <button 
          onClick={()=>setColor('red')}
          className='outline-none px-4 py-1 rounded-full shadow-lg bg-red-500'>Red</button>
          <button
          onClick={()=>setColor('green')}
          className='outline-none px-4 py-1 rounded-full shadow-lg bg-green-500'>Green</button>
          <button 
          onClick={()=>setColor('blue')}
          className='outline-none px-4 py-1 rounded-full shadow-lg bg-blue-500'>Blue</button>
          <button 
          onClick={()=>setColor('pink')}
          className='outline-none px-4 py-1 rounded-full shadow-lg bg-pink-500'>Pink</button>
          <button 
          onClick={()=>setColor('purple')}
          className='outline-none px-4 py-1 rounded-full shadow-lg bg-purple-500'>Purple</button>
          <button 
          onClick={()=>setColor('orange')}
          className='outline-none px-4 py-1 rounded-full shadow-lg bg-orange-500'>Orange</button>
          <button 
          onClick={()=>setColor('yellow')}
          className='outline-none px-4 py-1 rounded-full shadow-lg bg-yellow-300'>Yellow</button>
          <button 
          onClick={()=>setColor('black')}
          className='outline-none px-4 py-1 rounded-full shadow-lg bg-black text-white'>Black</button>
          <button 
          onClick={()=>setColor('white')}
          className='outline-none px-4 py-1 rounded-full shadow-lg bg-white'>white</button>

        </div>
      </div>
    </div>
  )
}

export default App
