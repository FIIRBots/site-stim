import FeatureCard from "../components/FeatureCard";
import React from "react";
import largeImage from "../assets/img/news.png";
import smallImage1 from "../assets/img/news.png";
import smallImage2 from "../assets/img/news.png";

export default function Projects() {
  return (
    <main className="projects-page py-5">
      {/* Future Projects Section */}
      <h2
        style={{
          fontFamily: "Glaser Stencil D",
          fontSize: "48px",
          textAlign: "left",
          //   margin: "2rem 0",
          padding: "0 3rem",
        }}
      >
        Future Projects
      </h2>
      <section
        className="mb-5 text-center "
        style={{ background: "var(--bs-primary)" }}
      >
        <div className="container py-4 py-xl-5">
          <div className="row align-items-center mt-4">
            <div className="col-md-6 text-center">
              <h3 style={{ fontFamily: "Glaser Stencil D", color: "#ddd" }}>
                Lorem Ipsum
              </h3>
              <p
                style={{
                  fontFamily: "Montserrat",
                  fontSize: "16px",
                  margin: "1rem 0",
                  color: "#ddd",
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum
              </p>
              <div className="row g-3">
                <div className="col-6">
                  <img
                    src={smallImage1}
                    alt="Project 1"
                    className="img-fluid rounded"
                  />
                  <div className="text-center mt-4">
                    <button
                      className="btn btn-outline-primary"
                      style={{ borderWidth: "2px" }}
                    >
                      See more
                    </button>
                  </div>
                </div>
                <div className="col-6">
                  <img
                    src={smallImage2}
                    alt="Project 2"
                    className="img-fluid rounded"
                  />
                  <div className="text-center mt-4">
                    <button
                      className="btn btn-outline-primary"
                      style={{ borderWidth: "2px" }}
                    >
                      See more
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 text-center">
              <img
                src={largeImage}
                alt="Future Projects"
                className="img-fluid rounded"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Recent Projects Section */}
      <section>
        <div className="container py-4 py-xl-5">
          <h2
            className="text-center mb-4"
            style={{ fontFamily: "Glaser Stencil D", fontSize: "48px" }}
          >
            Recent Projects
          </h2>
          <div className="row g-4">
            {[...Array(6)].map((_, idx) => (
              <div key={idx} className="col-12 col-md-6 col-lg-4">
                <div className="card h-100 rounded shadow-sm p-3">
                  <h3
                    className="text-center"
                    style={{ fontFamily: "Glaser Stencil D" }}
                  >
                    Project Title {idx + 1}
                  </h3>
                  <p
                    style={{
                      fontFamily: "Montserrat",
                      fontSize: "14px",
                      margin: "1rem 0",
                    }}
                  >
                    Brief project description goes here, aligned left and right
                    to create dynamic layout.
                  </p>
                  <hr style={{ borderStyle: "dotted", borderColor: "#ccc" }} />
                  <img
                    src={smallImage1}
                    alt={`Project ${idx + 1}`}
                    className="img-fluid rounded mt-3"
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-4">
            <button
              className="btn btn-outline-primary"
              style={{ borderWidth: "2px" }}
            >
              Load More
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
