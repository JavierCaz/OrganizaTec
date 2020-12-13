import React from "react"
import { Button, Grid, Container, Typography, Slider, FormControl, InputLabel, Select } from '@material-ui/core/';

export default function Predictions() {

  const [subjSelected, setSubjSelected] = React.useState('')
  const [currentPrediction, setCurrentPrediction] = React.useState(0)
  const [studyTime, setStudyTime] = React.useState(1)
  const [absences, setAbsences] = React.useState(0)
  const [teacher, setTeacher] = React.useState('')

  let dirRoot = window.location.protocol + "//" + window.location.host

  const handleChangeStudyT = (e, value) => {
    let dif = Math.abs(studyTime - value) * 0.45
    value > studyTime ? setCurrentPrediction(currentPrediction + dif) : setCurrentPrediction(currentPrediction - dif)
    setStudyTime(value)
  }
  const handleChangeAbsences = (e, value) => {
    let dif = Math.abs(absences - value) * 0.32
    value > absences ? setCurrentPrediction(currentPrediction - dif) : setCurrentPrediction(currentPrediction + dif)
    setAbsences(value)
  }

  return (
    <Container component="main" >
      <h2 style={{ textAlign: 'center' }}>Grades Predictions</h2>
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

          <Grid container item direction='column' spacing={2} xs={4}>
            <Grid item>
              <Typography id="studytime-slider" gutterBottom>
                Study time
              </Typography>
              <Slider
                value={studyTime}
                aria-labelledby="studytime-slider"
                valueLabelDisplay="auto"
                step={1}
                marks={[{ value: 0, label: '<2 hr' }, { value: 1, label: '2-5 hrs' }, { value: 2, label: '5-10 hrs' }, { value: 3, label: '>10 hrs' }]}
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
                marks={[{ value: 0, label: '0' }, { value: 1, label: '1' }, { value: 2, label: '2' }, { value: 3, label: '3' }, { value: 4, label: '4' }, { value: 5, label: '5' }, { value: 6, label: '6' }, { value: 7, label: '7' }, { value: 8, label: '8' }, { value: 9, label: '9' }, { value: 10, label: '10' }]}
                min={0}
                max={10}
                onChange={handleChangeAbsences}
              />
            </Grid>
            <Grid item container justify='center' >
              <FormControl style={{ width: '80%' }}>
                <InputLabel id='teacher-label'>Teacher</InputLabel>
                <Select native labelId='teacher-label' value={teacher} 
                  onChange={e => {
                    if(e.target.value == 1) setCurrentPrediction(currentPrediction + 1)
                    if(e.target.value == 2) setCurrentPrediction(currentPrediction - 2)
                    if(e.target.value == 3) setCurrentPrediction(currentPrediction - 3)
                    setTeacher(e.target.value)
                  }}>
                  <option value={1}>Teacher X</option>
                  <option value={2}>Teacher Y</option>
                  <option value={3}>Teacher Z</option>
                </Select>
              </FormControl>
            </Grid>
          </Grid>

          <Grid item xs={6}>
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