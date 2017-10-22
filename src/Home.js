import React, { Component } from 'react';
import { Button, Header, Modal, Form, Message  } from 'semantic-ui-react'
import './Home.css';
import RecordManager from './RecordManager'
class App extends Component {
    render() {
        return (
            <div className="container">
                <div className="item-1">
                    <NewRecordModal></NewRecordModal>
                    <ManageRecordModal></ManageRecordModal>
                </div>
                <div className="item-2">
                    <Header size='huge'>Shoot Loop</Header>
                </div>
                <div className="item-3">
                    <p>b</p>
                </div>
            </div>
        );
    }
}

const ManageRecordModal = () => (
    <Modal trigger={<Button class="ui primary button" role="button">Manage Records</Button>}>
        <Modal.Content>
            <RecordManager></RecordManager>
        </Modal.Content>
    </Modal>
)

const NewRecordModal = () => (
    <Modal trigger={<Button class="ui primary button" role="button">New Record</Button>}>
        <Modal.Header>Enter name for new record</Modal.Header>
        <Modal.Content>
            <Modal.Description>
                <Form error>
                    <Form.Input placeholder='' />
                    <Message
                        error
                        // header='Action Forbidden'
                        content='A record by that name exists.'
                    />
                    <Button type='submit'>Submit</Button>
                </Form>
            </Modal.Description>
        </Modal.Content>
    </Modal>
)

export default App;
