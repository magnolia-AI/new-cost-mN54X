'use client'

import { useState, useEffect } from 'react'

interface TypingEffectProps {
  texts: string[]
  speed?: number
  delay?: number
}

export function TypingEffect({ texts, speed = 150, delay = 2000 }: TypingEffectProps) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [currentText, setCurrentText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [typingSpeed, setTypingSpeed] = useState(speed)

  useEffect(() => {
    const handleTyping = () => {
      const current = texts[currentTextIndex]
      
      if (isDeleting) {
        // Deleting text
        setCurrentText(current.substring(0, currentText.length - 1))
        setTypingSpeed(speed / 2)
      } else {
        // Typing text
        setCurrentText(current.substring(0, currentText.length + 1))
        setTypingSpeed(speed)
      }

      // If text is fully typed
      if (!isDeleting && currentText === current) {
        setTimeout(() => setIsDeleting(true), delay)
      } 
      // If text is deleted
      else if (isDeleting && currentText === '') {
        setIsDeleting(false)
        setCurrentTextIndex((prev) => (prev + 1) % texts.length)
        setTypingSpeed(speed)
      }
    }

    const timer = setTimeout(handleTyping, typingSpeed)
    return () => clearTimeout(timer)
  }, [currentText, isDeleting, currentTextIndex, texts, speed, delay, typingSpeed])

  return (
    <span className="text-primary">
      {currentText}
      <span className="ml-1 animate-pulse">|</span>
    </span>
  )
}

