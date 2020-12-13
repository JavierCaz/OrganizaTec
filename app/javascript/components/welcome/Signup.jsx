import { Button, Select, MenuItem, InputLabel, FormControl, Grid, TextField, Container, Typography, SvgIcon } from '@material-ui/core'
import React from "react"

export default function Signup(props) {
  const [name, setName] = React.useState('');
  const [controlNumber, setControlNumber] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [career, setCareer] = React.useState('')
  const [careers, setCareers] = React.useState([]);

  React.useEffect(() => {
    fetch('/welcome/sign_up/get_careers')
      .then(response => response.json())
      .then(careers => setCareers(careers) )
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
    <Container className="signup-container R-COLUMN R-ALIGN-Y-START R-ALIGN-X-CENTER">
      <Grid container direction='column' justify='center' alignItems='center' spacing={2}>
        <Grid item >
          <TextField required variant="outlined" type="text" name="sex" placeholder="Genero Masculino/Femenino" />
        </Grid>
        <Grid item >
          <TextField required variant="outlined" type="text" name="age" placeholder="Edad" />
        </Grid>
        <Grid item >
          <TextField required variant="outlined" type="text" name="timetravel" placeholder="Tiempo de viaje" />
        </Grid>
        <Grid item >
          <TextField required variant="outlined" type="text" name="studytime" placeholder="Horas de estudio" />
        </Grid>
        <Grid item >
          <TextField required variant="outlined" type="text" name="failures" placeholder="Faltas" />
        </Grid>
        <Grid item >
          <TextField required variant="outlined" type="text" name="absences" placeholder="Ausencias" />
        </Grid>
        <Grid item >
          <TextField required variant="outlined" type="text" name="subject" placeholder="Materia" />
        </Grid>
        <Grid item>
          <Button variant="contained" color="primary">
            Save data
          </Button>
        </Grid>
      </Grid>
    </Container>
  )
}