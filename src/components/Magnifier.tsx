import { MouseEvent, useState } from 'react'
import LoadedImage from './LoadingList/LoadedImage'

const Magnifier = ({ image }: { image: string }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })
  const [showMagnifier, setShowMagnifier] = useState(false)

  const handleMouseHover = (e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect()

    const x = ((e.pageX - left) / width) * 100
    const y = ((e.pageY - top) / height) * 100

    setPosition({ x, y })

    setCursorPosition({ x: e.pageX - left, y: e.pageY - top })
  }

  return (
    <div
      className="relative w-full h-full"
      onMouseEnter={() => setShowMagnifier(true)}
      onMouseLeave={() => setShowMagnifier(false)}
      onMouseMove={(e) => handleMouseHover(e)}
    >
      <LoadedImage thumbnail={image} alt="image" />

      <div
        className={`w-[300px] h-[300px] ${showMagnifier ? 'block' : 'hidden'} absolute`}
        style={{
          backgroundImage: `url(${image})`,
          backgroundPosition: `${position.x}% ${position.y}%`,
          left: `${cursorPosition.x - 100}px`,
          top: `${cursorPosition.y - 100}px`,
          pointerEvents: 'none'
        }}
      >
        1{' '}
      </div>
    </div>
  )
}

export default Magnifier
