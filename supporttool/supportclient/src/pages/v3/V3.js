import React, { Component } from 'react';
import axios from 'axios';
import Suppliers from './SuppliersV3';
import Pagination from '../../components/Pagination';

export class V3 extends Component {

    constructor() {
        super();
        this.state = {
            suppliers: [],
            currentPage: 1,
            ResourcesPerPage: 1000,
            products: {}
        }
    }

    componentDidMount() {
        const url = 'https://localhost:5000/suppliers/first/';
        const options = {
            headers: { 'Refresh': '0' }
        };

        axios.get(url, options)
            .then(res => this.setState({
                suppliers: res.data,
            }))
    }

    componentDidUpdate() {
        console.log('V1 update');
        if (Object.keys(this.state.products).length !== 0) {
            const id = this.props.supplier.supplierId;
            const url = 'https://localhost:5000/suppliers/products/' + id;
            const options = {
                headers: { 'Refresh': '0' }
            };

            axios.get(url, options)
                .then(res => this.setState({
                    products: res.data
                }))
        }

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
