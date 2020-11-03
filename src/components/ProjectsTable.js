import React, { Component } from 'react'
// import Table from 'react-bootstrap/Table';

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
                    <ul>
                        { items.map(item => (
                            <li key={item.id}>
                               Customer: {item.data.customer_name} | Project {item.data.project_code} | Created On {item.data.creation_date} | Due By {item.data.due_date} | Email: {item.data.email}
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
