import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import styled from "styled-components"

const StyledAbout = styled.div`
	.about__header {
		margin-top: 2em;
	}
	.about__header--sub {
		font-size: 1.2rem;
		margin-top: 4em;
	}
	.about__list {
		line-height: 2;
	}
`;


const About = (props) => {
	const pageTitle = "About"
	const pageSlug = "about"

	return (
		<Layout location={props.location}>
			<SEO pageTitle={pageTitle} pageSlug={pageSlug} />
			<StyledAbout >
				<div className="container">
					<h1>{pageTitle}</h1>
					
					<div>
						<p>I'm a web developer with 13 years of experience in web design & development from Japan. Over the past years, I have worked for various companies and clients with skills of web development, design and project management. And last couple of years, I have been focusing on front-end creative design from the technological aspects.</p>
						<p>On the other side of the business, I have been challanging to solve some social issues utelizing my various skills and experience as an orgnizer and a supporter. </p>
					</div>
					<h2 className="about__header">What I do</h2>
					<section>
						<ul className="no-bullet about__list">
							<li><strong>Web Development</strong> - Website (JavaScript, React, GatsbyJS, HTML/CSS, WordPress)</li>
							<li><strong>UI/UX Design</strong> - Experienced well in E-commerce and Food industory</li>
							<li><strong>Organizing</strong> - Creating community, Event managiment</li>
						</ul>
					</section>

					<h3 className="about__header about__header--sub">A little more about me</h3>
					<section className="about-sec">
					- Owner of a summer cafe<br />
					- Shaved ice maker<br /> 
					- Have passion for creating recipe utelizing fruits<br />
					- Based in New York and Nagano, Japan<br />
					- Rock climber
					</section>

				</div>
			</StyledAbout>
		</Layout>
	)
}


export default About
