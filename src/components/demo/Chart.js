import React, { useState, useEffect, useRef } from 'react'
import * as d3 from 'd3'

const BarChart = ({ data, w, h, color }) => {
	const chartRef = useRef()

	useEffect(() => {
		const svg = d3
			.select(chartRef.current)
			.append('svg')
			.attr('width', w)
			.attr('height', h)
			.style('background', '#fff')
			.style('padding', '20')

		svg
			.selectAll('rect')
			.data(data)
			.enter()
			.append('rect')
			.attr('x', (d, i) => i * 65)
			.attr('y', (d, i) => h - 10 * d)
			.attr('width', 50)
			.attr('height', (d, i) => 10 * d)
			.attr('fill', color)
	}, [chartRef])

	return <div ref={chartRef}></div>
}

export default BarChart
