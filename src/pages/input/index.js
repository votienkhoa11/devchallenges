import React from 'react'
import Input from '../../components/input'
import icons from '../../values/icon'

function Inputs() {
  return (
        <div className='w-full h-full p-4 gap-y-8'>
            <h1 className='text-[24px] font-medium text-black' >Inputs</h1>
            <form className='flex-col py-2 my-2'>
                <Input 
                    labelStyle=' group-focus-within:text-blue '
                    inputStyles=' group-focus-within:border-blue'                  
                />
                <Input
                    inputStyles=' group-focus-within:border-red-venetian '
                    error={true}                 
                />
                 <Input 
                    labelStyle=' group-focus-within:text-blue'
                    inputStyles=' group-focus-within:border-blue'
                    disabled={true}               
                />
                <div className='flex flex-row items-center gap-4'>
                    <Input 
                        message='Some interesting text'
                    />
                    <Input 
                        error={true}
                        inputStyles=' group-focus-within:border-red-venetian '
                        message='Some interesting text'
                    />
                </div>
                <div className='flex flex-row items-center gap-4'>
                    <Input
                        leftIcon={<icons.LocalPhoneIcon style={{color: '#828282'}}/>}
                    />
                    <Input
                        rightIcon={<icons.LockIcon style={{color: '#828282'}}/>}
                    />
                </div>
                <Input
                    value='Text'
                />
                <div className='flex flex-row items-center gap-4'>
                    <Input
                        inputStyles=' h-[40px]'
                    />
                    <Input />
                </div>
                <Input
                    inputStyles=' w-full'
                />
            </form>
            <div className='flex-col py-2 mx-4 my-2'>
                <p>Label</p>
                <textarea
                    placeholder='placeholder'
                    rows="4"
                />
            </div>
        </div>
  )
}

export default Inputs