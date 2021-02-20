import React from "react"
import { Link } from "react-router-dom"

const Header = (props) => {
  return (
    <header>
      <div className = "logo">
        <Link to = { "/" }>Home</Link>
        <Link to = { "/monochrome" }>Monochrome</Link>
        <Link to = { "/cheetah" }>Cheetah</Link>
        <Link to = { "/holidays" }>Holidays</Link>
        <Link to = { "/shoes" }>Shoes</Link>
      </div>
    </header>
  )
}

export default Header;