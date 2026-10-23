export default function BrandStory() {
  return (
    <section className="story-section" id="story" aria-labelledby="story-title">
      <div className="story-section__topline" data-reveal><span>ITZ A FEELING</span><span>EST. FOR THE EVERYDAY</span></div>
      <div className="story-section__body">
        <p className="section-kicker" data-reveal>OUR LITTLE BIG IDEA</p>
        <h2 id="story-title" data-reveal>Make room<br />for <em>the good stuff.</em></h2>
        <p className="story-section__copy" data-reveal>
          We believe the best moments don’t need a big occasion. A sunny walk, a long lunch, a laugh that goes on too long. ITZ FIZZ is here to make the everyday feel a little more alive.
        </p>
      </div>
      <div className="story-section__graphic" aria-hidden="true">
        <span className="story-section__sun" />
        <span className="story-section__word">FIZZ</span>
        <span className="story-section__caption">FIND YOUR FIZZ / TAKE IT EASY</span>
      </div>
      <span className="story-section__asterisk" aria-hidden="true">*</span>
    </section>
  )
}
