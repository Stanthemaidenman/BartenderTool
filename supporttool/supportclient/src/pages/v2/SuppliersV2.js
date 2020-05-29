import React, { Component } from 'react';
import SupplierItem from './SupplierItemV2';

export default class SuppliersV2 extends Component {

    render() {
        return (
            <table>
                <thead>
                    <tr>
                        <th className="th">ID</th>
                        <th className="th">Name</th>
                        <th className="th">Country</th>
                        <th className="th">Prd 1</th>
                        <th className="th">Prd 2</th>
                        <th className="th">Prd 3</th>
                        <th className="th">Prd 4</th>
                        <th className="th">Prd 5</th>
                        <th className="th">Prd 6</th>
                        <th className="th">Prd 7</th>
                        <th className="th">Prd 8</th>
                        <th className="th">Prd 9</th>
                        <th className="th">Prd 10</th>
                        <th className="th">Prd 11</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.suppliers.map(supplier => (
                        <tr className="item" key={supplier.supplierId}>
                            <SupplierItem supplier={supplier} />
                        </tr>
                    ))}
                </tbody>
            </table>
        );
    }
}
