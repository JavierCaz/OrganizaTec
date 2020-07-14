import React from "react"
import PropTypes from "prop-types"
import CssBaseline from '@material-ui/core/CssBaseline';
import Button from '@material-ui/core/Button';
import { Container, Grid } from "@material-ui/core";

class Welcome extends React.Component {
  render() {

    let dirRoot = window.location.protocol + "//" + window.location.host

    return (
      <React.Fragment>
        <Grid className="welcome-container" container direction='column' alignItems='center'>
          <CssBaseline />
          <Grid item>
            <img src="" alt="Imagen organizatec"/>
          </Grid>
          <Grid item>
            <Button variant="contained" color="primary" href={dirRoot + "/welcome/login"}>
              LogIn
          </Button>
            <Button variant="contained" color="primary" href={dirRoot + "/welcome/signup"}>
              SignUp
          </Button>
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}

export default Welcome
