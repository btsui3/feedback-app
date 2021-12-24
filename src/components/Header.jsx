import PropTypes from 'prop-types'

function Header ({ text, bgColor, textColor }) {
  const headerStyles = {
    backgroundColor: bgColor,
    color: textColor
  }

  return (
    <header style={headerStyles}>
      {text}
    </header>
  )
}

Header.defaultProps = {
  text: 'This is the default props'
}

Header.propTypes = {
  text: PropTypes.string
}

export default Header
