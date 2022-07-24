import React from 'react';
import { Outlet, Link } from 'react-router-dom'
import { Icon } from '@iconify/react';
import Modal from './Modal';

const DashboardDrawer = () => {
    return (
        <div>
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col ml-6 pr-6">
                    {/* <!-- Page content here --> */}
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                    <Outlet />
                </div>
                <div className="drawer-side text-center">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu overflow-y-auto bg-base-100 border text-base-content px-12">
                        <div className='flex items-center justify-center mt-8'><p className='p-2 bg-warning rounded flex items-center justify-center'><Icon icon="uil:award" width="28" height="28" /></p><h1 className='text-primary font-bold text-xl ml-2'>School Space</h1></div>
                        <div className='w-full border rounded mt-10 mb-9 bg-slate-100'></div>
                        {/* <!-- Sidebar content here --> */}
                        <li><Link to='/'><Icon icon="tabler:layout-dashboard" />Dashboard</Link></li>
                        <li><Link to='/courses'><Icon icon="noto-v1:open-book" />Courses</Link></li>
                        <li><Link to='/students'><Icon icon="raphael:people" />Students</Link></li>
                        <li><Link to='/exams'><Icon icon="emojione-monotone:writing-hand" />Exams</Link></li>
                        <li><Link to='/results'><Icon icon="iconoir:page-edit" />Results</Link></li>
                        <li><Link to='/notice'><Icon icon="ep:data-board" />Notice Board</Link></li>
                        <li><Link to='/classes'><Icon icon="bi:broadcast" />Live Classes</Link></li>
                        <li><Link to='/notifications'><Icon icon="emojione-monotone:bell" rotate={1} />Notifications</Link></li>
                    </ul>

                </div>
            </div>
            {/* <Modal></Modal> */}
        </div>
    );
};

export default DashboardDrawer;