import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  pageNotFound: {
    paddingTop: 100,
    textAlign: 'center',
  },
}));

const PageNotFound = () => {
  const classes = useStyles();

  return (
    <div className={classes.pageNotFound}>
      <h1>404 - Not Found!</h1>
      <Link to="/">Go Home</Link>
    </div>
  );
};

export default PageNotFound;
