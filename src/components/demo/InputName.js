import React, { useState, useEffect } from 'react'

import styled from "styled-components"

const StyledInputName = styled.div`
  .name-box {
    margin-bottom: 3em;
		.greeting {
			margin-bottom: 1.5em;
		}
		.name-input {
			margin-bottom: 1em;
			input {
				border-radius: 3px;
				border: 1px solid #ddd;
				font-size: 0.9rem;
				padding: 5px 10px;
			}
		}
  }
  @media (min-width: 800px) {
  }
`

const InputName = () => {
  const [ name, setName ] = useState('')
  const [ surname, setSurname ] = useState('')

  useEffect(() => {
    // document.title = `Hello ${name} ${surname}`
  })

  function handleNameChange(e) {
    setName(e.target.value)
  }

  function handleSurnameChange(e) {
    setSurname(e.target.value)
  }

  return (
    <StyledInputName>
      <div className="name-box">
        <div className="greeting">
          Hello{ name ? ' ' + name + ' ' + surname + ',' : '!' }
        </div>

        <div className="name-input">
					<input 
						type="text"
						placeholder="First Name"
						value={name} 
						onChange={handleNameChange}
					/>
				</div>

        <div className="name-input">
					<input 
						type="text"
						placeholder="Last Name"
						value={surname} 
						onChange={handleSurnameChange}
					/>
				</div>
      </div>
    </StyledInputName>
  )
}

export default InputName