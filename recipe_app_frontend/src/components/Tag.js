/* PUBLIC_INTERFACE */
/** A small pill tag component for labeling recipes. */
export default function Tag({ label }) {
  return <span className="tag" role="note">{label}</span>;
}
