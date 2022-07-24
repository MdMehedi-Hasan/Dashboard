import { Icon } from '@iconify/react';
import React, { useEffect, useState } from 'react';
import './Table.css'

const Table = () => {
  const [students, setStudents] = useState([])
  
  console.log(students);

  
  useEffect(() => {
    fetch('https://quiet-escarpment-16940.herokuapp.com/newStudent')
    .then(res => res.json())
    .then(data => setStudents(data))
  }, [])
  

  return (
    <div className="overflow-x-auto">
      <table className="table w-full">
        <thead>
          <tr>
            <th>No.</th>
            <th>Student Name</th>
            <th>Class</th>
            <th>Result</th>
            <th>Score</th>
            <th>Grade</th>
          </tr>
        </thead>
        <tbody>
        {students?.map(student =>
            <tr key={student?._id} className="hover parent">
            <th>{students.indexOf(student)+1}</th>
              <td>{student?.Name}</td>
              <td>{student?.Class}</td>
              <td><span className={`badge ${student?.Result === 'Failed' ? 'badge-error' : 'badge-success'}`}>{student.Result}</span></td>
              <td>{student?.Score}/100</td>
              <td className={`flex items-center justify-between ${student?.Grade === 'Poor' && 'text-red-600'} ${student?.Grade === 'Average' && 'text-primary'} ${student?.Grade === 'Excellent' && 'text-success'}`}>{student.Grade} <div className='show flex text-black'><span className='pr-4 hover:text-blue-700'><Icon icon="bytesize:edit" /></span><span className="hover:text-red-600"><Icon icon="ant-design:delete-outlined" /></span></div></td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;