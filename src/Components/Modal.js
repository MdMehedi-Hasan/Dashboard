import React, { useState } from 'react';

const Modal = () => {
    const [name, setName] = useState('')
    const [level, setLevel] = useState(0)
    const [score, setScore] = useState(0)
    const [scoreError, setScoreError] = useState(false)
    let result;
    let grade;
    if (score <= 30) {
        result = 'Failed';
        grade = 'Poor'
    }
    else if (score >30 && score <= 75) {
        result = 'Passed';
        grade = 'Average'
    }
    else if(score > 75) {
        result = 'Passed';
        grade = 'Excellent'
    }
    else if (score < 0) {
        setScoreError(true)
    }
    const studentInfo = {
        Name: name,
        Class: level,
        Score: score,
        Result: result,
        Grade: grade
    }

    const submit = () => {
        fetch('http://localhost:3000/newStudent', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(studentInfo),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
            })
            .catch((error) => {
              console.error('Error:', error);
            });
    }
    return (
        <div>
            <input type="checkbox" id="my-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <div><h1>Student Name*</h1><input onChange={(e) => setName(e.target.value)} className='w-full border-2 rounded-md' type="text" /></div>
                    <div><h1>Class*</h1><input onChange={(e) => setLevel(e.target.value)} className='w-full border-2 rounded-md' type="text" /></div>
                    <div><h1>Score*</h1><input onChange={(e) => setScore(e.target.value)} className='w-full border-2 rounded-md' type="text" /></div>
                    <div><h1>Result</h1><h2>-</h2></div>
                    <div><h1>Grade</h1><h2>-</h2></div>
                    <div className="modal-action">
                        <label htmlFor="my-modal" className="btn btn-outline btn-primary">Cancel</label>
                        <label onClick={()=>submit()} htmlFor="my-modal" className="btn btn-primary">Confirm</label>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Modal;