import React, { useState } from 'react';
import {
    Collapse,
    Button,
    CardBody,
    Card,
    Alert
} from 'reactstrap'

export default function CollapseTest() {

    const [isOpen1, setIsOpen1] = useState(false)
    const [isOpen2, setIsOpen2] = useState(false)

    const toggle1 = () => {
        setIsOpen1(!isOpen1)
    }

    const toggle2 = () => {
        setIsOpen2(!isOpen2)
    }

    return (
        <div style={{ width: '500px' }}>
            <Button color='primary' onClick={toggle1} style={{ marginBottom: '1rem' }}>
                Toggle 1
            </Button>

            <Collapse isOpen={isOpen1}>
                <Card>
                    <CardBody>
                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                        terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
                        labore wes anderson cred nesciunt sapiente ea proident.
                    </CardBody>
                </Card>
            </Collapse>

            <br/>
            <Button color='primary' onClick={toggle2} style={{ marginBottom: '1rem' }}>
                Toggle 2
            </Button>

            <Collapse isOpen={isOpen2} horizontal>
                <Alert
                    style={{
                        width: '500px'
                    }}
                >
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                </Alert>
            </Collapse>
        </div>
    )
}