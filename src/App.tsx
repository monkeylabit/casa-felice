import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Gallery } from './components/Gallery'
import { Reviews } from './components/Reviews'
import { Services } from './components/Services'
import { Location } from './components/Location'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Gallery />
        <Reviews />
        <Services />
        <Location />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
