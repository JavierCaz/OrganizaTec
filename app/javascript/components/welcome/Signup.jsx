import { Button, Select, MenuItem, InputLabel, FormControl } from '@material-ui/core'
import React from "react"

export default function Signup(props) {
  const [name, setName] = React.useState('');
  const [username, setUsername] = React.useState('');
  const [controlNumber, setControlNumber] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [career, setCareer] = React.useState('')
  const [json, setJson] = React.useState('')

  const texto = ["This is ", <strong>not</strong>, " working."]


  const carreras = [
    { nombre: 'siztemz' },
    { nombre: 'tikz' },
    { nombre: 'induztrial' },
    { nombre: 'otra' },
  ]

  let getSubjects = (e) => {
    console.log(name, JSON.stringify(name))
    fetch('/welcome/sign_up/get_subjects')
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
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'X-CSRF-Token': document.getElementsByTagName('meta')["csrf-token"].content
      },
      method: "POST",
      mode: "cors",
      body: JSON.stringify({
        noControl: controlNumber,
        nombre: name,
        correo: email,
        pass: password,
      })
    }).then(response => response.json())
      .then(response => getSubjects)
  }

  const options = carreras.map((option) => <MenuItem key={option.nombre} value={option.nombre}>{option.nombre}</MenuItem>)
  return (
    <React.Fragment>
      <div>
        <div className="container">
          <h1>Registro</h1>
          <form action="" onSubmit={handleSubmit}>
            <input type="text" name="nombre" placeholder="Nombre Completo" value={name} onChange={(e) => setName(e.target.value)} />
            <input type="text" name="username" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
            <input type="text" name="noControl" placeholder="No. Control" value={controlNumber} onChange={(e) => setControlNumber(e.target.value)} />
            <input type="email" name="email" placeholder="Correo" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" name="pass" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <FormControl variant="outlined" style={{ minWidth: '300px', margin: '20px' }}>
              <InputLabel>Seleccionar carrera</InputLabel>
              <Select value={career} onChange={(e) => { setCareer(e.target.value) }}>
                {options}
              </Select>
            </FormControl>
            <input type="submit" value="Submite" />
          </form>
          <br />
          <button onClick={getSubjects}>Get Request</button>

          <div id="aqui">{(json != '') && json.map((item) => (<li key={item.id}>nombre: {item.nombre ? item.nombre : "sin nombre"}, id:{item.id}</li>))}</div>

        </div>
      </div>
    </React.Fragment>
  )
}