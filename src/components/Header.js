import React from "react"
import { Link } from "react-router-dom"
import "./Header.scss"

const Header = () => {
  return (
    <header>
      <div className = "logo">
        <ul>
          <li><Link to = { "/" }>Home</Link></li>
          <li><Link to = { "/monochrome" }>Monochrome</Link></li>
          <li><Link to = { "/cheetah" }>Cheetah</Link></li>
          <li><Link to = { "/holidays" }>Holidays</Link></li>
          <li><Link to = { "/shoes" }>Shoes</Link></li>
        </ul>
      </div>
    </header>
  )
}

export default Header