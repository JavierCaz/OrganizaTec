import React from "react"
import { Container, Grid, InputLabel, Input, FormHelperText, Button } from "@material-ui/core"

export default function Profile(props) {
    const [user, setUser] = React.useState(props.user)
    const [userCareer, setUserCareer] = React.useState(props.userCareer)
    const [editable, setEditable] = React.useState(false)
    const [userName, setUserName] = React.useState(user.name)
    const [controlNumber, setControlNumber] = React.useState(user.control_number)

    let handleSubmit = () => {
        setEditable(true)
    }

    let save = () => {
        setEditable(false)
        fetch('/welcome/profile/update', {
            headers: {
                'Content-Type': 'application/json',
                'X-CSRF-Token': document.getElementsByTagName('meta')["csrf-token"].content
            },
            method: "POST",
            body: JSON.stringify({
                name: userName,
                control_number: controlNumber
            })
        }).then(response => {
            if (response.status == 204) {
                var success = document.createElement('label');
                var successText = document.createTextNode('Successful entry')
                success.appendChild(successText);
                document.getElementsByClassName('MuiContainer-root')[0].appendChild(success);
                setTimeout(()=> {success.remove()}, 3000  )
            } else {
                console.log('Error: ' + response.status)
            }
        })
    }

    let reset = () => {
        setEditable(false);
        setUserName(user.name);
        setControlNumber(user.control_number);
    }

    return (
        <Container>
            <Grid container direction="column" alignItems="center" spacing={3}>
                <Grid item>
                    <InputLabel htmlFor="name">Nombre</InputLabel>
                    <Input id="name" readOnly={!editable} value={userName} onChange={e => setUserName(e.target.value)} />
                </Grid>
                <Grid item>
                    <InputLabel htmlFor="control_number" >No. Control</InputLabel>
                    <Input id="control_number" readOnly={!editable} value={controlNumber} onChange={e => setControlNumber(e.target.value)} />
                </Grid>
                <Grid item>
                    <InputLabel htmlFor="career" >Carrera</InputLabel>
                    <Input id="career" readOnly defaultValue={userCareer.name} />
                </Grid>
                <Grid item>
                    <InputLabel htmlFor="email">Email</InputLabel>
                    <Input id="email" aria-describedby="email-helper-text" readOnly defaultValue={user.email} />
                    <FormHelperText id="email-helper-text" >We'll never share your email.</FormHelperText>
                </Grid>
                <Grid item>
                    <Grid container spacing={2}>
                        <Button variant="contained" onClick={handleSubmit}>
                            Editar
                        </Button>
                        {editable &&
                            <div className="R-ROW">
                                <Button variant="contained" onClick={save}>
                                    Save
                                </Button>
                                <Button variant="contained" onClick={reset}>
                                    X
                                </Button>
                            </div>
                        }
                    </Grid>

                </Grid>
            </Grid>
        </Container>
    )
}