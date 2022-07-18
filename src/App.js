import React from 'react';
import { Routes, Route } from "react-router-dom";
import Classes from './Components/Classes';
import Courses from './Components/Courses';
import Dashboard from './Components/Dashboard';
import DashboardPage from './Components/DashboardPage';
import Exams from './Components/Exams';
import Notice from './Components/Notice';
import Notifications from './Components/Notifications';
import Results from './Components/Results';
import Students from './Components/Students';
  
function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Dashboard></Dashboard>}>

        <Route path='/' element={<DashboardPage></DashboardPage>}></Route>
        <Route path='courses' element={<Courses></Courses>}></Route>
        <Route path='Students' element={<Students></Students>}></Route>
        <Route path='exams' element={<Exams></Exams>}></Route>
        <Route path='results' element={<Results></Results>}></Route>
        <Route path='notice' element={<Notice></Notice>}></Route>
        <Route path='classes' element={<Classes></Classes>}></Route>
        <Route path='notifications' element={<Notifications></Notifications>}></Route>        
        
        </Route>
      </Routes>
    </div>
  );
}

export default App;
