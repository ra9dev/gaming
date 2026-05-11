import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Heading from "@theme/Heading";
import styles from "./index.module.scss";

export default function Home() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <div className={styles.logo} />
      <main>
        <HomepageFeatures />
      </main>
      <div className={clsx(styles.logo, styles.logo__inverted)} />
    </Layout>
  );
}
