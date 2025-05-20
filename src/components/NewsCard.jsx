export default function NewsCard({ title, date, excerpt, imgSrc, alt }) {
  return (
    <div className="news-card">
      <h3>{title}</h3>
      <small>{date}</small>
      <p>{excerpt}</p>
      {imgSrc && <img src={imgSrc} alt={alt || title} className="card-img-bottom img-fluid" />}
    </div>
  );
}