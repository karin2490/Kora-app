'use client';

import React from 'react';
import clsx from 'clsx';
import styles from './Profile.module.css';
import HeaderSection from '../HeaderSection/HeaderSection';
import ProfileCard from '../ProfileCard/ProfileCard';
import ProgramSection from '../ProgramSection/ProgramSection';
import UtilitySidebar from '../UtilitySidebar/UtilitySidebar';

interface ProfileProps {
  className?: string;
}

function Profile({ className }: ProfileProps) {
  return (
    <div className={clsx(styles.profile, className)}>
      <div className={styles.leftContent}>
        <HeaderSection />
        <div className={styles.contentArea}>
          <ProfileCard />
          <ProgramSection />
        </div>
      </div>
      <UtilitySidebar />
    </div>
  );
}

export default Profile;