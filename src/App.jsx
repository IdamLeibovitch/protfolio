import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, OrbitControls, Sparkles } from '@react-three/drei'
import './App.css'

const FloatingPoly = ({ position, color, size = 1.1, speed = 1 }) => {
  const ref = useRef()

  useFrame((state, delta) => {
    if (!ref.current) return
    ref.current.rotation.x += delta * 0.35 * speed
    ref.current.rotation.y += delta * 0.55 * speed
    ref.current.position.y =
      position[1] + Math.sin(state.clock.elapsedTime * speed) * 0.25
  })

  return (
    <Float speed={1.2 * speed} rotationIntensity={0.4} floatIntensity={1.2}>
      <mesh ref={ref} position={position} castShadow>
        <icosahedronGeometry args={[size, 0]} />
        <meshStandardMaterial
          color={color}
          metalness={0.35}
          roughness={0.3}
          envMapIntensity={0.8}
        />
      </mesh>
    </Float>
  )
}

const Scene = () => {
  return (
    <>
      <color attach="background" args={['#050912']} />
      <fog attach="fog" args={['#050912', 10, 28]} />
      <hemisphereLight intensity={0.7} groundColor="#0b1224" color="#7cc3ff" />
      <directionalLight
        position={[6, 8, 4]}
        intensity={1.25}
        castShadow
        color="#9fd4ff"
      />
      <pointLight position={[-4, 2, -3]} intensity={0.8} color="#8c81ff" />
      <FloatingPoly position={[-1.3, 0.4, 0]} color="#6be6ff" />
      <FloatingPoly
        position={[1.8, -0.2, -0.6]}
        color="#8c81ff"
        size={0.9}
        speed={1.4}
      />
      <FloatingPoly
        position={[0.4, 1.2, -1.2]}
        color="#c0f27c"
        size={0.8}
        speed={0.9}
      />
      <mesh rotation-x={-Math.PI / 2} position={[0, -1.25, 0]} receiveShadow>
        <circleGeometry args={[18, 64]} />
        <meshStandardMaterial color="#0a1020" roughness={0.9} metalness={0.1} />
      </mesh>
      <Sparkles count={120} speed={0.4} opacity={0.35} color="#7ad7ff" size={2.2} />
      <OrbitControls enablePan={false} enableZoom={false} maxPolarAngle={Math.PI / 2.15} />
    </>
  )
}

function App() {
  return (
    <div className="page">
      <header className="top-bar">
        <div className="brand">
          <span className="brand-mark">ID</span>
          <div>
            <p className="brand-name">Idam Developer</p>
            <p className="brand-sub">Full-stack & creative interfaces</p>
          </div>
        </div>
        <div className="nav-pills">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </div>
      </header>

      <main className="hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">Portfolio · Full-stack · React Fiber</p>
          <h1>
            Full-stack experiences that blend{' '}
            <span className="accent">storytelling</span>, data, and real-time 3D.
          </h1>
          <p className="lede">
            I architect performant APIs, craft immersive product frontends, and design interactive
            visuals with React, React Three Fiber, and thoughtful UX strategy.
          </p>
          <div className="cta-row">
            <a className="btn primary" href="#contact">
              Book a call
            </a>
            <a className="btn ghost" href="#projects">
              View work
            </a>
          </div>
          <div className="stats">
            <div>
              <p className="stat-number">25+</p>
              <p className="stat-label">Projects shipped</p>
            </div>
            <div>
              <p className="stat-number">5yr</p>
              <p className="stat-label">Full-stack experience</p>
            </div>
            <div>
              <p className="stat-number">
                <span className="pill">React Fiber</span>
              </p>
              <p className="stat-label">Real-time visuals</p>
            </div>
          </div>
        </div>

        <div className="canvas-card">
          <div className="canvas-overlay">
            <p className="canvas-tag">Live preview</p>
            <p className="canvas-title">React Three Fiber playground</p>
          </div>
          <Canvas className="hero-canvas" shadows camera={{ position: [6, 3, 8], fov: 46 }}>
            <Scene />
          </Canvas>
        </div>
      </main>

      <section id="about" className="section-block">
        <div className="section-heading">
          <p className="eyebrow">About</p>
          <h2>Full-stack problem solver who loves creative coding</h2>
        </div>
        <div className="two-col">
          <div className="card">
            <h3>What drives me</h3>
            <p>
              I design and build end-to-end experiences: performant APIs, clean UI architectures,
              and memorable 3D interactions. My work spans fintech dashboards, SaaS onboarding, and
              product storytelling.
            </p>
            <ul>
              <li>Architected Node/Express backends that serve 1M+ requests/mo</li>
              <li>Built SSR and SPA frontends with React, Vite, and Next</li>
              <li>Designed 3D hero scenes with Fiber + Drei for product launches</li>
            </ul>
          </div>
          <div className="card">
            <h3>Recent highlights</h3>
            <p>Snapshots from recent collaborations and experiments:</p>
            <div className="chips">
              <span>Realtime dashboards</span>
              <span>Design systems</span>
              <span>Interactive product tours</span>
              <span>3D data stories</span>
              <span>API performance tuning</span>
            </div>
            <div className="microcopy">Ask for a walkthrough or demo links.</div>
          </div>
        </div>
      </section>

      <section id="skills" className="section-block">
        <div className="section-heading">
          <p className="eyebrow">Skills</p>
          <h2>Tools I use to ship durable, beautiful products</h2>
        </div>
        <div className="info-grid">
          <article className="card">
            <h3>Frontend & visuals</h3>
            <p>React, TypeScript, Vite/Next, Zustand, Tailwind/CSS Modules.</p>
            <div className="chips">
              <span>React Three Fiber</span>
              <span>Drei</span>
              <span>Framer Motion</span>
              <span>Accessibility</span>
              <span>Testing Library</span>
            </div>
          </article>
          <article className="card">
            <h3>Backend & data</h3>
            <p>Node, Express/Fastify, PostgreSQL, Prisma, Redis, REST/GraphQL.</p>
            <div className="chips">
              <span>API design</span>
              <span>Auth & security</span>
              <span>Monitoring</span>
              <span>CI/CD</span>
              <span>Serverless</span>
            </div>
          </article>
          <article className="card">
            <h3>Collaboration</h3>
            <p>Product thinking, design systems, docs, and workshops to align teams.</p>
            <div className="chips">
              <span>Figma</span>
              <span>Storybook</span>
              <span>Agile delivery</span>
              <span>Performance budgets</span>
              <span>Code reviews</span>
            </div>
          </article>
        </div>
      </section>

      <section id="contact" className="section-block">
        <div className="section-heading">
          <p className="eyebrow">Contact</p>
          <h2>Have a project in mind?</h2>
        </div>
        <div className="card contact-card">
          <p>
            Share a quick brief and I&apos;ll respond within a day with ideas, scope, and a
            realistic timeline.
          </p>
          <a className="btn primary full" href="mailto:hello@example.com">
            Email hello@example.com
          </a>
          <p className="microcopy">Based in UTC, available for remote work worldwide.</p>
        </div>
      </section>
    </div>
  )
}

export default App
