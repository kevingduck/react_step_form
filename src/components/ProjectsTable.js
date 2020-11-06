import React, { Component } from 'react'
import Table from 'react-bootstrap/Table';

export class ProjectsTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isLoaded: false,
        }
    }

    componentDidMount() {
        fetch('https://converged.netlify.app/.netlify/functions/project')
        .then(res => res.json())
        .then(json => {
            this.setState({
                isLoaded: true,
                items: json,
            })
        });
    }

    render() {
        var { isLoaded, items } = this.state;

        if (!isLoaded) {
            return <div>Loading ... </div>
        } 
        else {
            return (
                <div>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Customer</th>
                                <th>Project</th>
                                <th>Created</th>
                                <th>Due</th>
                                <th>Email</th>
                            </tr>
                        </thead>
                        <tbody> 
                            { items.map(item => (
                                <tr key={item.id}>
                                    <td>{item.data.customer_name}</td>
                                    <td>{item.data.project_code}</td>
                                    <td>{item.data.creation_date}</td>
                                    <td>{item.data.due_date}</td>
                                    <td>{item.data.email}</td>
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

export default ProjectsTable
