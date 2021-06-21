import React from 'react'
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

class Currency extends React.Component { //This is a Blueprint for the table.
    render() {
        return (
            <TableRow>
                <TableCell width={1}>
                    {this.props.currency_name}
                </TableCell>
                <TableCell width={1}>
                    {this.props.countries}
                </TableCell>
            </TableRow>
        )
    }
}

export default Currency
