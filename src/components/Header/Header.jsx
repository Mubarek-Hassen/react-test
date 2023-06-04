import Classes from "./Header.module.css"
function Header() {
  return (
    <nav className={`${Classes.nav} `}>
      <h1>API</h1>
      <ul className={Classes.ul}>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  )
}

export default Header