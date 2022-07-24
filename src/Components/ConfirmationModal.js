import React from 'react';

const ConfirmationModal = () => {
    return (
        <div>
            <input type="checkbox" id="Confirmation-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-xl">Remove Student</h3>
                    <p className="py-4 font-bold">Are you sure you want to remove the current student from the list?</p>
                    <p className="py-4">Student Name</p>
                    <p className="py-4"></p>
                    <p className="py-4">Class</p>
                    <p className="py-4"></p>
                    <div className="modal-action">
                        <label for="Confirmation-modal" className="btn btn-outline btn-success">Cancel</label>
                        <label for="Confirmation-modal" className="btn btn-error">Remove</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConfirmationModal;