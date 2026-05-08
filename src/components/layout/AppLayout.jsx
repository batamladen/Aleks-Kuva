import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

export default function AppLayout() {
  return (
    <div className="min-h-screen bg-background text-foreground font-body relative">
      {/* Film grain overlay */}
      <div className="grain-overlay" aria-hidden="true" />
      
      <Navbar />
      
      <main>
        <Outlet />
      </main>
    </div>
  );
}