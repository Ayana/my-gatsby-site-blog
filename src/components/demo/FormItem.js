import React from 'react'

const style = {}

export default (props) => (
	<div className='item'>
		<div style={style}>
			<input value={props.value} onChange={props.onChange} />
		</div>
	</div>
)
