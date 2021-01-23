import React from 'react';
import Table from "./Table";

class Sort extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: this.props.data,
            direction: {
                0: 'asc',
                4: 'asc',
                5: 'asc',
                7: 'asc',
                8: 'asc'
            }
        }

        this.onSort = this.onSort.bind(this);
    }

    onSort(index) {
        if(index === 0 || index === 8)
        {
            this.setState({
                data: this.state.data.sort((a,b) => (
                    this.state.direction[index] === 'asc'
                    ? (a[index] > b[index]) - (a[index] < b[index])
                    : (a[index] < b[index]) - (a[index] > b[index])
                    )
                ),
                direction: {
                    [index]: this.state.direction[index] === 'asc'
                    ? 'desc' : 'asc'
                }
            });
        }
        else
        {
            this.setState({
                data: this.state.data.sort((a, b) => ( 
                    this.state.direction[index] === 'asc' 
                    ? a[index] - b[index]
                    : b[index] - a[index]
                    )
                ),
                direction: {
                    [index]: this.state.direction[index] === 'asc'
                    ? 'desc' : 'asc'
                }
            });
        }
    }

    render() {
        return (
            <Table 
                data={this.state.data}
                onSort={this.onSort}
            />
        );
    }
}

export default Sort;