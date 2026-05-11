import clsx from "clsx";
import styles from "./styles.module.scss";
import Link from "@docusaurus/Link";

export default function HomepageFeatures() {
  return (
    <section className={styles.page}>
      <div className={clsx("container", styles.contentWrapper)}>
        <img className={styles.profileImg} src={"img/SHERKHAN.jpg"} />
        <div className={styles.separator}></div>
        <div className={styles.infoWrapper}>
          <h2>{`🐯Sherkhan & 🦁Arslan`}</h2>
          <hr />
          <p>
            <i>
              {
                "We play games, we develop games, we design games. For us, life itself is a game in many ways."
              }
            </i>
          </p>
          <hr />
          <p>
            {"Project-in-Motion: "} <b>{"Agony Dolls (to be disclosed)"}</b>
          </p>
          <p>{"True knowledge is meant to be shared."}</p>
          <ul>
            <li>
              <Link to="/3d/lvl-1">{"101 LVL of 3D Modeling"}</Link>
            </li>
            <li>
              <Link to="/unreal/overview">{"Unreal Engine Tips & Tricks"}</Link>
            </li>
            <li>
              <Link to="/blog">{"Studio Blog"}</Link>
            </li>
          </ul>
        </div>
        <div className={styles.separator}></div>
        <img
          className={clsx(styles.profileImg, styles.profileImg__achivements)}
          src={"img/ARSLAN.jpg"}
        />
      </div>
    </section>
  );
}
