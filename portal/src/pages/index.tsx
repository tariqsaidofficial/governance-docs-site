/*
 * File Purpose:
 * Public home route entry for the portal.
 * Composes the modular landing experience via a single LandingPage layout component.
 */
import type {ReactNode} from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import {LandingPage} from '@site/src/components/landing';

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      noFooter
      wrapperClassName="landing-shell"
      title={siteConfig.title}
      description="EATGF Portal - run deterministic compliance assessments and explore the governance framework.">
      <LandingPage />
    </Layout>
  );
}
