import clsx from "clsx";
import styles from "./styles.module.scss";
import Link from "@docusaurus/Link";

export default function HomepageFeatures() {
  return (
    <section className={styles.page}>
      <div className={clsx("container", styles.contentWrapper)}>
        <img className={styles.profileImg} src={"img/profile.jpg"} />
        <div className={styles.separator}></div>
        <div className={styles.infoWrapper}>
          <h2>{"Author — Sherkhan Kubaidullov"}</h2>
          <p className={styles.quote}>
            <i>
              {
                "I play games, I develop games, I design game art, I breathe games. For me, life itself is a game in many ways."
              }
            </i>
          </p>
          <p>{`Well, hello there, rare guest!`}</p>
          <p>
            {
              "Here you’ll find a list of my professional adventures, divided into separate disciplines and completely free."
            }
          </p>
          <p>{"True knowledge is meant to be shared."}</p>
          <ul>
            <li>
              <Link to="/3d/intro">{"101 LVL of 3D Modeling"}</Link>
            </li>
            <li>
              <Link to="/unreal/intro">{"Unreal Engine Tips & Tricks"}</Link>
            </li>
            <li>
              <Link to="/blog">{"Chaotic thoughts"}</Link>
            </li>
          </ul>
        </div>
        <div className={styles.separator}></div>
        <img
          className={clsx(styles.profileImg, styles.profileImg__achivements)}
          src={"img/achievements.png"}
        />
      </div>
    </section>
  );
}
