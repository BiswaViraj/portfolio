import React from 'react'
import { Container } from 'Common'
import contact from 'Static/illustrations/contact.svg'
import { Wrapper, Details, Thumbnail } from './styles'
import ContactForm from './ContactForm'

export const Contact = () => (
	<Wrapper as={Container} id="contact">
		<Details>
			<h1>Contact Me</h1>
			<ContactForm />
		</Details>

		<Thumbnail>
			<img src={contact} alt="I’m Biswajeet and I’m a Front-End Developer!" />
		</Thumbnail>
	</Wrapper>
)
