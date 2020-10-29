import React, { Component } from 'react'
import Table from 'react-bootstrap/Table';

export class ProjectsTable extends Component {
    render() {
        return (
            <div>
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>Link</th>
                            <th>Project Code</th>
                            <th>Customer</th>
                            <th>Description</th>
                            <th>PO Date</th>
                            <th>Customer PO #</th>
                            <th>PO Total</th>
                            <th>Status</th>
                            <th>Salesperson</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>abc1234</td>
                            <td>abc1234</td>
                            <td>abc1234</td>
                            <td>abc1234</td>
                            <td>abc1234</td>
                            <td>abc1234</td>
                            <td>abc1234</td>
                            <td>abc1234</td>
                            <td>abc1234</td>
                        </tr>
                        <tr>
                            <td>abc1234</td>
                            <td>abc1234</td>
                            <td>abc1234</td>
                            <td>abc1234</td>
                            <td>abc1234</td>
                            <td>abc1234</td>
                            <td>abc1234</td>
                            <td>abc1234</td>
                            <td>abc1234</td>
                        </tr>
                        <tr>
                            <td>abc1234</td>
                            <td>abc1234</td>
                            <td>abc1234</td>
                            <td>abc1234</td>
                            <td>abc1234</td>
                            <td>abc1234</td>
                            <td>abc1234</td>
                            <td>abc1234</td>
                            <td>abc1234</td>
                        </tr>
                        <tr>
                            <td>abc1234</td>
                            <td>abc1234</td>
                            <td>abc1234</td>
                            <td>abc1234</td>
                            <td>abc1234</td>
                            <td>abc1234</td>
                            <td>abc1234</td>
                            <td>abc1234</td>
                            <td>abc1234</td>
                        </tr>
                    </tbody>
                </Table>

            </div>
        )
    }
}

export default ProjectsTable
