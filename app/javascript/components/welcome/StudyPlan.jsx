import React from 'react'
import { genera_tabla2 } from './tablesExample'


export default function StudyPlan() {
    React.useEffect(() => {
        genera_tabla2();
    }, [])

    return (
        <div>
            <div className="header">
                <input type="button" value="Genera otra tabla" onClick={genera_tabla2} />
            </div>
            <div className="second-table table-container"></div>
        </div>
    )
}