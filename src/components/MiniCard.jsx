export default function MiniCard({ title, date, excerpt }) {
  return (
    <div className="mini-card">
      <h4>{title}</h4>
      <small>{date}</small>
      <p>{excerpt}</p>
    </div>
  );
}