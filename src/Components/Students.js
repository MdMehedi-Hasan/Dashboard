import React, { useState } from 'react';
import Table from './Table'
import { Icon } from '@iconify/react';
import Modal from './Modal';
import ConfirmationModal from './ConfirmationModal';

const Students = () => {
    const [name, setName] = useState('')
    const [level, setLevel] = useState(0)
    const [score, setScore] = useState(0)
    const [success, setSuccess] = useState(null)
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
    const studentInfo = {
        Name: name,
        Class: level,
        Score: score,
        Result: result,
        Grade: grade
    }
    const submit = () => {
        fetch('https://quiet-escarpment-16940.herokuapp.com/newStudent', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(studentInfo),
        })
            .then(response => response.json())
            .then(data => {
                // console.log('Success:', data);
                if (data) {
                    setSuccess(data)
                }
                else {
                    setSuccess(null)
                }
            })
            .catch((error) => {
              console.error('Error:', error);
            });
    }
    return (
        <div>
            <div className='flex justify-between items-center mt-8 mb-6'>
                <h1 className='font-bold'>Students</h1>
                <label htmlFor="my-modal" className="btn modal-button btn-primary"><Icon icon="ant-design:plus-outlined" />&nbsp; ADD</label>
            </div>
            <Table success={success}></Table>
            <Modal func={() => submit()} setName={setName} setLevel={setLevel} setScore={setScore}></Modal>
            <ConfirmationModal></ConfirmationModal>
        </div>
    );
};

export default Students;