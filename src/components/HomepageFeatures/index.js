import clsx from "clsx";
import styles from "./styles.module.css";

export default function HomepageFeatures() {
  return (
    <section className={styles.page}>
      <div className={clsx("container", styles.imgWrapper)}>
        <img className="w-4xl" src={"img/todo.jpg"} />
      </div>
    </section>
  );
}
