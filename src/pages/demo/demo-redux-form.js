import React, {useEffect} from 'react'
import Layout from '../../components/Layout'
import SEO from '../../components/SEO'

import styled from 'styled-components'

const StyledItem = styled.div`
	.button-today {
		background: #dddddf;
		border: 1px solid #cacaca;
		border-radius: 5px;
		padding: 3px 8px;
		font-size: 1.3rem;
		margin-right: 1.2rem;
		cursor: pointer;
	}
	input,
	select {
		background: #f8f8f8;
		border-radius: 3px;
		border: 1px solid #ddd;
		padding: 3px 10px;
		margin-right: 5px;
	}
	.width-s {
		width: 15%;
	}
	@media (max-width: 750px) {
	}
	@media (min-width: 751px) {
	}
`

const DemoReduxForm = ({location}) => {
	const pageTitle = 'Demo Redux Form'
	const pageSlug = 'demo-redux-form'

	useEffect(() => {
		// item3 - loop date
		// Get date
		const item3Today = new Date()
		const item3Year = item3Today.getFullYear()
		const item3Month = item3Today.getMonth() + 1
		const item3Day = item3Today.getDate()

		// Loop start
		const optionLoop = (start, end, id, this_day) => {
			let i, opt

			opt = ''
			for (i = start; i <= end; i++) {
				if (i === this_day) {
					opt += `<option value='${i}' selected>${i}</option>`
				} else {
					opt += `<option value='${i}'>${i}</option>`
				}
			}
			document.getElementById(id).innerHTML = opt
		}

		// Start function
		optionLoop(2000, item3Year, 'item3-year', item3Year)
		optionLoop(1, 12, 'item3-month', item3Month)
		optionLoop(1, 31, 'item3-day', item3Day)
	})
	return (
		<Layout location={location}>
			<SEO pageTitle={pageTitle} pageSlug={pageSlug} />
			<StyledItem>
				<div className='container basic-link'>
					<h1>{pageTitle}</h1>

					{/* item1 */}
					<div className='item' style={{marginBottom: '5rem'}}>
						<h2>Static Date</h2>
						<input id='input-date-year' className='width-s' type='text' placeholder='Year' />
						<select id='select-date-mm' className='width-s mar-l-10'>
							<option value=''>MM</option>
							<option value='01'>1</option>
							<option value='02'>2</option>
							<option value='03'>3</option>
							<option value='04'>4</option>
							<option value='05'>5</option>
							<option value='06'>6</option>
							<option value='07'>7</option>
							<option value='08'>8</option>
							<option value='09'>9</option>
							<option value='10'>10</option>
							<option value='11'>11</option>
							<option value='12'>12</option>
						</select>
						<select id='select-date-dd' className='width-s mar-l-10'>
							<option value=''>DD</option>
							<option value='01'>1</option>
							<option value='02'>2</option>
							<option value='03'>3</option>
							<option value='04'>4</option>
							<option value='05'>5</option>
							<option value='06'>6</option>
							<option value='07'>7</option>
							<option value='08'>8</option>
							<option value='09'>9</option>
							<option value='10'>10</option>
							<option value='11'>11</option>
							<option value='12'>12</option>
							<option value='13'>13</option>
							<option value='14'>14</option>
							<option value='15'>15</option>
							<option value='16'>16</option>
							<option value='17'>17</option>
							<option value='18'>18</option>
							<option value='19'>19</option>
							<option value='20'>20</option>
							<option value='21'>21</option>
							<option value='22'>22</option>
							<option value='23'>23</option>
							<option value='24'>24</option>
							<option value='25'>25</option>
							<option value='26'>26</option>
							<option value='27'>27</option>
							<option value='28'>28</option>
							<option value='29'>29</option>
							<option value='30'>30</option>
							<option value='31'>31</option>
						</select>
					</div>

					{/* item3 */}
					<div className='item' style={{marginBottom: '5rem'}}>
						<h2>Loop Date</h2>
						<select id='item3-year' className='width-s'>
							<option value=''>YY</option>
						</select>
						<select id='item3-month' className='width-s'>
							<option value=''>MM</option>
						</select>
						<select id='item3-day' className='width-s'>
							<option value=''>DD</option>
						</select>
						<p className='ref' style={{marginTop: '3rem'}}>
							Refference:
							<br />
							<a href='https://its-office.jp/blog/js/2016/03/08/ymd-html.html' target='_blank' rel='noopener noreferrer'></a>
						</p>
					</div>
				</div>
			</StyledItem>
		</Layout>
	)
}

export default DemoReduxForm
