import React from 'react';
import { project } from '../data/project';
import HeroSection from '../components/HeroSection';

export default function Home() {
  return (
    <div style={{ fontFamily: project.typography }}>
      <HeroSection {...project.hero} />
    </div>
  );
}