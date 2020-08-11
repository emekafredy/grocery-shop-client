import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: 'center',
    marginTop: '8rem'
  },
  loader: {
    color: '#00b300',
  }
}));

export const Loader = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CircularProgress className={classes.loader} />
    </div>
  );
}
