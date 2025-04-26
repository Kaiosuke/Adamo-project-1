// Viewer360.tsx
import { Viewer } from '@photo-sphere-viewer/core'
import '@photo-sphere-viewer/core/index.css'
import { useEffect, useRef } from 'react'

const baseUrl = 'https://photo-sphere-viewer-data.netlify.app/assets/'

function Viewer360({ url = baseUrl }: { url?: string }) {
  const viewerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let viewer: Viewer | null = null

    if (viewerRef.current) {
      viewer = new Viewer({
        container: viewerRef.current,
        panorama: url + 'sphere.jpg'
      })
    }
    return () => {
      viewer?.destroy()
    }
  }, [url])

  return <div ref={viewerRef} className="w-ful h-full" />
}

export default Viewer360
