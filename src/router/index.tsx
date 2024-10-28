import { createBrowserRouter } from 'react-router-dom';
import * as React from 'react';
import Login from '../pages/Login';
import Home from '../pages/Home';
import Settings from '../pages/Settings';
import PageContent from '../components/layout/PageContent';
import ProtectedRoute from './ProtectedRoute';

export const router = createBrowserRouter([
  {
    path: "/login",
    element: <PageContent><Login /></PageContent>
  },
  {
    path: "/",
    element: <ProtectedRoute><Home /></ProtectedRoute>
  },
  {
    path: "/settings",
    element: <ProtectedRoute><Settings /></ProtectedRoute>
  },
]);