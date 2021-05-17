import React from 'react'

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

function Footer() {
    return (
        <div>
            <Grid container spacing={0}>
                <Grid item xs={12}>
                    <Paper className="grid__letters">
                        <Button style={{margin: '10px', textTransform: 'none', fontSize: '1.2em'}} color="primary">View All Allerts</Button>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    )
}

export default Footer


