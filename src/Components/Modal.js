import React from 'react';

const Modal = ({func,setName,setScore,setLevel}) => {
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
                        <label onClick={()=>func()} htmlFor="my-modal" className="btn btn-primary">Confirm</label>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Modal;