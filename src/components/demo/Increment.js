import React, { useState, useEffect } from 'react'

import styled from "styled-components"

const StyledIncrement = styled.div`
  .counter-box {
    border: 1px solid #ccc;
    border-radius: 4px;
    display: inline-block;
    padding: 1em 3em;
    text-align: center;
    .number {
      font-size: 1.5rem;
    }
    .inc {
      font-size: 1.2rem;
      margin: 1em;
      padding: 0.2em 0.4em;
    }
  }
  @media (min-width: 800px) {
  }
`

const Increment = () => {
  const [ count, setCount ] = useState(0)

  return (
    <StyledIncrement>
      <div className="counter-box">
        <div className="number">{count}</div>
        <button
          className="button inc"
          onClick={ () => setCount( count - 1 ) }
        >
          -
        </button>
        <button
          className="button inc"
          onClick={ () => setCount( count + 1 ) }
        >
          +
        </button>
        <div>
          <button
            className="button tiny hollow"
            onClick={ () => setCount(0) }
          >
            Reset
          </button>
        </div>
      </div>
    </StyledIncrement>
  )
}

export default Increment