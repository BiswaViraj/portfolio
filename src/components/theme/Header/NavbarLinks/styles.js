import styled from 'styled-components'

export const Wrapper = styled.div`
	a {
		color: #6d6d6d;
		text-decoration: none;
	}
	${({ desktop }) =>
		desktop
			? `
			@media (max-width: 960px) {
					display: none;
			}

			a {
					margin-right: 1rem;

					&:last-child {
							margin-right: unset;
					}
			} 
			.contact {
				padding-left: 0.8rem;
				padding-right: 0.8rem;
				border: 2px solid blue;
			}
		`
			: `
			padding: 3rem;
			display: flex;
			flex-direction: column;

			a {
					margin-bottom: 1rem;

					&:last-child {
							margin-bottom: unset;
					}
			}
	`}
`
