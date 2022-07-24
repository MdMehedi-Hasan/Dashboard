import React from 'react';
import Table from './Table'
import { Icon } from '@iconify/react';
import Modal from './Modal';

const Students = () => {
    const submit = () => {
       /*  fetch('https://quiet-escarpment-16940.herokuapp.com/newStudent', {
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
            }); */
        console.log('Working');
    }
    return (
        <div>
            <div className='flex justify-between items-center'>
                <h1>Students</h1>
                <label htmlFor="my-modal" className="btn modal-button btn-primary"><Icon icon="ant-design:plus-outlined" />&nbsp; ADD</label>
            </div>
            <Table></Table>
            <Modal func={()=>submit()}></Modal>
        </div>
    );
};

export default Students;