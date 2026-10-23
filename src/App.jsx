import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Navbar from './components/Navbar.jsx'
import HeroSection from './components/HeroSection.jsx'
import ProductSection from './components/ProductSection.jsx'
import BrandStory from './components/BrandStory.jsx'
import Footer from './components/Footer.jsx'

gsap.registerPlugin(ScrollTrigger)

export default function App() {
  const pageRef = useRef(null)

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      const media = gsap.matchMedia()

      media.add(
        {
          desktop: '(min-width: 900px)',
          mobile: '(max-width: 899px)',
          reducedMotion: '(prefers-reduced-motion: reduce)',
        },
        (match) => {
          const { reducedMotion } = match.conditions
          const hero = document.querySelector('.hero')
          const headline = document.querySelector('.hero__headline')
          const copy = document.querySelector('.hero__copy')
          const stats = gsap.utils.toArray('.stat-card')
          const can = document.querySelector('.hero__can')
          const bubbles = gsap.utils.toArray('.bubble--float')
          const nav = document.querySelector('.navbar')
          const productReveal = gsap.utils.toArray('[data-reveal]')

          if (reducedMotion) {
            gsap.set([headline, copy, can, nav, ...stats, ...productReveal], {
              clearProps: 'all',
            })
            return
          }

          const entrance = gsap.timeline({ defaults: { ease: 'power2.out' } })
          entrance
            .from('.hero__eyebrow, .hero__side-note', { opacity: 0, y: 12, duration: 0.6 })
            .from(headline, { opacity: 0, y: 24, duration: 0.8 }, '-=0.35')
            .from(copy, { opacity: 0, y: 18, duration: 0.65 }, '-=0.42')
            .from(stats, { opacity: 0, y: 20, stagger: 0.12, duration: 0.5 }, '-=0.28')
            .from(can, { opacity: 0, scale: 0.82, y: 34, rotate: -8, duration: 1 }, '-=0.75')
            .from('.scroll-cue', { opacity: 0, duration: 0.4 }, '-=0.2')

          gsap.from(nav, { opacity: 0, y: -10, duration: 0.7, delay: 0.12 })
          gsap.from(productReveal, {
            opacity: 0,
            y: 28,
            duration: 0.75,
            stagger: 0.12,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: '.product-section',
              start: 'top 76%',
              once: true,
            },
          })

          const isDesktop = match.conditions.desktop
          const travel = gsap.timeline({
            scrollTrigger: {
              trigger: hero,
              start: 'top top',
              end: isDesktop ? '+=1250' : '+=740',
              scrub: 1.15,
              pin: true,
              anticipatePin: 1,
              invalidateOnRefresh: true,
            },
          })

          travel
            .to(headline, { yPercent: -42, opacity: 0, scale: 0.94, ease: 'none' }, 0.08)
            .to(copy, { y: -30, opacity: 0, ease: 'none' }, 0.06)
            .to(stats, { y: 28, opacity: 0, stagger: 0.06, ease: 'none' }, 0.02)
            .to(
              can,
              isDesktop
                ? { xPercent: 42, yPercent: 5, scale: 1.24, rotation: 13, ease: 'none' }
                : { xPercent: 4, yPercent: 12, scale: 1.08, rotation: 7, ease: 'none' },
              0,
            )
            .to('.hero__glow', { scale: 1.42, opacity: 0.72, ease: 'none' }, 0)
            .to('.scroll-cue', { opacity: 0, y: 12, ease: 'none' }, 0)
            .to(bubbles, { y: (index) => (index % 2 ? -90 : -145), x: (index) => (index % 2 ? 20 : -15), ease: 'none' }, 0)

          return () => {
            entrance.kill()
            travel.kill()
            travel.scrollTrigger?.kill()
          }
        },
      )

      return () => media.revert()
    }, pageRef)

    return () => context.revert()
  }, [])

  return (
    <div ref={pageRef}>
      <Navbar />
      <main>
        <HeroSection />
        <ProductSection />
        <BrandStory />
      </main>
      <Footer />
    </div>
  )
}
