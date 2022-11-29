import { useState } from 'react'
import { useDispatch } from 'react-redux'
import {
    Row,
    Col,
    Input,
    Label,
    Badge
} from 'reactstrap'

import todoListSlice from '../TodoList/todoListSlice'

const priorities = [
    {
        id: 0,
        name: 'Low',
        color: 'secondary'
    },
    {
        id: 1,
        name: 'Medium',
        color: 'primary'
    },
    {
        id: 2,
        name: 'High',
        color: 'danger'
    }
]

export default function Todo({name, priority, todo}) {

    const dispatch = useDispatch()
    const [isChecked,setIsChecked] = useState(todo.completed)

    const pri = priorities.filter(prio => prio.name === priority).map(p => {
        return (
            <Badge style={isChecked ? {opacity: 0.8, textDecoration: 'line-through'} : {}} color={p.color} key={p.id}>{p.name}</Badge>
        )
    })[0]

    const handleCheck = () => {
        setIsChecked(!isChecked)
        dispatch(todoListSlice.actions.setCompleted(todo.id))
    }

    return (
        <Row>
            <Col>
                <Input type="checkbox" id={todo.id} onClick={handleCheck} defaultChecked={isChecked}/>
                <Label style={isChecked?{ marginLeft: 8, opacity: 0.5, textDecoration: 'line-through' }: {marginLeft: 8}} htmlFor={todo.id}>{name}</Label>
            </Col>
            <Col style={{ display: 'flex', alignItems: 'center', flexDirection: 'row-reverse' }}>
                {pri}
            </Col>
        </Row>
    )
}