import React, { Component } from 'react';
import Suppliers from './SuppliersV1';
import Pagination from '../../components/Pagination';

export class V1 extends Component {

    constructor() {
        super();
        this.state = {
            suppliers: [],
            currentPage: 1,
            ResourcesPerPage: 1000
        }
    }

    componentDidMount() {
        const url = 'https://localhost:5000/suppliers/complete';
        const headers = {
            headers: {
                'Refresh': '0'
            }
        }
        fetch(url, headers)
            .then(response => response.json())
            .then(data => this.setState({
                suppliers: data,
            }))
    }

    render() {
        let indexOfLastResource = this.state.currentPage * this.state.ResourcesPerPage;
        let indexOfFirstResource = indexOfLastResource - this.state.ResourcesPerPage;
        let currentRescource = this.state.suppliers.slice(indexOfFirstResource, indexOfLastResource);

        const paginate = (pageNumber) => this.setState({ currentPage: pageNumber });

        return (
            <div className="outer-div">
                <Pagination
                    from={indexOfFirstResource}
                    to={indexOfLastResource}
                    currentPage={this.state.currentPage}
                    resourcesPerPage={this.state.ResourcesPerPage}
                    totalResources={this.state.suppliers.length}
                    paginate={paginate}
                />

                <h2>Select a Supplier</h2>
                <Suppliers suppliers={currentRescource} />

            </div>
        );
    }
}
