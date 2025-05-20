import React from "react";

export default function FeatureCard({
  title,
  text,
  imgSrc,
  buttonText,
  onClick,
}) {
  return (
    <div className="card border-0 shadow-sm h-100">
      <div className="row g-0 h-100 align-items-center">
        {/* Content */}
        <div className="col-md-6 d-flex flex-column p-4 position-relative">
          <h4
            className="card-title"
            style={{ fontFamily: "Glaser Stencil D", fontSize: "24px" }}
          >
            {title}
          </h4>
          <p
            className="card-text flex-grow-1 mt-2"
            style={{
              fontFamily: "Montserrat",
              fontSize: "16px",
              color: "#555",
            }}
          >
            {text}
          </p>
          <button
            onClick={onClick}
            className="btn btn-outline-primary mt-3 align-self-start"
            style={{ borderWidth: "2px" }}
          >
            {buttonText}
          </button>
        </div>

        {/* Image */}
        <div className="col-md-6">
          <img
            src={imgSrc}
            alt={title}
            className="img-fluid rounded-start h-100"
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
    </div>
  );
}
