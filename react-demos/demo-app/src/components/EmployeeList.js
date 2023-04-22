import React from 'react'
import Employee from './Employee'

export default function EmployeeList(props) {
  return (
    <div>
      {
        // props.employeeList.map( (emp =>  (
        //     <div>
        //     <p>{emp.id}</p>
        //     <p>{emp.name}</p>
        //     <p>{emp.salary}</p>
        //     <p>{emp.projects}</p>
        //     </div>
        // )) )

        props.employeeList.map( emp => 
            <Employee emp={emp} />
        )

        
      }
    </div>
  )
}
