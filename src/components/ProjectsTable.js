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
                            <tr>
                                <td></td>
                            </tr>
                        </tbody>
                    </Table>
                    <ul>
                        { items.map(item => (
                            <li key={item.id}>
                               Customer: {item.data.customer_name} <br /> Project {item.data.project_code} | Created On {item.data.creation_date} | Due By {item.data.due_date} | Email: {item.data.email}
                            </li>
                            )
                        )}
                    </ul>
                </div>
            )
        }
    }
}

export default ProjectsTable
