import { Icon } from '@iconify/react';
import React from 'react';
import './Table.css'

const Table = () => {
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
      <tr className="hover parent">
        <th>1</th>
        <td>Hart Hagerty</td>
        <td>Desktop Support Technician</td>
        <td>Purple</td>
        <td>Purple</td>
        <td className='flex items-center justify-between'>Purple <div className='show flex'><span className='pr-4'><Icon icon="bytesize:edit" /></span><span ><Icon icon="ant-design:delete-outlined" /></span></div></td>
      </tr>
      <tr className="hover">
        <th>2</th>
        <td>Hart Hagerty</td>
        <td>Desktop Support Technician</td>
        <td>Purple</td>
        <td>Purple</td>
        <td className='flex items-center justify-between'>Purple <div className='show flex'><span className='pr-4'><Icon icon="bytesize:edit" /></span><span ><Icon icon="ant-design:delete-outlined" /></span></div></td>
      </tr>
      <tr className="hover">
        <th>3</th>
        <td>Hart Hagerty</td>
        <td>Desktop Support Technician</td>
        <td>Purple</td>
        <td>Purple</td>
        <td className='flex items-center justify-between'>Purple <div className='show flex'><span className='pr-4'><Icon icon="bytesize:edit" /></span><span ><Icon icon="ant-design:delete-outlined" /></span></div></td>
      </tr>
      <tr className="hover">
        <th>4</th>
        <td>Hart Hagerty</td>
        <td>Desktop Support Technician</td>
        <td>Purple</td>
        <td>Purple</td>
        <td className='flex items-center justify-between'>Purple <div className='show flex'><span className='pr-4'><Icon icon="bytesize:edit" /></span><span ><Icon icon="ant-design:delete-outlined" /></span></div></td>
      </tr>
      <tr className="hover">
        <th>5</th>
        <td>Hart Hagerty</td>
        <td>Desktop Support Technician</td>
        <td>Purple</td>
        <td>Purple</td>
        <td className='flex items-center justify-between'>Purple <div className='show flex'><span className='pr-4'><Icon icon="bytesize:edit" /></span><span ><Icon icon="ant-design:delete-outlined" /></span></div></td>
      </tr>
    </tbody>
  </table>
</div>
    );
};

export default Table;