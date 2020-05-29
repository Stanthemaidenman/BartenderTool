import React, { Component } from 'react';
import Accounts from '../components/Accounts';
import Pagination from '../components/Pagination';

export class AccountPicker extends Component {

    constructor() {
        super();
        this.state = {
            accounts: [],
            currentPage: 1,
            ResourcesPerPage: 50
        }
    }

    componentDidMount() {
        const url = 'https://localhost:5000/accounts';

        fetch(url)
            .then(response => response.json())
            .then(data => this.setState({
                accounts: data,
            }))
    }
  
    render() {
        let indexOfLastResource = this.state.currentPage * this.state.ResourcesPerPage;
        let indexOfFirstResource = indexOfLastResource - this.state.ResourcesPerPage;
        let currentRescource = this.state.accounts.slice(indexOfFirstResource, indexOfLastResource);

        const paginate = (pageNumber) => this.setState({ currentPage: pageNumber });

        return (
            <div className="outer-div">
                <Pagination
                    from={indexOfFirstResource}
                    to={indexOfLastResource}
                    currentPage={this.state.currentPage}
                    resourcesPerPage={this.state.ResourcesPerPage}
                    totalResources={this.state.accounts.length}
                    paginate={paginate}
                />

                <h2>Select Account</h2>
                <Accounts accounts={currentRescource} />
               
            </div>
        );
    }
}
