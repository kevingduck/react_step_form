import React, { Component } from 'react'

// Get data from Fauna
// Pre-populate data in form
// SUbmit changes to Fauna

export class ProjectDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            item:props.item
        }
    }

    componentWillMount() {
        fetch(`./.netlify/functions/project/${this.state.item.id}`, {
            headers: { 'Access-Control-Allow-Origin':'*', },
        })
            .then(res =>
                this.setState({
                    id: res.data.id,
                }, () => {
                    console.log(this.state);
                })
            )
    }

    render() {
        <div>
            test
        </div>
    }
}

export default ProjectDetails
