export default function Navbar() {
  return (
    <header className="navbar">
      <a className="brand-mark" href="#home" aria-label="ITZ FIZZ home">
        ITZ<span>FIZZ</span><i aria-hidden="true">®</i>
      </a>
      <nav className="navbar__links" aria-label="Main navigation">
        <a href="#product">The fizz</a>
        <a href="#story">Our story</a>
      </nav>
      <a className="nav-cta" href="#product">Meet your new fizz <span aria-hidden="true">↗</span></a>
    </header>
  )
}
