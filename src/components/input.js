import React from 'react'

function Input({
    labelStyle,
    inputStyles = '',
    error,
    disabled,
    message,
    value,
    leftIcon,
    rightIcon,
}) {

    let messageStyle = ' font-normal text-[10px] ';

    let borderColor = error ? ' border-red-venetian ' : 
        disabled ? ' border-white-charcoal bg-white-flash ' : 
        ' border-silver-old ';
    
    const inputCustomStyle = borderColor + inputStyles;

  return (  
    <div className='flex-col px-4 pb-2 group'>
        <label className={error ? 'text-red-venetian' : labelStyle} >Label</label>
        <div 
            className={'input-primary ' + inputCustomStyle}
        >
            {leftIcon && leftIcon}
            <input
                className='w-full'
                placeholder='Placeholder'
                disabled={disabled}
                value={value}
            />
            {rightIcon && rightIcon}
        </div>
        {message && 
        <p className={error ? 'text-red-venetian ' + messageStyle : 
            'text-silver-old ' + messageStyle
        }>{message}</p>}
    </div>
  )
}

export default Input