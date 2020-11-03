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
                                {item.data.customer_name} | {item.data.project_code} | Due {item.data.due_date}
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
