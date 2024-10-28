import { useContext } from 'react';
import { AuthContext } from '../App';
import { Navigate } from 'react-router-dom';
import Header from '../components/layout/Header';
import NavigationBar from '../components/layout/NaviagationBar';
import PageContent from '../components/layout/PageContent';
import * as React from 'react';

export default function ProtectedRoute({children}: {children: JSX.Element}) {
  const { isAuthenticated } = useContext(AuthContext);

  if (!isAuthenticated) {
    return (
      <Navigate to="/login" replace />
    );
  }

  return (
    <>
      <Header />

      <NavigationBar />

      <PageContent children={children} />
    </>
  );
}