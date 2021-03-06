import React from 'react'
import { Container } from 'Common'
import { Wrapper, Flex, Links, Details } from './styles'
import social from './social.json'

export const Footer = () => (
	<Wrapper>
		<Flex as={Container}>
			<Details>
				<h2>&lt; Biswajeet Das /&gt;</h2>
				<span>
					Made with{' '}
					<span aria-label="love" role="img">
						💖
					</span>{' '}
					and Coffee using{' '}
					<a
						href="https://www.gatsbyjs.org/"
						rel="noopener noreferrer"
						target="_blank"
					>
						GatsbyJS
					</a>
				</span>
			</Details>
			<Links>
				{social.map(({ id, name, link, icon }) => (
					<a
						key={id}
						href={link}
						target="_blank"
						rel="noopener noreferrer"
						aria-label={`follow me on ${name}`}
					>
						<img width="28" src={icon} alt={name} />
					</a>
				))}
			</Links>
		</Flex>
	</Wrapper>
)
