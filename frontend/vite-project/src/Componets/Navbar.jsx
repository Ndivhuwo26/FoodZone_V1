import React from 'react'

function Navbar() {
  return (
    <div>
      <nav className='flex justify-between p-[2rem] bg-black text-white'>
        <div>
          <h2 className='font-bold text-2x1'>FoodZone</h2>
        </div>
        <div>
          <ul className='flex justify-between gap-8'>
            <li className='font-bold text-lg cursor-pointer hover:text-amber-400'>HOME</li>
            <li className='font-bold text-lg cursor-pointer hover:text-amber-400'>RESERVATION</li>
            <li className='font-bold text-lg cursor-pointer hover:text-amber-400'>MANU</li>
            <li className='font-bold text-lg cursor-pointer hover:text-amber-400'>CONTACT</li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar