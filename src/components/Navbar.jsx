import React from 'react'

const Navbar = (props) => {
  return (
    <nav className={props.darkMode ? "dark": ""}>
      <img src="src/assets/react-icon-small.png" alt="React logo" className='nav--logo_icon'/>
      <h3 className='nav--logo_text'>ReactFacts</h3>
      <div className="toggler">
        <p className="toggler--light">Light</p>
          <div className="toggler--slider" onClick={props.toggleDarkMode}>
            <div className="toggler--slider--circle"></div>
          </div>
        <p className="toggler--dark">Dark</p>
      </div>
    </nav>
  )
}

export default Navbar