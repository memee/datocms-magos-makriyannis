import React from 'react'
import PropTypes from 'prop-types'
import logo from '../images/mm-icon-white.png'

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="logo">
            <img src={logo} alt=""/>
        </div>
        <div className="content">
            <div className="inner">
                <h1>Magos Makriyannis</h1>
                <p>Electronic music with ancient heritage.</p>
            </div>
        </div>
        <nav>
            <ul>
                <li><a onClick={() => {props.onOpenArticle('intro')}}>Intro</a></li>
                <li><a onClick={() => {props.onOpenArticle('work')}}>Work</a></li>
                <li><a onClick={() => {props.onOpenArticle('about')}}>About</a></li>
                <li><a onClick={() => {props.onOpenArticle('contact')}}>Contact</a></li>
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header
