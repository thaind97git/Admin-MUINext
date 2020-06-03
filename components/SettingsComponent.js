import React from 'react';
import CardSimpleLayout from './CardSimpleLayout';
import { Grid, TextField, Button, makeStyles } from '@material-ui/core';
const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(2)
  },
  marginInput: {
    margin: '10px 0'
  }
}));

const SettingsComponent = () => {
  const classes = useStyles();
  return (
    <Grid container spacing={3}>
      <Grid item md={12} lg={12}>
        <CardSimpleLayout
          header={<b>Settings</b>}
          body={
            <div>
              <Grid container>
                <Grid item lg={12} xs={12}>
                  <TextField
                    fullWidth
                    label="User ID"
                    defaultValue="testuser"
                    size="small"
                    disabled
                    InputLabelProps={{
                      shrink: true
                    }}
                    className={classes.marginInput}
                  />
                </Grid>
                <Grid item lg={12} xs={12}>
                  <TextField
                    fullWidth
                    label="Email"
                    size="small"
                    disabled
                    className={classes.marginInput}
                    defaultValue="thaind97.dev@gmail.com"
                    InputLabelProps={{
                      shrink: true
                    }}
                  />
                </Grid>
                <Grid item lg={12} xs={12}>
                  <TextField
                    fullWidth
                    label="Last name"
                    size="small"
                    disabled
                    className={classes.marginInput}
                    defaultValue="Judo"
                    InputLabelProps={{
                      shrink: true
                    }}
                  />
                </Grid>
                <Grid item lg={12} xs={12}>
                  <TextField
                    fullWidth
                    label="First name"
                    size="small"
                    disabled
                    className={classes.marginInput}
                    defaultValue="Nguyen"
                    InputLabelProps={{
                      shrink: true
                    }}
                  />
                </Grid>
                <Grid item lg={12} xs={12}>
                  <TextField
                    fullWidth
                    label="Tel"
                    size="small"
                    disabled
                    className={classes.marginInput}
                    defaultValue="0123456789"
                    InputLabelProps={{
                      shrink: true
                    }}
                  />
                </Grid>
                <Grid style={{ textAlign: 'center' }} item xs={12}>
                  <Button color="primary" variant="contained">
                    Update
                  </Button>
                </Grid>
              </Grid>
            </div>
          }
        />
      </Grid>
    </Grid>
  );
};

export default SettingsComponent;
