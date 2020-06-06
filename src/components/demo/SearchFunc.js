import React, { useState } from 'react'

const SearchFunc = ({ persons }) => {
	const [word, setWord] = useState('')
	const [filterDisplay, setFilterDisplay] = useState(persons)

	const handleChange = (e) => {
		let oldList = persons.map((person) => {
			return { name: person.name.toLowerCase(), number: person.number }
		})

		if (e !== '') {
			let newList = []
			setWord(e)
			newList = oldList.filter((person) => person.name.includes(word.toLowerCase()))
			setFilterDisplay(newList)
		} else {
			setFilterDisplay(persons)
		}
	}

	return (
		<div>
			filter: <input onChange={(e) => handleChange(e.target.value)} />
			<div style={{ margin: '0.5rem 3rem' }}>
				{filterDisplay.map((person, i) => (
					<div key={i}>
						{person.name} <span>{person.number}</span>
					</div>
				))}
			</div>
		</div>
	)
}

export default SearchFunc
