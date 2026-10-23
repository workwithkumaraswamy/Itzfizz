import Statistics from './Statistics.jsx'

const bubbles = [
  ['bubble--one', 'bubble--float'],
  ['bubble--two', 'bubble--float'],
  ['bubble--three', 'bubble--float'],
  ['bubble--four', 'bubble--float'],
  ['bubble--five'],
  ['bubble--six'],
  ['bubble--seven'],
  ['bubble--eight'],
]

export default function HeroSection() {
  return (
    <section className="hero" id="home" aria-labelledby="hero-title">
      <div className="hero__texture" aria-hidden="true" />
      <div className="hero__glow" aria-hidden="true" />
      <div className="hero__bubbles" aria-hidden="true">
        {bubbles.map((classes, index) => (
          <span className={`bubble ${classes.join(' ')}`} key={index} />
        ))}
      </div>
      <div className="hero__layout">
        <div className="hero__content">
          <p className="hero__eyebrow"><span /> GOOD THINGS COME WITH A LITTLE FIZZ</p>
          <h1 className="hero__headline" id="hero-title">W E L C O M E<br /><span>I T Z &nbsp; F I Z Z</span></h1>
          <p className="hero__copy">A little citrus. A lot of sparkle.<br />Your bright side, in a can.</p>
          <Statistics />
        </div>
        <div className="hero__product" aria-label="ITZ FIZZ citrus sparkling drink">
          <span className="hero__product-label">CITRUS<br />SPLASH <span>01 / 03</span></span>
          <img className="hero__can" src={`${import.meta.env.BASE_URL}assets/itz-fizz-can.svg`} alt="ITZ FIZZ citrus sparkling drink can" width="420" height="760" fetchpriority="high" />
          <span className="hero__orbit hero__orbit--one" aria-hidden="true" />
          <span className="hero__orbit hero__orbit--two" aria-hidden="true" />
        </div>
        <p className="hero__side-note">SPARKLING<br />CITRUS DRINK <span>— EST. FOR THE EVERYDAY</span></p>
      </div>
      <a className="scroll-cue" href="#product">
        <span>SCROLL TO FEEL THE FIZZ</span>
        <i aria-hidden="true" />
      </a>
      <span className="hero__index" aria-hidden="true">01 — 03</span>
    </section>
  )
}
