import React from 'react'
import TableColumn from './TableColumn'

function Table() {
    return (
        <div>
            <div className="componentName"><h1>Table Component</h1></div>
            
            <table>
                <thead>
                    <tr>
                        <TableColumn></TableColumn>
                    </tr>
                </thead>
            </table>
        </div>
    )
}

export default Table
