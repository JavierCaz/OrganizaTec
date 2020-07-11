import { Button, Select, MenuItem, InputLabel, FormControl, Grid, TextField, Container } from '@material-ui/core'
import React from "react"

export default function Signup(props) {
  const [name, setName] = React.useState('');
  const [username, setUsername] = React.useState('');
  const [controlNumber, setControlNumber] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [career, setCareer] = React.useState('')
  const [json, setJson] = React.useState('')
  const [careers, setCareers] = React.useState([]);

  const texto = ["This is ", <strong>not</strong>, " working."]

  const [count, setCount] = React.useState(0);

  React.useEffect( ()=>{
    fetch('/welcome/sign_up/get_careers')
    .then(response => response.json())
    .then(careers => {setCareers(careers); console.log('Carreras', careers);})
  }, []);

  const options = careers.map((option) => <MenuItem key={option.nombre} value={option.id}>{option.nombre}</MenuItem>)

  let getSubjects = (e) => {
    console.log(name, JSON.stringify(name))
    fetch('/welcome/sign_up/get_subjects')
      .then(response => response.json())
      .then(myJson => {
        setJson(myJson)
        console.log(myJson)
      });
  }
  let getStudents = (e) => {
    console.log(name, JSON.stringify(name))
    fetch('/welcome/sign_up/get_students')
      .then(response => response.json())
      .then(myJson => {
        setJson(myJson)
        console.log(myJson)
      });
  }

  let handleSubmit = (e) => {
    e.preventDefault();
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
    <Container style={{display: 'flex', justifyContent: 'center'}}>
      <Grid container direction='column' justify='center' spacing={2}>
        <Grid container item justify='center'>
          <TextField variant="outlined" type="text" name="nombre" placeholder="Nombre Completo" value={name} onChange={(e) => setName(e.target.value)} />
        </Grid>
        <Grid container item justify='center'>
          <TextField variant="outlined" type="text" name="noControl" placeholder="No. Control" value={controlNumber} onChange={(e) => setControlNumber(e.target.value)} />
        </Grid>
        <Grid container item justify='center'>
          <TextField variant="outlined" type="email" name="email" placeholder="Correo" value={email} onChange={(e) => setEmail(e.target.value)} />
        </Grid>
        <Grid container item justify='center' >
          <TextField variant="outlined" type="password" name="pass" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </Grid>
        <Grid container item justify='center' >
          <FormControl variant="outlined" style={{ minWidth: '300px', margin: '20px' }}>
            <InputLabel>Seleccionar carrera</InputLabel>
            <Select value={career} onChange={(e)=> setCareer(e.target.value)}>
              {options}
            </Select>
            </FormControl>
        </Grid>
        <Grid container item justify='center' >
          <Button type="submit" variant="contained" onClick={handleSubmit}>Sign Up</Button>
        </Grid>
      </Grid>
    </Container>
  )
}