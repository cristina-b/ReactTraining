import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TableCell from '@material-ui/core/TableCell';
import Typography from '@material-ui/core/Typography';
import TableRow from '@material-ui/core/TableRow';
import { TableContainer } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
  container: {
    flexGrow: 1,
  },
  containerpaper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function Campaigns(props) {

  console.log('props', props)

  const  campaigns  = props.campaignList

  const classes = useStyles();

  return (
    <>
    <Typography gutterBottom variant="h5" component="h2">Recent Campaigns</Typography>

      <div className={classes.container}>
        <Grid container spacing={24}>
          <Grid item xs={12}>
          <TableContainer>
            {campaigns.map((row) => (
              <Paper className={classes.containerpaper}>
                <TableRow key={row.id}>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.type}</TableCell>
                  <TableCell>{row.status}</TableCell>
                  <TableCell>{row.entrance}</TableCell>
                  <TableCell align="right">{row.convRates}</TableCell>
                </TableRow>
              </Paper>
              
            ))}
            </TableContainer>
          </Grid>
        </Grid>
      </div>
    </>
  );
}