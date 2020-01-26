import React, { useState } from 'react'

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

  function funcDecrement() {
    if (count > 0) {
      setCount(count - 1)
    } else if (count === 'Over') {
      setCount(10)
    } else {

    }
  }

  function funcIncrement () {
    if (count < 10) {
      setCount(count + 1)
    } else {
      setCount('Over')
    }
  }

  return (
    <StyledIncrement>
      <div className="counter-box">
        <div className="number">{count}</div>
        <button
          className="button inc"
          onClick={funcDecrement}
        >
          -
        </button>
        <button
          className="button inc"
          onClick={funcIncrement}
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

// const Increment = () => {
//   const [ count, setCount ] = useState(0)

//   return (
//     <StyledIncrement>
//       <div className="counter-box">
//         <div className="number">{count}</div>
//         <button
//           className="button inc"
//           onClick={ () => setCount( count - 1 ) }
//         >
//           -
//         </button>
//         <button
//           className="button inc"
//           onClick={ () => setCount( count + 1 ) }
//         >
//           +
//         </button>
//         <div>
//           <button
//             className="button tiny hollow"
//             onClick={ () => setCount(0) }
//           >
//             Reset
//           </button>
//         </div>
//       </div>
//     </StyledIncrement>
//   )
// }

export default Increment