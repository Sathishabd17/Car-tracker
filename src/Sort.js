import React, { useState, useEffect } from 'react';
import Table from "./Table";
import Pagination from './Pagination';

const Sort = (props) => {
    const [data, setData] = useState(props.data);
    const [direction, setDirection] = useState({
        0: 'asc',
        4: 'asc',
        5: 'asc',
        7: 'asc',
        8: 'asc'
    });
    const [currentPage, setCurrentPage] = useState(1);
    const [rowsPerPage] = useState(15);

    const onSort = (index) => {
        if(index === 0 || index === 8)
        {
            setData(data.sort((a,b) => (
                direction[index] === 'asc'
                ? (a[index] > b[index]) - (a[index] < b[index])
                : (a[index] < b[index]) - (a[index] > b[index])
                )
            ));
            setDirection({
                [index]: direction[index] === 'asc'
                ? 'desc' : 'asc'
                }
            );
        }
        else
        {
            setData(data.sort((a,b) => (
                direction[index] === 'asc'
                ? a[index] - b[index]
                : b[index] - a[index]
                )
            ));
            setDirection({
                [index]: direction[index] === 'asc'
                ? 'desc' : 'asc'
                }
            );
        }
    };

    let IndexOfLastRow = currentPage * rowsPerPage;
    let IndexOfFirstRow = IndexOfLastRow - rowsPerPage;
    let currentRows = data.slice(IndexOfFirstRow, IndexOfLastRow);

    const paginate = (number) => setCurrentPage(number);

    return (
        <div>
            <Pagination
                rowsPerPage={rowsPerPage}
                totalRows={data.length}
                paginate={paginate}
            />
            <Table 
                data={currentRows}
                onSort={onSort}
            />
        </div>
    );
};

export default Sort;