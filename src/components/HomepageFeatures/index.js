import clsx from "clsx";
import styles from "./styles.module.scss";

export default function HomepageFeatures() {
  return (
    <section className={styles.page}>
      <div className={clsx("container", styles.contentWrapper)}>
        <img className={styles.profileImg} src={"img/profile.jpg"} />
        <div className={styles.infoWrapper}>
          <h2>{"Author — Sherkhan Kubaidullov"}</h2>
          <p>{"Well, hello there, rare guest."}</p>
          <p>
            {
              "I play games, I develop games, I design game art, I breathe games. For me, life itself is a game in many ways."
            }
          </p>
          <p>
            <b>{"So, about the blog..."}</b>
          </p>
          <ul>
            <li>
              {
                "Another deeply personal and overshared life story from a hands-on GD"
              }
            </li>
            <li>{"Chronological journal of the studio's game projects"}</li>
            <li>{"Point of contact for the community of devs & players"}</li>
            <li>
              {"The one and only grand source of easter eggs and freebies"}
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
