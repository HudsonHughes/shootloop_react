import React, { Component } from 'react';
import './RecordManager.css'
import uuid from 'uuid'
import { Button, Modal, Form, Message, Grid, Segment, Checkbox, Header } from 'semantic-ui-react'
class App extends Component {

    constructor(props) {
        super(props);
        this.state = {files: [ {id:12}, {id:13} ]};
    }

    render() {
        const files = this.state.files.filter(
            () => true
        )
        const scrollableStyle={

        };
        return (
            <div className="record-manager-container">
                <div className="record-manager-item-1">

                </div>
                <div className="record-manager-item-2">
                    <div>
                        <Grid>
                            <Grid.Row columns={21}>
                                <Grid.Column width={1}>
                                    <Checkbox />
                                </Grid.Column><Grid.Column width={4}>
                                    <Header size='Small'>Name</Header>
                                </Grid.Column><Grid.Column width={4}>
                                    <Header size='Small'>Player</Header>
                                </Grid.Column><Grid.Column width={4}>
                                    <Header size='Small'>Created</Header>
                                </Grid.Column><Grid.Column width={4}>
                                    <Header size='Small'>Modified</Header>
                                </Grid.Column><Grid.Column width={4}>
                                    <Header size='Small'>Shots</Header>

                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </div>
                    <div style={scrollableStyle}>
                        <ul>
                            {files.map((f) =>
                                <FileItem key={f.id}
                                          file={f} />

                            )}
                        </ul>
                    </div>
                </div>
                <div className="record-manager-item-3">

                </div>
            </div>
        );
    }
}

class FileItem extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const file = this.props.file;
        const id = file.id;
        return (
            <Grid>
                <Grid>
                    <Grid.Row columns={21}>
                        <Grid.Column width={1}>
                            <Checkbox />
                        </Grid.Column><Grid.Column width={4}>
                        <Header size='Tiny'>Name</Header>
                    </Grid.Column><Grid.Column width={4}>
                        <Header size='Tiny'>Player</Header>
                    </Grid.Column><Grid.Column width={4}>
                        <Header size='Tiny'>Created</Header>
                    </Grid.Column><Grid.Column width={4}>
                        <Header size='Tiny'>Modified</Header>
                    </Grid.Column><Grid.Column width={4}>
                        <Header size='Tiny'>Shots</Header>

                    </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Grid>
        );
    }
}

export default App;
