import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.scss";

export default function KeyButton({ keyName, text, secondKeyName }) {
  return (
    <div className={styles.row}>
      <img
        decoding="async"
        loading="lazy"
        src={useBaseUrl(`img/kbm/${keyName || "mouse"}.svg`)}
      />
      {secondKeyName && (
        <>
          <span>{"+"}</span>
          <img
            decoding="async"
            loading="lazy"
            src={useBaseUrl(`img/kbm/${secondKeyName || "mouse"}.svg`)}
          />
        </>
      )}
      <span>{text}</span>
    </div>
  );
}
