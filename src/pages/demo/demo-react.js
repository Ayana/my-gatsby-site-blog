import React, {useState, useEffect, useRef} from 'react'
import Layout from '../../components/Layout'
import SEO from '../../components/SEO'
import styled from 'styled-components'

const StyledWrap = styled.div`
	margin-bottom: 20rem !important;
	.demo-section {
		padding: 5rem 0;
		text-align: center;
	}

	.show__item {
		min-height: 100px;
		.show__item__detail {
			transition: all 0.3s;
			opacity: 0;
			&.show {
				opacity: 1;
			}
		}
		.show__item__button {
			background: black;
			color: white;
			border-radius: 3px;
			padding: 5px;
		}
	}
	/* @media (max-width: 750px) {
	} */
`

// Function for redirect
// const getRedirectLanguage = () => {
//   if (typeof navigator === `undefined`) {
//     return null
//   }

//   const browserLang =
//     navigator && navigator.language && navigator.language.split("-")[0]
//   if (!browserLang) return "ja"

//   switch (browserLang) {
//     case "ja":
//       return "jp"
//     default:
//       return ""
//   }
// }

function FocusInput({location}) {
	const pageTitle = 'Demo Next'
	const pageSlug = 'demo-next'

	const [isDetail, setIsDetail] = useState(false)
	const [isClass, setIsClass] = useState('')

	function handleDisplay(e) {
		e.currentTarget.classList.add('hide')

		setTimeout(() => {
			setIsDetail(true)

			setTimeout(() => {
				setIsClass('show')
			}, 200)
		}, 200)
	}

	const inputRef = useRef(null)

	useEffect(() => {
		inputRef.current.focus()
	}, [])

	// Code for switch language
	// useEffect(() => {
	//   const urlLang = getRedirectLanguage()

	//   navigate(`/${urlLang}`)
	// }, [])

	// function myClicker() {
	// 	i++
	// 	console.log(i)
	// }

	// useEffect(() => {
	// var i = 0
	// const elem = document.getElementById('my-elem')
	// elem.addEventListener('click', function() {
	// 	// myClicker()
	// 	i++
	// 	elem.value = i
	// 	console.log(i)
	// })
	// }, [])

	return (
		<Layout location={location}>
			<SEO pageTitle={pageTitle} pageSlug={pageSlug} />
			<StyledWrap className="container basic-link">
				<div>
					<h1>{pageTitle}</h1>
					<h2>useRef() sample</h2>
					<input ref={inputRef} type="text" />

					<p style={{marginTop: '5rem'}}>Will try this next</p>
					<p className="ref">
						Refference:
						<br />
						<a href="https://www.iamtimsmith.com/blog/lets-build-a-search-bar-in-react/" target="_blank" rel="noopener noreferrer">
							Let's build a search bar in React!
						</a>
					</p>
				</div>

				<div className="show__item" style={{marginBottom: '4rem'}}>
					{isDetail ? (
						<div className={`show__item__detail ${isClass}`}>text text texttexttexttexttexttext text texttexttexttexttexttext text texttexttexttexttexttext text texttexttexttexttext</div>
					) : (
						<button className="show__item__button" onClick={handleDisplay}>
							Read More
						</button>
					)}
				</div>

				<div>
					<div id="my-elem" style={{width: '300px', height: '200px', background: 'gray'}}>
						{/* {i} */}
						<input value="0" />
					</div>
				</div>
			</StyledWrap>
		</Layout>
	)
}

export default FocusInput
