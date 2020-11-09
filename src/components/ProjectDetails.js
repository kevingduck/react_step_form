import React, { Component } from 'react'


// Get data from Fauna
// Pre-populate data in form
// SUbmit changes to Fauna

export class ProjectDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isLoaded: false,
        }
    }
    
    render() {

        if (!isLoaded) {
            return <div>Loading ... </div>
        }
        else {
            return (
                <div style={{ padding: '20px' }}>
                    <Table responsive striped bordered hover>
                        <thead>
                            <tr>
                                <th>Customer</th>
                                <th>Dates</th>
                                <th>Contact</th>
                            </tr>
                        </thead>
                        <tbody>
                            {items.map(item => (
                                <tr key={item.id}>
                                    <td><a href={url + item.ref["@ref"].id}>{item.data.customer_name} - {item.data.project_code}</a></td>
                                    <td>Created {item.data.creation_date} <br /> Due {item.data.due_date}</td>
                                    <td><a href={"mailto:" + item.data.email}>{item.data.email}</a></td>
                                </tr>
                            )
                            )}
                        </tbody>
                    </Table>
                </div>
            )
        }
    }
}

export default ProjectDetails
