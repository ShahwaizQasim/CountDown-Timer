import React, { useEffect, useRef, useState } from 'react'
import Button from '../Button/button'

function CountDown() {
  const [time, setTime] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [isPause, setIsPause] = useState(false);
  let intervalRef = useRef(null);
  let formRef = useRef(null)

  const handleInput = (e) => {
    setTime(parseInt(e.target.value * 60)) // yahan user se input number lekr minute ko sec me convert kiya hai
  }

  const formatTime = () => {
    const min = String(Math.floor(time / 60)).padStart(2, '0'); // yahan sec ko minute me convert kiya hai
    const sec = String(time % 60).padStart(2, '0'); // min ko phr sec me convert krdia
    return `${min} : ${sec}`;
  }

  const handleStart = () => {
    setIsActive(true);
    setIsPause(false);
  }

  useEffect(() => {
    if (isActive && !isPause && time > 0) {
      intervalRef.current = setInterval(() => {
        setTime((prev) => prev - 1)
      }, 1000)
    } else if (time == 0) {
      clearInterval(intervalRef.current);
      setIsActive(false)
      // alert('Time is up')
    }
    return () => clearInterval(intervalRef.current);
  }, [isActive, isPause, time])

  const handlePause = () => {
    setIsPause(!isPause)
  }

  const handleReset = () => {
    clearInterval(intervalRef.current)
    setIsActive(false)
    setIsPause(false)
    setTime(0)
    formRef.current.reset();
  }

  return (
    <div className='h-dvh flex justify-center flex-col gap-4 items-center'>
      <h1 className='text-3xl font-semibold'>CountDown Timer</h1>
      <form ref={formRef}>
        <input placeholder='Enter Times in Minute...' type='number'
          onChange={handleInput} className='border-2 py-2 mt-5 px-3 text-sm w-[300px]' />

      </form>
      <h2 className='text-3xl'>{formatTime()}</h2>
      <div className='flex gap-3'>
        <Button label={"Start"} onClick={handleStart} disabled={isActive && !isPause} />
        <Button label={isPause ? 'Resume' : 'Pause'} onClick={handlePause} />
        <Button label={"Reset"} onClick={handleReset} />
      </div>
    </div>
  )
}

export default CountDown