import React, { useState } from 'react'
import Button from '../Button/button'

function CountDown() {
  const [inputValue, setInputValue] = useState("");
  console.log("inputValue", inputValue);

  return (
    <div className='h-dvh flex justify-center flex-col gap-4 items-center'>
      <h1 className='text-4xl font-semibold'>CountDown Timer</h1>
      <input placeholder='Enter Times in Minute...' type='number'
        value={inputValue} onChange={(e) => setInputValue(e.target.value)} className='border-2 py-2 mt-5 px-3 w-[300px]' />
      <h2 className='text-4xl'>00:00</h2>
      <div className='flex gap-3'>
        <Button label={"Start"} />
        <Button label={"Pause"} />
        <Button label={"Reset"} />
      </div>
    </div>
  )
}

export default CountDown