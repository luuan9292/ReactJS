import React from 'react';
import Home from './components/Home';
import About from './components/About';
import Notfound from './components/Notfound';
import CourseList from './components/CourseList';
import LeaveMe from './components/LeaveMe';
import Admin from './components/Admin';

const routes = [
    {
        path: '/',
        exact: true,
        main: ({location}) => <Home location={location}/>
    },
    {
        path: '/about',
        exact: true,
        main: () => <About />
    },
    {
        path: '/course',
        exact: false,
        main: ({match}) => <CourseList match={match} /> //Truyen match vao cho CourseList
    },
    {
        path: '/leave-me',
        exact: false,
        main: () => <LeaveMe />
    },
    {
        path: '/admin/:id',
        exact: true,
        main: ({match, location}) => <Admin match={match}  location={location}/>
    },
    {
        path: '',
        exact: true,
        main: () => <Notfound />
    },
];

export default routes;