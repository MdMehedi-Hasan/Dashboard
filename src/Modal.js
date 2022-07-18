import React from 'react';

const Modal = () => {
    return (
        <div>
            {/* <!-- Put this part before </body> tag-- > */}
            <input type="checkbox" id="my-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <div><h1>Student Name*</h1><input className='w-full border-2 rounded-md' type="text" /></div>
                    <div><h1>Class*</h1><input className='w-full border-2 rounded-md' type="text" /></div>
                    <div><h1>Score*</h1><input className='w-full border-2 rounded-md' type="text" /></div>
                    <div><h1>Result</h1><h2>-</h2></div>
                    <div><h1>Grade</h1><h2>-</h2></div>
                    <div className="modal-action">
                        <label for="my-modal" className="btn btn-outline btn-primary">Cancel</label>
                        <label for="my-modal" className="btn btn-primary">Confirm</label>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Modal;