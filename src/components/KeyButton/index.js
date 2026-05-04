import useBaseUrl from "@docusaurus/useBaseUrl";

export default function KeyButton({ keyName, text, comboKeys = [] }) {
  return (
    <div className="row row--align-center">
      <img
        decoding="async"
        loading="lazy"
        src={useBaseUrl(`img/kbm/${keyName || "mouse"}.svg`)}
      />
      {comboKeys.map((key) => (
        <>
          <span>{"+"}</span>
          <img
            decoding="async"
            loading="lazy"
            src={useBaseUrl(`img/kbm/${key || "mouse"}.svg`)}
          />
        </>
      ))}
      <span>{text}</span>
    </div>
  );
}
