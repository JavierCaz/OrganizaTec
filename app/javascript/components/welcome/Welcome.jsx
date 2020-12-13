import React from "react"
import PropTypes from "prop-types"
import CssBaseline from '@material-ui/core/CssBaseline';
import Button from '@material-ui/core/Button';
import { Container, Grid } from "@material-ui/core";

class Welcome extends React.Component {
  render() {

    let dirRoot = window.location.protocol + "//" + window.location.host

    return (
      <Container component='main'>
        <Grid className="welcome-container" container direction='column' alignItems='center' spacing={3}>
          <CssBaseline />
          <Grid item>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTf7V6cPd5hihTvwd6T1BBRTR6JJB9AhfTDw&usqp=CAU" alt="Imagen organizatec"/>
          </Grid>
          <Grid container justify='center' spacing={2}>
            <Grid item>
              <Button variant="contained" color="primary" href={dirRoot + "/welcome/profile"}>
                  Profile
              </Button>
            </Grid>
            {/* <Button variant="contained" color="primary" href={dirRoot + "/welcome/login"}>
                LogIn
            </Button> */}
            <Grid item>
              <Button variant="contained" color="primary" href={dirRoot + "/welcome/studyplan"}>
                  Study Plan
              </Button>
            </Grid>
            {/* <Grid item>
              <Button variant="contained" color="primary" href={dirRoot + "/welcome/signedin"}>
              SignedIn View
              </Button>
            </Grid> */}
            <Grid item>
              <Button variant="contained" color="primary" href={dirRoot + "/welcome/studentprogress"}>
                  Student Progress
              </Button>
            </Grid>
            <Grid item>
              <Button variant="contained" color="primary" href={window.origin + "/welcome/predictions"}>
                  Student Performance
              </Button>
            </Grid>
            <Grid item>
              <Button variant="contained" color="primary" href={dirRoot + "/welcome/performance"}>
                  Student data
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    );
  }
}

export default Welcome
