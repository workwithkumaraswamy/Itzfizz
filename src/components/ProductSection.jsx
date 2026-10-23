export default function ProductSection() {
  return (
    <section className="product-section" id="product" aria-labelledby="product-title">
      <div className="product-section__intro">
        <p className="section-kicker" data-reveal>THE EVERYDAY, ELEVATED</p>
        <h2 id="product-title" data-reveal>A little <em>lift.</em><br />A lot of life.</h2>
        <p className="product-section__description" data-reveal>
          Meet your new plus-one. Bright citrus, crisp bubbles, and a refreshing finish made for wherever the day takes you.
        </p>
        <a className="button button--dark inline-flex items-center" href="#story" data-reveal>
          Get to know ITZ FIZZ <span aria-hidden="true">↗</span>
        </a>
      </div>
      <div className="product-section__details" data-reveal>
        <img src={`${import.meta.env.BASE_URL}assets/itz-fizz-can.svg`} alt="ITZ FIZZ citrus splash can, front view" width="420" height="760" loading="lazy" />
        <div className="product-note product-note--top"><span>01</span><p>Bright citrus<br />notes</p></div>
        <div className="product-note product-note--bottom"><span>02</span><p>Made for the<br />in-between</p></div>
        <div className="product-section__stamp" aria-hidden="true">GOOD<br />VIBES<br /><b>ONLY</b></div>
      </div>
      <div className="product-section__marquee" aria-hidden="true">GOOD DAYS. GOOD FIZZ. GOOD DAYS. GOOD FIZZ.</div>
    </section>
  )
}
