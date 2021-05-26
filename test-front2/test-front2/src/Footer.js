import React from 'react'

import { makeStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

function Footer() {

    const useStyles = makeStyles({
        root: {
            textAlign: 'center'
        }
    });

    const classes = useStyles()

    return (
        <div>
            <Grid container spacing={0}>
                <Grid item xs={12}>
                    <Paper className={classes.root}>
                        <Button style={{margin: '10px', textTransform: 'none', fontSize: '1.2em'}} color="primary">View All Allerts</Button>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    )
}

export default Footer


