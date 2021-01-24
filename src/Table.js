import React from 'react';

function Table(props) {
    let rows = [];
    for(let i = 0; i < props.data.length; i++) 
    {
        rows.push(
            <tr>
                <td>{i + 1}.</td>
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
            <table class="table table-light table-striped table-bordered table-hover text-center">
                <thead class="thead-light">
                    <tr>
                        <th>S.No.</th>
                        <th onClick={() => props.onSort(0)}>Car Name</th>
                        <th onClick={() => props.onSort(4)}>Horse Power</th>
                        <th onClick={() => props.onSort(8)}>Origin</th>
                        <th onClick={() => props.onSort(5)}>Weight</th>
                        <th onClick={() => props.onSort(7)}>Model</th>
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
        </div>
    );
}

export default Table;