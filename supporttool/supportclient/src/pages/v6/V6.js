import React, { Component } from 'react';
import axios from 'axios';
import Suppliers from './SuppliersV6';
import Pagination from '../../components/PaginationV6';

export class V6 extends Component {

    constructor() {
        super();
        this.state = {
            startId: 101,
            endId: 150,
            currentPage: 1,
            ResourcesPerPage: 681,
            suppliers: [],
            interval: false,
        }
    }

    componentDidMount() {
        const url = `https://localhost:5000/suppliers/startId/1/endId/100/max/${this.state.ResourcesPerPage}/all`;
        const options = {
            headers: { 'Refresh': '0' }
        };

        axios.get(url, options)
            .then(res => this.setState({
                suppliers: res.data
            }))
    }

    componentDidUpdate() {
       
        if (this.state.interval === false) {
            setInterval(this.getNext.bind(this), 3000);
            //setInterval(this.getNext, 3000);
            this.setState({
                interval: true,
            })
        }
    }

 
    getNext() {

        const url = `https://localhost:5000/suppliers/startId/${this.state.startId}/endId/${this.state.endId}/max/${this.state.ResourcesPerPage}/all/`;
        const options = {
            headers: { 'Refresh': '0' }
        };
        let newStartId = this.state.suppliers.slice(-1).pop().supplierId + 51;
        let newEndId = this.state.suppliers.slice(-1).pop().supplierId + 100;
        
        axios.get(url, options)
            .then(res => res.data.length == 0 ? clearInterval(this.getNext) : this.setState({
                startId: newStartId,
                endId: newEndId,
                suppliers: [...this.state.suppliers, ...res.data],

            }),
            
        )

    }



    newPage(newPageNum) {
        console.log('newPage()');

        if (newPageNum === 1) {
            this.setState({
                startId: 1,
                endId: 100,
                currentPage: 1,
                suppliers: [],
                interval: false
            })
        } else {
            console.log('newPage => if newPageNum else');
            let newStartId = (this.state.ResourcesPerPage * (newPageNum - 1)) + 1;
            let newEndId = (this.state.ResourcesPerPage * (newPageNum - 1)) + 50;

            this.setState({
                startId: newStartId,
                endId: newEndId,
                currentPage: newPageNum,
                suppliers: []
            })
        }
       
    }


    render() {
        const paginate = (newPageNum) => {
            console.log('paginate');
            clearInterval(this.getNext);
           
            setTimeout(() => this.newPage(newPageNum), 2000);
        };
        return (
            <div className="outer-div">
                <Pagination
                    from={1}
                    to={2}
                    currentPage={this.state.currentPage}
                    resourcesPerPage={this.state.ResourcesPerPage}
                    totalResources={this.state.suppliers.length}
                    paginate={paginate}
                />

                <h2>Select a Supplier</h2>
                <Suppliers suppliers={this.state.suppliers} />

            </div>
        );
    }
}
