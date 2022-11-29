import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import {
    Input,
    CardText,
    Row,
    Col,
    Form,
    FormGroup,
    Label
} from "reactstrap"

import filterSlice from "./filterSlice"

export default function Filter() {

    const dispatch = useDispatch()
    const [nameSearch, setNameSearch] = useState('')
    const [status, setStatus] = useState('All')
    const [priorities, setPriorities] = useState([])

    useEffect(() => {
        const data = {
            search: nameSearch,
            status: status,
            priority: priorities
        }

        dispatch(filterSlice.actions.updateFilter(data))
    })

    const handlePriority = (e) => {
        if (!priorities.includes(e.target.value)) {
            const newPriorities = [
                ...priorities,
                e.target.value
            ]

            setPriorities(newPriorities)
        }else {
            const newPriorities = priorities.filter(priority => priority !== e.target.value)

            setPriorities(newPriorities)
        }
    }

    return (
        <Form style={{ borderBottom: '1px solid #333', paddingBottom: 10 }}>
            <FormGroup>
                <CardText
                    style={{ fontWeight: '500', marginBottom: 3, marginTop: 10 }}
                >Search</CardText>
                <Input bsSize='sm' placeholder="input search text" value={nameSearch} onChange={e => setNameSearch(e.target.value)} />
            </FormGroup>
            <FormGroup>
                <CardText
                    style={{ fontWeight: '500', marginBottom: 3, marginTop: 10 }}
                >
                    Filter by status
                </CardText>
                <Row onChange={(e) => setStatus(e.target.value)}>
                    <Col>
                        <Input type="radio" name="radio1" value='All' id="all" defaultChecked={status} />
                        <Label style={{ marginLeft: 8 }} for="all">All</Label>
                    </Col>
                    <Col>
                        <Input type="radio" name="radio1" value='Completed' id='completed' />
                        <Label style={{ marginLeft: 8 }} for='completed'>Completed</Label>
                    </Col>
                    <Col>
                        <Input type="radio" name="radio1" value='To do' id='to-do' />
                        <Label style={{ marginLeft: 8 }} for='to-do'>To do</Label>
                    </Col>
                </Row>
            </FormGroup>
            <FormGroup>
                <CardText
                    style={{ fontWeight: '500', marginBottom: 3, marginTop: 10 }}
                >
                    Filter by priority
                </CardText>
                <Row onChange={handlePriority}>
                    <Col>
                        <Input type="checkbox" name="radio2" value='High' id="high" />
                        <Label style={{ marginLeft: 8 }} for="high">High</Label>
                    </Col>
                    <Col>
                        <Input type="checkbox" name="radio2" value='Medium' id='medium' />
                        <Label style={{ marginLeft: 8 }} for='medium'>Medium</Label>
                    </Col>
                    <Col>
                        <Input type="checkbox" name="radio2" value='Low' id='low' />
                        <Label style={{ marginLeft: 8 }} for='low'>Low</Label>
                    </Col>
                </Row>
            </FormGroup>
        </Form>
    )
}