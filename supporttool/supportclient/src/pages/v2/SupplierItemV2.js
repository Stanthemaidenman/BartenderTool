import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import True from '../../images/true-icon.png';
import False from '../../images/false-icon.png';

export default class SupplierItemV2 extends Component {

    trueFalse = (con) => {
        if (con) {
            return True;
        }
        else {
            return False;
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
                <td><img src={this.trueFalse(this.props.supplier.product1)} /></td>
                <td><img src={this.trueFalse(this.props.supplier.product2)} /></td>
                <td><img src={this.trueFalse(this.props.supplier.product3)} /></td>
                <td><img src={this.trueFalse(this.props.supplier.product4)} /></td>
                <td><img src={this.trueFalse(this.props.supplier.product5)} /></td>
                <td><img src={this.trueFalse(this.props.supplier.product6)} /></td>
                <td><img src={this.trueFalse(this.props.supplier.product7)} /></td>
                <td><img src={this.trueFalse(this.props.supplier.product8)} /></td>
                <td><img src={this.trueFalse(this.props.supplier.product9)} /></td>
                <td><img src={this.trueFalse(this.props.supplier.product10)} /></td>
                <td><img src={this.trueFalse(this.props.supplier.product11)} /></td>
            </Fragment>
        );
    }
}

SupplierItemV2.propTypes = {
    supplier: PropTypes.object,
}