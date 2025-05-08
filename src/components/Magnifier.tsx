import { MouseEvent, useState } from 'react'
import LoadedImage from './LoadingList/LoadedImage'

const Magnifier = ({ image }: { image: string }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })
  const [showMagnifier, setShowMagnifier] = useState(false)

  const handleMouseHover = (e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect()

    const x = ((e.pageX - left - window.scrollX) / width) * 100
    const y = ((e.pageY - top - window.scrollY) / height) * 100
    const cursorX = e.pageX - left - window.scrollX
    const cursorY = e.pageY - top - window.scrollY

    setPosition({ x, y })

    setCursorPosition({ x: cursorX, y: cursorY })
  }

  return (
    <div
      className="relative w-full h-full cursor-zoom-in"
      onMouseEnter={() => setShowMagnifier(true)}
      onMouseLeave={() => setShowMagnifier(false)}
      onMouseMove={(e) => handleMouseHover(e)}
    >
      <LoadedImage thumbnail={image} alt="image" />

      <div
        className="absolute"
        style={{ left: `${cursorPosition.x - 125}px`, top: `${cursorPosition.y - 125}px`, pointerEvents: 'none' }}
      >
        <div
          className={`w-[250px] h-[250px] rounded-full ${showMagnifier ? 'block' : 'hidden'} `}
          style={{
            backgroundImage: `url(${image})`,
            backgroundPosition: `${position.x}% ${position.y}%`
          }}
        />
      </div>
    </div>
  )
}

export default Magnifier
