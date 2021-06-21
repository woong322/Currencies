import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Currency from './Currency';
import { withStyles } from '@material-ui/core/styles';


const styles = theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing.unit * -2,
        marginBottom: '108px',
        overflowX: "hidden",
        borderTopRightRadius: '70px',
        borderTopLeftRadius: '70px',
        boxShadow: '0px 5px 40px rgb(20 20 20 / 30%)',
        fontFamily: 'Montserrat',
    },
    table: {
        minWidth: 1080
    }
})

class Body extends Component {

    state = {
        data: []
    }

    componentDidMount() { // Gets data from the URL.
        this.callApi()
            .then(data => {
                this.setState({ data: data.response.fiats });
            })
            .catch(err => console.log(err)); //pops up console if there is an error.
    }

    callApi = async () => { //get the information form the server as json.
        const response = await fetch('https://api.currencyscoop.com/v1/currencies?api_key=45aefdcc125215aa84bc6e7dd3002309')
        const body = await response.json();
        return body;
    }

    render() {
        const { classes } = this.props;
        return (
            <Paper className={classes.root}>
                <Table className={classes.table}>
                    <TableHead>
                        <TableRow>
                            <TableCell><h3>● Currency Name</h3></TableCell>
                            <TableCell><h3>● Country</h3></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {Object.keys(this.state.data).map((code) => {return ( //Actual body information, all contents was objects. I hade to use Object.keys() method.
                            <Currency countries={this.state.data[code].countries} currency_name={this.state.data[code].currency_name} className="report">     
                            </Currency> //The Currency is linked with the Currency componenet. It has the function to put the information in the table in right spot.
                        )})}
                    </TableBody>
                </Table>
            </Paper>
        )
    }
}

export default withStyles(styles)(Body);
