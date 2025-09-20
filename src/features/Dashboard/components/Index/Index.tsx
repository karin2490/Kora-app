 'use client';

import React from 'react';
import clsx from 'clsx';

import styles from './index.module.css';
import Sidebar from '../Sidebar/Sidebar';
import MainContent from '../MainContent/MainContent';
import RightPanel from '../RightPanel/RightPanel';

interface DashboardProps {
  className?: string;
}

const Dashboard: React.FC<DashboardProps> = ({ className }) => {
  return (
    <div className={clsx(styles.dashboard, className)}>
      <Sidebar />
      <MainContent />
      <RightPanel />
    </div>
  );
};

export default Dashboard;