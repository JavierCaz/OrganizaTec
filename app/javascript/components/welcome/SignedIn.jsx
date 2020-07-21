import React from 'react'

export default function SignedInView (props) {
  const [careers, setCareers] = React.useState([]);

    React.useEffect(() => {
        fetch('/welcome/signedin/get_careers')
          .then(response => response.json())
          .then(careers => setCareers(careers))
      }, []);

    return(
        <div>
            <p>Te az logiado shaval, email: {props.student_email}</p>
            Usuario: {JSON.stringify(props.student)}
            <br/>
            <button onClick={()=>{console.log(props.student)}}>Imprime en consola student</button>
        </div>
    )
}