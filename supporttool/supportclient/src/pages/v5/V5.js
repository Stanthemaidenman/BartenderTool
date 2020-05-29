import React, { Component } from 'react';
import axios from 'axios';
import Suppliers from './SuppliersV5';
import Pagination from '../../components/Pagination';

export class V5 extends Component {

    constructor() {
        super();
        this.state = {
            suppliers: [],
            currentPage: 1,
            ResourcesPerPage: 681,
        }
    }

    componentDidMount() {
        const url = 'https://localhost:5000/suppliers/startId/1/endId/100/';
        const options = {
            headers: { 'Refresh': '0' }
        };

        axios.get(url, options)
            .then(res => this.setState({
                suppliers: res.data,
            }))
    }
    
    getNext = setInterval(() => {
        let startId = this.state.suppliers.length + 1;
        let endId = startId + 49;
        const url = `https://localhost:5000/suppliers/startId/${startId}/endId/${endId}/`;
        const options = {
            headers: { 'Refresh': '0' }
        };

        axios.get(url, options)
            .then(res => res.data.length == 0 ? clearInterval(this.getNext) : this.setState({
                suppliers: [...this.state.suppliers, ...res.data]
            }))
    }, 8000)

    

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
