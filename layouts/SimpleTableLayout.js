import React, { Fragment } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  makeStyles,
  Typography
} from '@material-ui/core';
import clsx from 'clsx';
const useStyles = makeStyles(theme => ({
  table: {
    padding: '10px 0',
    width: '100%'
  },
  tableBorderTop: {
    borderTop: '1px solid rgba(0, 0, 0, 0.12)'
  },
  tableCellHeader: {
    fontWeight: 600,
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1)

  },
  title: {
    padding: theme.spacing(2)
  },
  tHeadBackground: {
    background: '#f1f1f9'
  }
}));

const SimpleTableLayout = ({
  data = [],
  title,
  headers = [],
  small,
  tableHeaderStyle = {},
  tableBodyStyle = {},
  striped,
  noPaper
}) => {
  const classes = useStyles();
  return (
    <div className={classes.table}>
      <TableContainer component={!noPaper ? Paper : 'div'}>
        {title && (
          <Fragment>
            <Typography className={classes.title} variant="h6">
              <b>{title}</b>
            </Typography>
          </Fragment>
        )}
        <Table
          size={small && 'small'}
          className={clsx(classes.table, classes.tableBorderTop)}
          aria-label="simple table"
        >
          <TableHead className={classes.tHeadBackground}>
            <TableRow>
              {headers.map(({ header = '', style = {} }, index) => (
                <TableCell
                  className={classes.tableCellHeader}
                  key={index}
                  style={Object.assign({}, tableHeaderStyle, style)}
                >
                  {header}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row, index) => (
              <TableRow
                style={
                  striped && index % 2 ? { backgroundColor: '#f1f1f9' } : {}
                }
                key={index}
              >
                {headers.map(({ key, bodyStyle = {} }, index) => {
                  return (
                    <TableCell
                      style={Object.assign({}, tableBodyStyle, bodyStyle)}
                      key={index}
                    >
                      {row[key] || 'not defined yet'}
                    </TableCell>
                  );
                })}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default SimpleTableLayout;
