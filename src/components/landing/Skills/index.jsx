import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Container, Button } from 'Common'
import dev from 'Static/illustrations/skills.svg'
import { Wrapper, SkillsWrapper, Details, Thumbnail } from './styles'

export const Skills = () => (
	<Wrapper id="about">
		<SkillsWrapper as={Container}>
			<Thumbnail>
				<img src={dev} alt="Biswajeet Front-End Developer!" />
			</Thumbnail>
			<Details>
				<h1>About Me</h1>
				<p>
					I'm a creative and passionate Front-End Developer based in Cuttack,
					India who believes in creating meaningful products that creates value.
					Coffee and Code is all that keeps me glued to the monitor screen.
					<br />
					Apart from front-end technologies, I know a bit of back-end
					technologies too. Besides coding, I also love to play games and read
					books.
				</p>
				<h4>Skills:</h4>
				<ul>
					<li>JavaScript</li>
					<li>React.js</li>
					<li>Gatsby.js</li>
					<li>HTML/CSS</li>
					<li>SCSS</li>
					<li>Node.js</li>
					<li>Express</li>
					<li>MongoDb</li>
					<li>C programming</li>
					<li>Python</li>
				</ul>
				<Button as={AnchorLink} href="#contact">
					Hire me
				</Button>
			</Details>
		</SkillsWrapper>
	</Wrapper>
)
