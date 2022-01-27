import React from 'react'

function TableColumn() {
    const data = [{ id: 1, name: 'React'}, { id: 2, name: 'Angular'}]

    const techDOM = data.map(tech => <React.Fragment key={tech.id}>{tech.id}. {tech.name} </React.Fragment>)
    return (
        <>
            <td>Name</td>
            <td>Rajesh Thomas</td>
            <td>Tech: {techDOM}</td>
        </>
    )
}

export default TableColumn


//ERROR Message: index.js:1 Warning: validateDOMNesting(...): <td> cannot appear as a child of <div>.
// return (
//     <div>
//         <td>Name</td>
//         <td>Rajesh Thomas</td>
//     </div>
// )