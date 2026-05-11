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
          <p>
            <i>{"indie studio made by 2 brothers with cat names"}</i>
          </p>
          <hr />
          <p>
            {"Project-in-Motion: "} <b>{"Agony Dolls (to be disclosed)"}</b>
          </p>
          <p>{"True knowledge is meant to be shared."}</p>
          <p>{"Free courses and articles from our studio are listed below:"}</p>
          <ul>
            <li>
              <Link to="/3d/lvl-1">{"101 LVL of 3D Modeling"}</Link>
            </li>
            <li>
              <Link to="/unreal/motivation">{"Unreal Engine: Evolution"}</Link>
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
