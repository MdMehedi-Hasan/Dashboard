import React from 'react';
import { Outlet, Link } from 'react-router-dom'
import Modal from '../Modal';

const DashboardDrawer = () => {
    return (
        <div>
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col mx-6">
                    {/* <!-- Page content here --> */}
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                    <Outlet />
                </div>
                <div className="drawer-side text-center w-72 p-0">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu overflow-y-auto w-72 bg-base-100 border text-base-content">
                        {/* <!-- Sidebar content here --> */}
                        <li><Link to='/'>Dashboard</Link></li>
                        <li><Link to='/courses'>Courses</Link></li>
                        <li><Link to='/students'>Students</Link></li>
                        <li><Link to='/exams'>Exams</Link></li>
                        <li><Link to='/results'>Results</Link></li>
                        <li><Link to='/notice'>Notice Board</Link></li>
                        <li><Link to='/classes'>Live Classes</Link></li>
                        <li><Link to='/notifications'>Notifications</Link></li>
                    </ul>

                </div>
            </div>
            <Modal></Modal>
        </div>
    );
};

export default DashboardDrawer;