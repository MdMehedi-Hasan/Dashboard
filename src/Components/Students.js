import React from 'react';
import Table from './Table'
import { Icon } from '@iconify/react';

const Students = () => {
    return (
        <div>
            <div className='flex justify-between items-center'>
                <h1>Students</h1>
                <label for="my-modal" className="btn modal-button btn-primary"><Icon icon="ant-design:plus-outlined" />&nbsp; ADD</label>
            </div>
            <Table></Table>
        </div>
    );
};

export default Students;