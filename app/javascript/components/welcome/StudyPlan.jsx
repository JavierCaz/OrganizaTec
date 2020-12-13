import React from 'react'
import { genera_tabla2, materias } from './tablesExample'
import { Button } from '@material-ui/core'


export default function StudyPlan() {
    const [showPlan,setShowPlan] = React.useState(false)

    React.useEffect(() => {
        // genera_tabla2();
    }, []);

    const arreglo = [
        { semestre: 1, materias: [1, 2, 3] }, { semestre: 2, materias: [1, 3] }, { semestre: 3, materias: [1, 2, 3, 4, 5, 6] },
        { semestre: 4, materias: [1] }, { semestre: 4, materias: [1, 2] }, { semestre: 6, materias: [1, 2] },
    ]

    const materiasArr = ["subj 1", "subj 2", "subj 3", "subj 4", "subj 5", "subj 6", "subj 7", "subj 8", "subj 9", "subj 10", "subj 11", 
        "subj 12", "subj 13", "subj 14", "subj 15", "subj 16", "subj 17", "subj 18", "subj 19", "subj 20", "subj 21", "subj 22", "subj 23", "subj 24",
        "subj 25", "subj 26", "subj 27", "subj 28"]


    const genPlan = (semestres) => {
        var plan, materiasPorSemestre = materiasArr.length/semestres
        plan = []
        for (let i = 0; i < semestres; i++) {
            plan[i] = {}
            plan[i]["semestre"] = i+1

            for (let j = 0; j < materiasPorSemestre; j++) {
                if (plan[i]["materias"] == undefined)
                    plan[i]["materias"] = []
                plan[i]["materias"].push([materiasArr[j]])
            }
            materiasArr.splice(0,materiasPorSemestre)
        }
        return plan
    }

    const solver = (arreglo) => {
        return(
            arreglo.map((element,i) => {
                return(
                    <div className="row" key={i}>
                        <div className="item header"> semestre {element["semestre"]}</div>
                        {element.materias.map((materia,j) => {
                            return(
                                <div className="item data" key={j}>{materia}</div>
                            )
                        })}
                    </div>
                )
            })
        )
    }

    const plan = arreglo.map((element,i) => {
        return(
            <div className="row" key={i}>
                <div className="item header"> semestre {element["semestre"]}</div>
                {element.materias.map((materia,j) => {
                    return(
                        <div className="item data" key={j}>subj {materia}</div>
                    )
                })}
            </div>
        )
    })

    return (
        <div>
            <div className="header">
                {/* <input type="button" value="Genera otra tabla" onClick={genera_tabla2} /> */}
                <Button variant={'contained'} onClick={() => setShowPlan(true)}>Generate Plan</Button>
            </div>
            {/* <div className="second-table table-container"></div> */}
            {/* <div className="tbl">{plan}</div> */}

            <h1 style={{textAlign:'center'}}>Plan de estudio actual</h1>
            {showPlan &&
                <div>
                    <div className="tbl">
                        {solver(genPlan(7))}
                    </div>
                </div>
            }
            {!showPlan && 
                <div className="tbl">{plan}</div>
            }
        </div>
    )
}