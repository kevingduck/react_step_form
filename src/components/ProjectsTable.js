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
    
    delete = e => {
        e.preventDefault();
        const value  = e.target.value;
        debugger;
        if (window.confirm("Delete Project? " + value)) {
          fetch('./.netlify/functions/project/' + value, {
            method: 'DELETE',
            // body: value,
          });
          console.log('Deleted project' + value);
        };
        window.location.reload(false);
      };

    //TODO: Add edit function

    render() {
        var { isLoaded, items } = this.state;

        // items = [{"ref":{"@ref":{"id":"281142982455853568","collection":{"@ref":{"id":"projects","collection":{"@ref":{"id":"collections"}}}}}},"ts":1604377691716000,"data":{"customer_name":"Charleston County Schools","shipping_address":"1010 Calhoun St","email":"demo-email@sc.edu","due_date":"10/02/2023","creation_date":"Mon Nov 02 2020","project_code":"CHAR-test123"}},{"ref":{"@ref":{"id":"281143013386748418","collection":{"@ref":{"id":"projects","collection":{"@ref":{"id":"collections"}}}}}},"ts":1604377721150000,"data":{"customer_name":"Greenville County Schools","shipping_address":"123 Demo Ave","email":"another_demo-email@gmail.com","due_date":"02/02/2024","creation_date":"Mon Nov 02 2020","project_code":"GREE-test123"}},{"ref":{"@ref":{"id":"281143108011295234","collection":{"@ref":{"id":"projects","collection":{"@ref":{"id":"collections"}}}}}},"ts":1604377811400000,"data":{"customer_name":"Duck County Schools","shipping_address":"2847 demo street ","email":"Testemail@enail.com","due_date":"07/03/2021","creation_date":"Mon Nov 02 2020","project_code":"DUCK-test123"}},{"ref":{"@ref":{"id":"281144590129431040","collection":{"@ref":{"id":"projects","collection":{"@ref":{"id":"collections"}}}}}},"ts":1604379224880000,"data":{"customer_name":"Asheville County Schools","shipping_address":"123 test avenue","email":"Demo@demo.com","due_date":"10/20/2024","creation_date":"Mon Nov 02 2020","project_code":"ASHE-test123"}},{"ref":{"@ref":{"id":"281405222268436994","collection":{"@ref":{"id":"projects","collection":{"@ref":{"id":"collections"}}}}}},"ts":1604627783045000,"data":{"customer_name":"Maricopa County","shipping_address":"1600 Penn Ave","email":"aasdf@asdf.com","due_date":"2020-12-31","creation_date":"Thu Nov 05 2020","project_code":"MARI-test123"}},{"ref":{"@ref":{"id":"281407659078320640","collection":{"@ref":{"id":"projects","collection":{"@ref":{"id":"collections"}}}}}},"ts":1604630106910000,"data":{"customer_name":"Test","shipping_address":"","email":"","creation_date":"Thu Nov 05 2020","project_code":"TEST-test123"}}];
        
        var url = "./.netlify/functions/project/";

        if (!isLoaded) {
            return <div>Loading ... </div>
        } 
        else {
            return (
                <div style={{padding:'20px'}}>
                    <Table responsive striped bordered hover>
                        <thead>
                            <tr>
                                <th>Customer</th>
                                <th>Project</th>
                                <th>Created</th>
                                <th>Due</th>
                                <th>Email</th>
                                <th></th>
                                <th></th>
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
                                    <td><a href={url + item.ref["@ref"].id}>Edit</a></td>
                                    <td><button value={item.ref["@ref"].id} onClick={this.delete}>Delete</button></td>
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
