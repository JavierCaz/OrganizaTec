import React from "react"
import { Button, Select, MenuItem, InputLabel, FormControl, Grid, TextField, Container, Typography } from '@material-ui/core'
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, IconButton, SvgIcon } from '@material-ui/core'

export default function PerformanceData(props) {

  const [name, setName] = React.useState('');
  const [controlNumber, setControlNumber] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [career, setCareer] = React.useState('')
  const [careers, setCareers] = React.useState([]);
  const [teacher, setTeacher] = React.useState('');
  const [openDialog, setOpenDialog] = React.useState(false);

  React.useEffect(() => {
    fetch('/welcome/sign_up/get_careers')
      .then(response => response.json())
      .then(careers => setCareers(careers))
  }, []);

  const options = careers.map((option) => <MenuItem key={option.id} value={option.id}>{option.name}</MenuItem>)

  let handleSubmit = () => {
    fetch('/welcome/sign_up/create_student', {
      headers: {
        'Content-Type': 'application/json',
        'X-CSRF-Token': document.getElementsByTagName('meta')["csrf-token"].content
      },
      method: "POST",
      body: JSON.stringify({
        noControl: controlNumber,
        nombre: name,
        correo: email,
        pass: password,
        carrera_id: career,
      })
    }).then(response => response.json())
      .then(response => console.log(response))
  }

  return (
    <Container component='main' >
      <Grid container justify='center' spacing={1}>
        <Grid container item xs={3} direction='column' justify='center' alignItems='center' spacing={1}>
          <Grid item >
            <TextField required variant="outlined" type="text" name="sex" placeholder="Sex (M/F)" />
          </Grid>
          <Grid item >
            <TextField required variant="outlined" type="text" name="age" placeholder="Age" />
          </Grid>
          <Grid item >
            <TextField required variant="outlined" type="text" name="timetravel" placeholder="Travel time" />
          </Grid>
          <Grid item >
            <TextField required variant="outlined" type="text" name="studytime" placeholder="Study time" />
          </Grid>
        </Grid>

        <Grid container item xs={3} direction='column' justify='center' alignItems='center' spacing={1}>
          <Grid item >
            <TextField required variant="outlined" type="text" name="absences" placeholder="Absences" />
          </Grid>
          <Grid item >
            <TextField required variant="outlined" type="text" name="subject" placeholder="Subject" />
          </Grid>
          <Grid item >
            <TextField required variant="outlined" type="text" name="failures" placeholder="Failures" />
          </Grid>
          <Grid item container justify='center' >
            <FormControl style={{ width: '80%' }}>
              <InputLabel id='teacher-label'>Teacher</InputLabel>
              <Select native labelId='teacher-label' value={teacher} onChange={e => setTeacher(e.target.value)}>
                <option value={1}>Teacher X</option>
                <option value={2}>Teacher Y</option>
                <option value={3}>Teacher Z</option>
              </Select>
            </FormControl>
          </Grid>
        </Grid>

        <Grid container justify='center' spacing={3}>
          <Grid item>
            <Button variant="contained" color="primary">
              Save data
            </Button>
          </Grid>
          <Grid item>
            <IconButton aria-label="delete" onClick={() => setOpenDialog(true)}>
              <SvgIcon>
                <path fill="currentColor" d="M11,18H13V16H11V18M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,6A4,4 0 0,0 8,10H10A2,2 0 0,1 12,8A2,2 0 0,1 14,10C14,12 11,11.75 11,15H13C13,12.75 16,12.5 16,10A4,4 0 0,0 12,6Z" />
              </SvgIcon>
            </IconButton>
          </Grid>
        </Grid>

      </Grid>
      <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
        <DialogTitle>Data for grade predictions</DialogTitle>
        <DialogContent dividers>
          <DialogContentText>
            For a better prediction of your grades<br />
            Help us by filling in the following information with your coursed subjects
            </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)} color="primary">Agree</Button>
        </DialogActions>
      </Dialog>
    </Container>
  )
}