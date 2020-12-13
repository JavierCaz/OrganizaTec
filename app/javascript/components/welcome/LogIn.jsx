import React from "react"
// import Button from '@material-ui/core/Button';
// import Grid from '@material-ui/core/Grid';
// import Typography from '@material-ui/core/Typography';
// import Container from '@material-ui/core/Container';
import { Button, Grid, Container, Typography, Slider } from '@material-ui/core/';

export default function LogIn() {

  const [subjSelected, setSubjSelected] = React.useState('')
  const [currentPrediction, setCurrentPrediction] = React.useState(0)
  const [studyTime, setStudyTime] = React.useState(1)
  const [absences, setAbsences] = React.useState(0)

  let dirRoot = window.location.protocol + "//" + window.location.host

  const handleChangeStudyT = (e, value) => {
    value > studyTime ? setCurrentPrediction(currentPrediction+0.45):setCurrentPrediction(currentPrediction-0.45)
    setStudyTime(value)
  }
  const handleChangeAbsences = (e, value) => {
    value > absences ? setCurrentPrediction(currentPrediction-0.32):setCurrentPrediction(currentPrediction+0.32)
    setAbsences(value)
  }

  return (
    <Container component="main" >
      <h2 style={{ textAlign: 'center' }}>Grades Preditcion</h2>
      <Grid container justify='center' alignItems='center' spacing={2}>
        <Grid item>
          <Button variant='contained' color='primary' onClick={() => { setSubjSelected(1); setCurrentPrediction(95.5813); setStudyTime(1); setAbsences(0) }}>Subject 1</Button>
        </Grid>
        <Grid item>
          <Button variant='contained' color='primary' onClick={() => { setSubjSelected(2); setCurrentPrediction(90.5813); setStudyTime(1); setAbsences(0) }}>Subject 2</Button>
        </Grid>
        <Grid item>
          <Button variant='contained' color='primary' onClick={() => { setSubjSelected(3); setCurrentPrediction(85.2546); setStudyTime(1); setAbsences(0) }}>Subject 3</Button>
        </Grid>
        <Grid item>
          <Button variant='contained' color='primary' onClick={() => { setSubjSelected(4); setCurrentPrediction(89.8113); setStudyTime(1); setAbsences(0) }}>Subject 4</Button>
        </Grid>
        <Grid item>
          <Button variant='contained' color='primary' onClick={() => { setSubjSelected(5); setCurrentPrediction(92.5813); setStudyTime(1); setAbsences(0) }}>Subject 5</Button>
        </Grid>
      </Grid>
      {subjSelected != '' &&
        <Grid container spacing={2} justify='space-evenly'>
          <Grid container direction='column' spacing={2} xs={4}>
            <Grid item>
              <Typography id="studytime-slider" gutterBottom>
                Study time
              </Typography>
              <Slider
                value={studyTime}
                aria-labelledby="studytime-slider"
                valueLabelDisplay="auto"
                step={1}
                marks={[{value: 0, label:'<2 hr'},{value:1, label:'2-5 hrs'},{value:2,label:'5-10 hrs'},{value:3,label:'>10 hrs'}]}
                min={0}
                max={3}
                onChange={handleChangeStudyT}
              />
            </Grid>
            <Grid item>
              <Typography id="absences-slider" gutterBottom>
                Absences
              </Typography>
              <Slider
                value={absences}
                aria-labelledby="absences-slider"
                valueLabelDisplay="auto"
                step={1}
                marks={[{value:0,label:'0'},{value:1,label:'1'},{value:2,label:'2'},{value:3,label:'3'},{value: 4,label:'4'},{value:5,label:'5'},{value:6,label:'6'},{value: 7,label:'7'},{value:8,label:'8'},{value: 9,label:'9'},{value:10,label:'10'}]}
                min={0}
                max={10}
                onChange={handleChangeAbsences}
              />
            </Grid>
          </Grid>
          <Grid container direction='column' spacing={2} xs={6}>
            <Grid item>
              <h3>Prediction for - subject {subjSelected}</h3>
            </Grid>
            <Grid item>
              <h4 style={{ textAlign: 'center' }}>
                {subjSelected == 1 && 
                  <label>{currentPrediction.toFixed(4)}</label>
                }
                {subjSelected == 2 && 
                  <label>{currentPrediction.toFixed(4)}</label>
                }
                {subjSelected == 3 && 
                  <label>{currentPrediction.toFixed(4)}</label>
                }
                {subjSelected == 4 && 
                  <label>{currentPrediction.toFixed(4)}</label>
                }
                {subjSelected == 5 && 
                  <label>{currentPrediction.toFixed(4)}</label>
                }
              </h4>
            </Grid>
          </Grid>
        </Grid>
      }
    </Container>
  );
}