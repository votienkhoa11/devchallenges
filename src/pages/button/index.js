import React from 'react'
import icons from '../../values/icon'

function Button() {
  return (
        <div className='p-4 gap-y-8' >
            <h1 className='text-[24px] font-medium text-black' >Buttons</h1>
            <div className='p-4'>
                <button className='text-[14px] bg-white-charcoal font-medium drop-shadow-lg hover:bg-silver-foil focus:bg-silver-foil'>Default</button>
            </div>
            <div className='p-4'>
                <button className='text-[14px] border-[1px] border-marine-blue text-marine-blue font-medium drop-shadow-lg hover:bg-blue/10 focus:bg-blue/10'>Default</button>
            </div>
            <div className='p-4'>
                <button className='text-[14px] text-marine-blue font-medium drop-shadow-lg hover:bg-blue/10 focus:bg-blue/10'>Default</button>
            </div>
            <div className='p-4'>
                <button className='text-[14px] text-white font-medium bg-blue-marine'>Default</button>
            </div>
            <div className='p-4 gap-'>
                <button 
                    className='text-[14px] text-gray font-medium bg-white-charcoal'
                    disabled
                >Disabled</button>
                <button 
                    className='text-[14px] text-gray font-medium'
                    disabled
                >Disabled</button>
            </div>
            <div className='p-4'>
                <button 
                    className='text-[14px] text-white font-medium bg-blue mr-4'
                >
                    <icons.AddShoppingCartIcon fontSize='18px' />
                    <text> Default</text>
                </button>
                <button 
                    className='text-[14px] text-white font-medium bg-blue'
                >
                    <text>Default </text>
                    <icons.AddShoppingCartIcon fontSize='18px'/>
                </button>
            </div>
            <div className='p-4'>
                <button 
                    className=' bg-blue mr-4 h-[32px]'
                >
                   <text className='text-[14px] text-white font-medium text-center'>Default</text>
                </button>
                <button 
                    className='text-[14px] text-white font-medium mr-4 bg-blue h-[36px]'
                >Default
                </button>
                <button 
                    className='text-[14px] text-white font-medium bg-blue h-[42px]'
                >Default
                </button>
            </div>
            <div className='p-4'>
                <button 
                    className='text-[14px] text-white font-medium mr-4 bg-white-charcoal
                        hover:bg-silver-foil focus:bg-silver-foil'
                >Default
                </button>
                <button 
                    className='text-[14px] text-white font-medium mr-4 bg-blue
                        hover:bg-blue-crayola focus:bg-blue-crayola'
                >Default
                </button>
                <button 
                    className='text-[14px] text-white font-medium bg-deep-pace mr-4
                        hover:bg-blue-yankees focus:bg-blue-yankees'
                >Secondary
                </button>
                <button 
                    className='text-[14px] text-white font-medium bg-red-venetian mr-4
                     hover:bg-red-crimson focus:bg-red-crimson' 
                >Danger
                </button>
            </div>
        </div>
  )
}

export default Button