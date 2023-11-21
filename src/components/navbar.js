import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>
        <nav className=' w-[237px] h-screen px-[40px] pt-[38px] bg-white-ghost'>
            <div>
                <h1 className='text-[20px] font-semibold'><a className='text-orange-portland'>Dev</a>challenges.io</h1>
                <ul className=' mt-[100px] space-y-4'>
                    <li>
                        <Link to='/buttons'>
                            <p class='text-[20px] font-medium text-gray active:text-blue-black focus:text-blue-black'>Button</p>
                        </Link>
                    </li>
                    <li>
                        <Link to='/inputs'>
                            <p class='text-[20px] font-medium text-gray active:text-blue-black focus:text-blue-black'>Inputs</p>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    </>
  )
}

export default Navbar