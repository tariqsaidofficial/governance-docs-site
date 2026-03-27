/*
 * File Purpose:
 * Orchestrates landing page section order and high-level page structure.
 * Central composition point for hero, feature grid, and call-to-action footer.
 */
import LandingActionFooterSection from '../sections/LandingActionFooterSection';
import LandingDescriptionSection from '../sections/LandingDescriptionSection';
import LandingFeatureGridSection from '../sections/LandingFeatureGridSection';
import LandingFinalCtaSection from '../sections/LandingFinalCtaSection';
import LandingFrameworkMapSection from '../sections/LandingFrameworkMapSection';
import LandingHeroSection from '../sections/LandingHeroSection';
import LandingPathwaysSection from '../sections/LandingPathwaysSection';
import LandingPillarsSection from '../sections/LandingPillarsSection';
import LandingSiteFooterSection from '../sections/LandingSiteFooterSection';
import LandingTechnicalSection from '../sections/LandingTechnicalSection';
import LandingTopNavSection from '../sections/LandingTopNavSection';

import styles from './LandingPage.module.css';

export default function LandingPage() {
  return (
    <div className={styles.root}>
      <LandingTopNavSection />
      <LandingHeroSection />
      <LandingDescriptionSection />
      <main className={styles.main}>
        <LandingPathwaysSection />
        <LandingFrameworkMapSection />
        <LandingPillarsSection />
        <LandingFeatureGridSection />
        <LandingTechnicalSection />
        <LandingFinalCtaSection />
        <LandingActionFooterSection />
      </main>
      <LandingSiteFooterSection />
    </div>
  );
}
