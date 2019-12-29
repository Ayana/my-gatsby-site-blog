import React, { useState } from "react"
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import uuid from 'uuid';
import styled from "styled-components"

const StyledTodoList = styled.div`
	.remove-btn {
		margin-right: 0.5rem;
		padding: 0.6em 0.8em;
	}
	.todo-list {
		margin: 0.5em 0;
	}

	.item-enter {
		opacity: 0;
	}
	.item-enter-active {
		opacity: 1;
		transition: .5s ease-in;
	}
	.item-exit {
		opacity: 1;
	}
	.item-exit-active {
		opacity: 0;
		transition: .5s ease-in;
	}
`

const TodoList = () => {

	const [items, setItems] = useState([
		{ id: uuid(), text: 'Buy eggs' },
		{ id: uuid(), text: 'Pay bills' },
		{ id: uuid(), text: 'Invite friends over' },
		{ id: uuid(), text: 'Fix the TV' },
	])

	return(
		<StyledTodoList>

			<ul className="no-bullet">
				<TransitionGroup className="todo-list">
					{items.map(({ id, text }) => (

						<CSSTransition
							key={id}
							timeout={300}
							classNames="item"
						>
						<li className="todo-list">
							<button
								className="remove-btn button close"
								onClick={() =>
									setItems(items =>
										items.filter(item => item.id !== id)
									)
								}
							>
								&times;
							</button>
							{text}
						</li>
						</CSSTransition>
					))}
				</TransitionGroup>
			</ul>

			<button
				className="button alert"
				onClick={() => {
					const text = prompt('Enter your to do')
					if (text) {
						setItems(items => [
							...items,
							{ id: uuid(), text },
						])
					}
				}}
			>
				Add Item
			</button>
		</StyledTodoList>
	)
}

export default TodoList