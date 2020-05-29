import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class SupplierItemV4 extends Component {
    constructor() {
        super();
        this.state = {
            products: {}
        }
    }

    componentDidMount() {
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

   
    render() {
        return (
            <Fragment>
                <td>{this.props.supplier.supplierId}</td>
                <td>
                    <Link to='/QA-sitepicker'>{this.props.supplier.supplierName}</Link>
                </td>
                <td>{this.props.supplier.country}</td>

                <td>{this.state.products.product1 ? <span className="green">&#10004;</span> : <span className="red">&#128473;</span>}</td>
                <td>{this.state.products.product2 ? <span className="green">&#10004;</span> : <span className="red">&#128473;</span>}</td>
                <td>{this.state.products.product3 ? <span className="green">&#10004;</span> : <span className="red">&#128473;</span>}</td>
                <td>{this.state.products.product4 ? <span className="green">&#10004;</span> : <span className="red">&#128473;</span>}</td>
                <td>{this.state.products.product5 ? <span className="green">&#10004;</span> : <span className="red">&#128473;</span>}</td>
                <td>{this.state.products.product6 ? <span className="green">&#10004;</span> : <span className="red">&#128473;</span>}</td>
                <td>{this.state.products.product7 ? <span className="green">&#10004;</span> : <span className="red">&#128473;</span>}</td>
                <td>{this.state.products.product8 ? <span className="green">&#10004;</span> : <span className="red">&#128473;</span>}</td>
                <td>{this.state.products.product9 ? <span className="green">&#10004;</span> : <span className="red">&#128473;</span>}</td>
                <td>{this.state.products.product10 ? <span className="green">&#10004;</span> : <span className="red">&#128473;</span>}</td>
                <td>{this.state.products.product11 ? <span className="green">&#10004;</span> : <span className="red">&#128473;</span>}</td> 
            </Fragment >
        );
    }
}

SupplierItemV4.propTypes = {
    supplier: PropTypes.object,
}