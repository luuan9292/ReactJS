import React from 'react';

import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import BlogPage from './Pages/BlogPage';
import LoginPage from './Pages/LoginPage';
import NotfoundPage from './Pages/NotfoundPage';


const routes = [
    {
        path: '/',
        exact: true,
        main: () => <HomePage />
    },
    {
        path: '/about',
        exact: true,
        main: () => <AboutPage />
    },
    {
        path: '/blog',
        exact: true,
        main: () => <BlogPage />
    },
    {
        path: '/login',
        exact: true,
        main: () => <LoginPage />
    },
    {
        path: '',
        exact: true,
        main: () => <NotfoundPage />
    },
];

export default routes;