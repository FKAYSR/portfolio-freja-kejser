export default function NameTitle({ variant = "hero" }) {
  return (
    <span className={`brand-title brand-title-${variant}`}>
      FREJA <br />
      KEJSER
    </span>
  );
}