import About from '@/components/about/About'
import Experience from '@/components/experience/Experience'
import Footer from '@/components/footer/Footer'
import Header from '@/components/header/Header'
import Hero from '@/components/hero/Hero'
import Project from '@/components/project/Project'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Experience />
        <Project />
        <About />
      </main>
      <Footer />
    </>
  )
}
