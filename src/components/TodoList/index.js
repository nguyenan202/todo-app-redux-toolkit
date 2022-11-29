import {
    Button,
    Container,
    Input,
    InputGroup
} from "reactstrap"
import { useDispatch, useSelector } from "react-redux"
import { v4 as uuidv4 } from "uuid"

import Todo from "../Todo"
import todoListSlice from "./todoListSlice"
import { todoListSelector } from "../../redux/selector"

import { useRef, useState } from "react"

export default function TodoList() {

    const dispatch = useDispatch()
    const todos = useSelector(todoListSelector)
    const [input, setInput] = useState('')
    const [priority, setPriority] = useState('Low')

    const inputRef = useRef()

    const handleAddTodo = () => {

        const data = {
            id: uuidv4(),
            name: input,
            completed: false,
            priority: priority
        }

        dispatch(todoListSlice.actions.addTodo(data))

        //inputRef.current.focus()
        setInput('')
        setPriority('Low')
        inputRef.current.focus()
    }

    const listTodo = todos.map(todo => <Todo name={todo.name} priority={todo.priority} todo={todo} key={todo.id} />)

    return (
        <Container style={{ padding: 0 }}>
            <div style={{ height: 240, margin: '24px 0 16px 0', padding: '0 8px', overflow: 'scroll', overflowX: 'hidden' }}>
                {listTodo}
            </div>

            <InputGroup>
                <Input ref={inputRef} bsSize='sm' placeholder='Enter To do' value={input} onChange={(e)=>setInput(e.target.value)}/>
                <select value={priority} onChange={(e) => setPriority(e.target.value)}>
                    <option value='High'>High</option>
                    <option value='Medium'>Medium</option>
                    <option value='Low'>Low</option>
                </select>
                <Button color="primary" onClick={handleAddTodo}>Add</Button>
            </InputGroup>
        </Container>
    )
}