import React, {useState} from 'react'
import Layout from '../../components/Layout'
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs'
import 'react-tabs/style/react-tabs.css'
import styled from 'styled-components'
import SEO from '../../components/SEO'
import FormItem from '../../components/demo/FormItem'

const StyledDemo = styled.div`
	.panel {
		min-height: 50vh;
	}
`

const DemoTab = ({location}) => {
	const pageTitle = 'Demo Tab UI'
	const pageSlug = 'demo-react-tabs'

	const [value, setValue] = useState('')

	function onChange(e) {
		localStorage.setItem('inputItem', e.target.value)
		setValue(e.target.value)
	}
	return (
		<Layout location={location}>
			<SEO pageTitle={pageTitle} pageSlug={pageSlug} />
			<div className='container basic-link'>
				<StyledDemo>
					<h1>{pageTitle}</h1>
					<p>This tab is super simple! No styles!</p>
					<Tabs>
						<div className='tabs'>
							<TabList>
								<Tab>Tab1</Tab>
								<Tab>Tab2</Tab>
								<Tab>Tab3</Tab>
							</TabList>
						</div>

						<div className='panel'>
							<TabPanel>
								<h2>Panel 1</h2>
								<div className='item'>
									<FormItem value={value} onChange={onChange} />
									{/* <input value={value} onChange={onChange} /> */}
								</div>
							</TabPanel>
							<TabPanel>
								<h2>Panel 2</h2>
								<div className='item'>
									<FormItem value={value} onChange={onChange} />
									{/* <input value={value} onChange={onChange} /> */}
								</div>
							</TabPanel>
							<TabPanel>
								<h2>Panel 3</h2>
								<div className='item'>
									<FormItem value={value} onChange={onChange} />
									{/* <input value={value} onChange={onChange} /> */}
								</div>
							</TabPanel>
						</div>
					</Tabs>

					<p className='ref'>
						Refference:
						<br />
						<a href='https://www.npmjs.com/package/react-tabs' target='_blank' rel='noopener noreferrer'>
							react-tabs
						</a>{' '}
						<br />
						<a href='https://github.com/jeetiss/tabs' target='_blank' rel='noopener noreferrer'>
							@bumaga/tabs
						</a>{' '}
						→ Switched react-tabs seeing bug issue of (https://github.com/jeetiss/tabs/issues/122)
					</p>
				</StyledDemo>
			</div>
		</Layout>
	)
}

export default DemoTab
