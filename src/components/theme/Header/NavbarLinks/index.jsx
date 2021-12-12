import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Wrapper } from './styles'
import Resume from '../../../../../static/resume/biswajeetdas.pdf'

const NavbarLinks = ({ desktop }) => (
	<Wrapper desktop={desktop}>
		<AnchorLink href="#about">About</AnchorLink>
		<AnchorLink href="#projects">Projects</AnchorLink>
		<AnchorLink className="contact" href="#contact">
			Contact
		</AnchorLink>
// 		<a href={Resume} download="biswajeetdas">
// 			Resume
// 		</a>
	</Wrapper>
)

export default NavbarLinks
