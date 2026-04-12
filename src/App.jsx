import { Component, useRef, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Hyperspeed from './components/Hyperspeed'

class ErrorBoundary extends Component {
  state = { error: null }
  static getDerivedStateFromError(e) { return { error: e } }
  render() {
    if (this.state.error) return (
      <div style={{ background: '#080808', color: '#CC2222', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 40, flexDirection: 'column', gap: 16 }}>
        <h1 style={{ fontSize: 20 }}>Render Error</h1>
        <pre style={{ color: '#e8e0cc', fontSize: 13, whiteSpace: 'pre-wrap', maxWidth: '70ch' }}>{this.state.error.message}</pre>
      </div>
    )
    return this.props.children
  }
}

/* ── Cursor spotlight — DOM-direct for 60fps ── */
function CursorSpotlight() {
  const ref = useRef(null)
  useEffect(() => {
    const move = e => {
      if (!ref.current) return
      ref.current.style.transform = `translate(${e.clientX - 350}px, ${e.clientY - 350}px)`
    }
    window.addEventListener('mousemove', move, { passive: true })
    return () => window.removeEventListener('mousemove', move)
  }, [])
  return (
    <div ref={ref} style={{
      position: 'fixed', top: 0, left: 0,
      width: 700, height: 700, borderRadius: '50%',
      background: 'radial-gradient(circle at center, rgba(200,10,10,0.11) 0%, rgba(140,5,5,0.05) 40%, transparent 70%)',
      pointerEvents: 'none', zIndex: 4, willChange: 'transform',
      transition: 'transform 0.12s cubic-bezier(0.22,1,0.36,1)',
    }} />
  )
}



const HYPERSPEED_OPTIONS = {
  onSpeedUp: () => {},
  onSlowDown: () => {},
  distortion: 'turbulentDistortion',
  length: 400,
  roadWidth: 9,
  islandWidth: 2,
  lanesPerRoad: 3,
  fov: 90,
  fovSpeedUp: 150,
  speedUp: 2,
  carLightsFade: 0.4,
  totalSideLightSticks: 50,
  lightPairsPerRoadWay: 50,
  shoulderLinesWidthPercentage: 0.05,
  brokenLinesWidthPercentage: 0.1,
  brokenLinesLengthPercentage: 0.5,
  lightStickWidth: [0.12, 0.5],
  lightStickHeight: [1.3, 1.7],
  movingAwaySpeed: [60, 80],
  movingCloserSpeed: [-120, -160],
  carLightsLength: [400 * 0.05, 400 * 0.15],
  carLightsRadius: [0.05, 0.14],
  carWidthPercentage: [0.3, 0.5],
  carShiftX: [-0.2, 0.2],
  carFloorSeparation: [0.05, 1],
  colors: {
    roadColor:    0x080808,
    islandColor:  0x0a0a0a,
    background:   0x000000,
    shoulderLines: 0x1a0505,
    brokenLines:   0x1a0505,
    leftCars:  [0xcc2222, 0xef4444, 0xff102a],
    rightCars: [0xe8e0cc, 0xb05555, 0xff6655],
    sticks:    0xcc2222,
  },
};

export default function App() {
  return (
    <ErrorBoundary>
      <div style={{ background: '#080808', minHeight: '100vh', position: 'relative' }}>
        {/* Hyperspeed background */}
        <div style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none' }}>
          <Hyperspeed effectOptions={HYPERSPEED_OPTIONS} />
        </div>
        <CursorSpotlight />
        <div style={{ position: 'relative', zIndex: 1 }}>
          <Navbar />
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
          <Footer />
        </div>
      </div>
    </ErrorBoundary>
  )
}
