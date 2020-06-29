import React from 'react'
import Layout from '../../components/Layout'
import SEO from '../../components/SEO'
import { Tabs, Tab, Panel } from '@bumaga/tabs'

const DemoTab = ({ location }) => {
	const pageTitle = 'Demo Tab UI'
	const pageSlug = 'demo-tab'

	return (
		<Layout location={location}>
			<SEO pageTitle={pageTitle} pageSlug={pageSlug} />
			<div className="container basic-link">
				<h1>{pageTitle}</h1>
				<p>This tab is super simple! No styles!</p>
				<Tabs>
					<div>
						<Tab>
							<button>Tab 1</button>
						</Tab>
						<Tab>
							<button>Tab 2</button>
						</Tab>
						<Tab>
							<button>Tab 3</button>
						</Tab>
					</div>

					<Panel>
						<p>Panel 1</p>
					</Panel>
					<Panel>
						<p>Panel 2</p>
					</Panel>
					<Panel>
						<p>panel 3</p>
					</Panel>
				</Tabs>

				<p className="ref">
					Refference:
					<br />
					<a href="https://github.com/jeetiss/tabs" target="_blank" rel="noopener noreferrer">
						@bumaga/tabs
					</a>
				</p>
			</div>
		</Layout>
	)
}

export default DemoTab
