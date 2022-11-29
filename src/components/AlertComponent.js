import { useState } from "react"
import {
    Alert,
    UncontrolledAlert
} from "reactstrap"

export default function AlertTest() {

    const [isOpen,setIsOpen] = useState(true)

    const toggle = () => {
        setIsOpen(false)
    }

    return (
        <div>
            <Alert>
                <h4 className="alert-heading">
                    Well done!
                </h4>
                <p>
                    Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.
                </p>
                <hr />
                <p className="mb-0">
                    Whenever you need to, be sure to use margin utilities to keep things nice and tidy.
                </p>
            </Alert>

            <Alert color="secondary" isOpen={isOpen} toggle={toggle}>
                I am an Aler using State
            </Alert>

            <UncontrolledAlert color="info">
                I am an Alert without State
            </UncontrolledAlert>
        </div>
    )
}