import React, { Fragment } from 'react';
import { Card, makeStyles, Divider } from '@material-ui/core';
const useStyles = makeStyles(theme => ({
  card: {
    padding: theme.spacing(2)
  }
}));
const CardSimpleLayout = ({ header, body, footer, cardSympleStyles }) => {
  const classes = useStyles();
  return (
    <Card style={cardSympleStyles}>
      {header && (
        <Fragment>
          <div className={classes.card}>{header}</div>
          <Divider />
        </Fragment>
      )}
      <div className={classes.card}>{body}</div>
      {footer && (
        <Fragment>
          <Divider />
          <div className={classes.card}>{footer}</div>
        </Fragment>
      )}
    </Card>
  );
};

export default CardSimpleLayout;
