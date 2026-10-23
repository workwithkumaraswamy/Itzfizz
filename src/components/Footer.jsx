export default function Footer() {
  return (
    <footer className="footer">
      <a className="brand-mark brand-mark--footer" href="#home" aria-label="ITZ FIZZ home">ITZ<span>FIZZ</span><i aria-hidden="true">®</i></a>
      <p className="footer__tagline">A little sparkle goes a long way.</p>
      <nav className="footer__links" aria-label="Footer navigation">
        <a href="#product">The fizz</a>
        <a href="#story">Our story</a>
      </nav>
      <p className="footer__social">SOCIALS COMING SOON</p>
      <p className="footer__contact">CONTACT PLACEHOLDER · hello@itzfizz.example</p>
      <p className="footer__legal">© {new Date().getFullYear()} ITZ FIZZ. MADE FOR THE MOMENT.</p>
    </footer>
  )
}
