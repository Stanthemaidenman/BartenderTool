import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class SupplierItemV6 extends Component {
   
    render() {
        return (
            <Fragment>
                <td>{this.props.supplier.supplierId}</td>
                <td>
                    <Link to='/QA-sitepicker'>{this.props.supplier.supplierName}</Link>
                </td>
                <td>{this.props.supplier.country}</td>

                <td>{this.props.supplier.product1 ? <span className="green">&#10004;</span> : <span className="red">&#128473;</span>}</td>
                <td>{this.props.supplier.product2 ? <span className="green">&#10004;</span> : <span className="red">&#128473;</span>}</td>
                <td>{this.props.supplier.product3 ? <span className="green">&#10004;</span> : <span className="red">&#128473;</span>}</td>
                <td>{this.props.supplier.product4 ? <span className="green">&#10004;</span> : <span className="red">&#128473;</span>}</td>
                <td>{this.props.supplier.product5 ? <span className="green">&#10004;</span> : <span className="red">&#128473;</span>}</td>
                <td>{this.props.supplier.product6 ? <span className="green">&#10004;</span> : <span className="red">&#128473;</span>}</td>
                <td>{this.props.supplier.product7 ? <span className="green">&#10004;</span> : <span className="red">&#128473;</span>}</td>
                <td>{this.props.supplier.product8 ? <span className="green">&#10004;</span> : <span className="red">&#128473;</span>}</td>
                <td>{this.props.supplier.product9 ? <span className="green">&#10004;</span> : <span className="red">&#128473;</span>}</td>
                <td>{this.props.supplier.product10 ? <span className="green">&#10004;</span> : <span className="red">&#128473;</span>}</td>
                <td>{this.props.supplier.product11 ? <span className="green">&#10004;</span> : <span className="red">&#128473;</span>}</td>
            </Fragment >
        );
    }
}

SupplierItemV6.propTypes = {
    supplier: PropTypes.object,
}