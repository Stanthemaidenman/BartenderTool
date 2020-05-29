import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Link } from 'react-router-dom';
import True from '../../images/true-icon.png';
import False from '../../images/false-icon.png';

export default class SupplierItemV3 extends Component {
    constructor() {
        super();
        this.state = {
            products: {}
        }
    }

    componentDidMount() {
        if (Object.keys(this.state.products).length == 0) {
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
        return (
            <Fragment>
                <td>{this.props.supplier.supplierId}</td>
                <td>
                    <Link to='/QA-sitepicker'>{this.props.supplier.supplierName}</Link>
                </td>
                <td>{this.props.supplier.country}</td>

                <td><img src={this.state.products.product1 ? True : False}/></td>
                <td><img src={this.state.products.product2 ? True : False}/></td>
                <td><img src={this.state.products.product3 ? True : False}/></td>
                <td><img src={this.state.products.product4 ? True : False}/></td>
                <td><img src={this.state.products.product5 ? True : False}/></td>
                <td><img src={this.state.products.product6 ? True : False}/></td>
                <td><img src={this.state.products.product7 ? True : False}/></td>
                <td><img src={this.state.products.product8 ? True : False}/></td>
                <td><img src={this.state.products.product9 ? True : False}/></td>
                <td><img src={this.state.products.product10 ? True : False}/></td>
                <td><img src={this.state.products.product11 ? True : False}/></td>
            </Fragment >
        );
    }
}

SupplierItemV3.propTypes = {
    supplier: PropTypes.object,
}