import React ,  {useState, useEffect} from 'react'


const Timer = () => {
    const [count, setCount] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setCount(prevCount => prevCount + 5)
        }, 5000)
        return () => clearInterval(timer)
    }, [])
  return (
    <div>Count: {count}</div>
  )
}

export default Timer