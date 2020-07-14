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
      .then(careers => { setCareers(careers); console.log('Carreras', careers); })
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
        <Grid item>
          <Typography variant='h1'>Registro</Typography>
        </Grid>
        <Grid item >
          <TextField required variant="outlined" type="text" name="nombre" placeholder="Nombre Completo" value={name} onChange={(e) => setName(e.target.value)} />
        </Grid>
        <Grid item >
          <TextField required variant="outlined" type="text" name="noControl" placeholder="No. Control" value={controlNumber} onChange={(e) => setControlNumber(e.target.value)} />
        </Grid>
        <Grid item >
          <TextField required variant="outlined" type="email" name="email" placeholder="Correo" value={email} onChange={(e) => setEmail(e.target.value)} />
        </Grid>
        <Grid item >
          <TextField required variant="outlined" type="password" name="pass" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </Grid>
        <Grid item >
          <FormControl required variant="outlined" style={{ minWidth: '300px'}}>
            <InputLabel>Seleccionar carrera</InputLabel>
            <Select value={career} onChange={(e) => setCareer(e.target.value)} label="Seleccionar carrera">
              <MenuItem value="">None</MenuItem>
              {options}
            </Select>
          </FormControl>
        </Grid>
        <Grid container item justify='center' >
          <Button type="submit" variant="contained" onClick={handleSubmit}>
            Registrarse
          </Button>
        </Grid>
      </Grid>
    </Container>
  )
}