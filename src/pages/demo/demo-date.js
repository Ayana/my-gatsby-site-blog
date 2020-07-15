import React, {useState, useEffect} from 'react'
import Layout from '../../components/Layout'
import SEO from '../../components/SEO'
import {format} from 'date-fns'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

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

const DemoDate = (props) => {
	const location = props.location
	const pageTitle = 'Demo Date'
	const pageSlug = 'demo-date'

	// item1 - regular date
	const [item1DateDD, setItem1DateDD] = useState('')
	const [item1DateMM, setItem1DateMM] = useState('')
	const [item1DateYear, setItem1DateYear] = useState('')

	// item2 - react datepicker
	const [item2SelectDate, setItem2SelectDate] = useState(new Date())
	const [item2DateValue, setItem2DateValue] = useState('Pick a date above')

	function getCurrentDate() {
		const selectMonth = document.querySelector('#select-date-mm')
		const selectDate = document.querySelector('#select-date-dd')

		const today = new Date()
		const year = today.getFullYear()
		const month = ('0' + (today.getMonth() + 1)).slice(-2)
		const date = ('0' + today.getDate()).slice(-2)

		setItem1DateYear(year)
		setItem1DateMM(month)
		setItem1DateDD(date)

		selectMonth.selectedIndex = month
		selectDate.selectedIndex = date
	}

	function handleDateChange(item2SelectDate) {
		const formatDate = format(item2SelectDate, 'yyyy/MM/dd')
		setItem2DateValue(formatDate)
		setItem2SelectDate(item2SelectDate)
	}

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
				<div className="container basic-link">
					<h1>{pageTitle}</h1>

					{/* item1 */}
					<div className="item" style={{marginBottom: '5rem'}}>
						<h2>Static Date</h2>
						<button className="button-today" onClick={getCurrentDate}>
							Today
						</button>
						<input id="input-date-year" className="width-s" type="text" placeholder="Year" value={item1DateYear} onChange={(e) => setItem1DateYear(e.target.value)} />
						<select id="select-date-mm" className="width-s mar-l-10" onChange={(e) => setItem1DateMM(e.target.value)}>
							<option value="">MM</option>
							<option value="01">1</option>
							<option value="02">2</option>
							<option value="03">3</option>
							<option value="04">4</option>
							<option value="05">5</option>
							<option value="06">6</option>
							<option value="07">7</option>
							<option value="08">8</option>
							<option value="09">9</option>
							<option value="10">10</option>
							<option value="11">11</option>
							<option value="12">12</option>
						</select>
						<select id="select-date-dd" className="width-s mar-l-10" onChange={(e) => setItem1DateDD(e.target.value)}>
							<option value="">DD</option>
							<option value="01">1</option>
							<option value="02">2</option>
							<option value="03">3</option>
							<option value="04">4</option>
							<option value="05">5</option>
							<option value="06">6</option>
							<option value="07">7</option>
							<option value="08">8</option>
							<option value="09">9</option>
							<option value="10">10</option>
							<option value="11">11</option>
							<option value="12">12</option>
							<option value="13">13</option>
							<option value="14">14</option>
							<option value="15">15</option>
							<option value="16">16</option>
							<option value="17">17</option>
							<option value="18">18</option>
							<option value="19">19</option>
							<option value="20">20</option>
							<option value="21">21</option>
							<option value="22">22</option>
							<option value="23">23</option>
							<option value="24">24</option>
							<option value="25">25</option>
							<option value="26">26</option>
							<option value="27">27</option>
							<option value="28">28</option>
							<option value="29">29</option>
							<option value="30">30</option>
							<option value="31">31</option>
						</select>
					</div>

					{/* item3 */}
					<div className="item" style={{marginBottom: '5rem'}}>
						<h2>Loop Date</h2>
						<select id="item3-year" className="width-s">
							<option value="">YY</option>
						</select>
						<select id="item3-month" className="width-s">
							<option value="">MM</option>
						</select>
						<select id="item3-day" className="width-s">
							<option value="">DD</option>
						</select>
						<p className="ref" style={{marginTop: '3rem'}}>
							Refference:
							<br />
							<a href="https://its-office.jp/blog/js/2016/03/08/ymd-html.html" target="_blank" rel="noopener noreferrer">
								簡単にHTMLの年月日のプルダウンを作る方法
							</a>
							<br />
							<a href="https://blog.mimipen.net/entry/2019/09/02/083834" target="_blank" rel="noopener noreferrer">
								Next Step: JavaScriptで日付セレクトボックスを作ろう！～うるう年も考慮してみよう！～
							</a>
						</p>
					</div>

					{/* item2 */}
					<div className="item" style={{marginBottom: '5rem'}}>
						<h2>React Date Picker with date-fns</h2>
						<DatePicker className="element" selected={item2SelectDate} onChange={handleDateChange} dateFormat="MM/dd/yyyy h:mm aa" placeholderText="Click to pick date" /> <br />
						<p style={{marginTop: '1rem', fontSize: '0.9rem'}}>Custom Value: {item2DateValue}</p>
						<p className="ref" style={{marginTop: '3rem'}}>
							Refference:
							<br />
							<a href="https://reactdatepicker.com/" target="_blank" rel="noopener noreferrer">
								React Datepicker
							</a>
							<br />
							<a href="https://date-fns.org/" target="_blank" rel="noopener noreferrer">
								date-fns
							</a>
						</p>
					</div>
				</div>
			</StyledItem>
		</Layout>
	)
}

export default DemoDate
