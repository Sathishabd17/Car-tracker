import React from 'react';
import ReactDOM, { render } from 'react-dom';

function Table(props) {
    let rows = [];
    for(let i = 2; i < 13; i++) 
    {
        rows.push(
            <tr>
                <td>{i - 1}</td>
                <td>{props.data[i][0]}</td>
                <td>{props.data[i][4]}</td>
                <td>{props.data[i][8]}</td>
                <td>{props.data[i][5]}</td>
                <td>{props.data[i][7]}</td>
            </tr>
        )
    }

    return (
        <div>
            <table>
                <tr>
                    <th>S.No.</th>
                    <th onClick={() => props.onSort(0)}>Car Name</th>
                    <th onClick={() => props.onSort(4)}>Horse Power</th>
                    <th onClick={() => props.onSort(8)}>Origin</th>
                    <th onClick={() => props.onSort(5)}>Weight</th>
                    <th onClick={() => props.onSort(7)}>Model</th>
                </tr>
                {rows}
            </table>
        </div>
    );
}

export default Table;