import { useEffect, useState } from "react";

const TypingText = ({ finalText, speed, delay }) => {
  const [text, setText] = useState('')

  useEffect(() => {
    for (let i = 0; i < finalText.length; i++) {
      setTimeout(() => {
        setText(finalText.slice(0, i + 1))
      }, delay + speed * i)
    }
  }, [])

  const shouldBlink = text.length === 0 || text.length === finalText.length

  return <div className="font-bold ml-5 text-6xl">
    {text}
    <span className={`visible -ml-1 ${shouldBlink ? 'animate-blink' : ''}`}>|</span>
  </div>
}

export default TypingText
