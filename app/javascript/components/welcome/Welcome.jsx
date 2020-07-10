import React from "react"
import PropTypes from "prop-types"
import CssBaseline from '@material-ui/core/CssBaseline';
import Button from '@material-ui/core/Button';
class Welcome extends React.Component {
  render () {

    let dirRoot = window.location.protocol + "//" + window.location.host

    return (
      <React.Fragment>
        <CssBaseline />
        <Button variant="contained" color="primary" href={dirRoot + "/welcome/login"}>
          LogIn
        </Button>
        <Button variant="contained" color="primary" href={dirRoot + "welcome/signup"}>
          SignUp
        </Button>
      </React.Fragment>
    );
  }
}

export default Welcome
