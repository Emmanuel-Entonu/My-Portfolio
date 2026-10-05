import { Component } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Clients from './components/Clients'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'

class ErrorBoundary extends Component {
  state = { error: null }
  static getDerivedStateFromError(e) { return { error: e } }
  render() {
    if (this.state.error) return (
      <div style={{ background: '#000', color: '#CC2222', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 40, flexDirection: 'column', gap: 16 }}>
        <h1 style={{ fontSize: 20 }}>Render Error</h1>
        <pre style={{ color: '#e8e0cc', fontSize: 13, whiteSpace: 'pre-wrap', maxWidth: '70ch' }}>{this.state.error.message}</pre>
      </div>
    )
    return this.props.children
  }
}

export default function App() {
  return (
    <ErrorBoundary>
      <div style={{ background: '#000', minHeight: '100vh', position: 'relative', width: '100%', maxWidth: '100vw', overflowX: 'hidden' }}>
        <div style={{ position: 'relative', zIndex: 1 }}>
          <Navbar />
          <Hero />
          <Clients />
          <About />
          <Skills />
          <Projects />
          <FAQ />
          <Contact />
          <Footer />
        </div>
      </div>
    </ErrorBoundary>
  )
}
