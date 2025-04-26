import React, { useEffect, useRef, useState } from 'react'

interface Props {
  children: React.ReactNode
  onVisible?: () => void
}

const LazyScrollCom = ({ children, onVisible }: Props) => {
  const [isVisible, setIsVisible] = useState(false)

  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          onVisible?.()
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [onVisible])

  return <div ref={ref}>{isVisible ? children : null}</div>
}

export default LazyScrollCom
