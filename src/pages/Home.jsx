import NewsCard from "../components/NewsCard";
import heroImage from "../assets/img/hero.jpg";
import newsImage from "../assets/img/news.png";
import "../assets/bootstrap.min.css";
import "../assets/css/styles.min.css";
import FeatureCard from "../components/FeatureCard";

import blurBg from "../assets/img/blur-facut.png";
import taxImg from "../assets/img/director's-notes_donate_new-website.jpg";

import Hexagon from "../components/hexagon";

export default function Home() {
  return (
    <main className="page">
      {/* Hero Section */}
      <section style={{ background: "var(--bs-primary)" }}>
        {/* background hex groups */}
        <div
          className="hexagon-group"
          style={{ top: "10%", left: "5%", transform: "rotate(15deg)" }}
        >
          <Hexagon size={80} />
          <Hexagon
            size={60}
            style={{ position: "absolute", top: "40px", left: "60px" }}
          />
        </div>

        <div
          className="hexagon-group"
          style={{ bottom: "10%", left: "25%", transform: "rotate(215deg)" }}
        >
          <Hexagon size={80} />
          <Hexagon
            size={60}
            style={{ position: "absolute", top: "40px", left: "60px" }}
          />
        </div>

        <div
          className="hexagon-group"
          style={{ bottom: "15%", right: "5%", transform: "rotate(-10deg)" }}
        >
          <Hexagon size={100} stroke="#ccc" />
          <Hexagon
            size={70}
            stroke="#ccc"
            style={{ position: "absolute", top: "80px", left: "30px" }}
          />
          <Hexagon
            size={50}
            stroke="#ccc"
            style={{ position: "absolute", top: "140px", left: "80px" }}
          />
        </div>

        <div className="container py-4 py-xl-5">
          <div className="row gy-4 gy-md-0">
            <div className="col-auto col-md-6 text-start d-flex justify-content-center align-items-center justify-content-md-start">
              <div className="text-start" style={{ width: "fit-content" }}>
                <h2
                  className="text-uppercase fw-bold ps-0"
                  style={{
                    fontFamily: "Glaser Stencil D",
                    color: "var(--bs-light)",
                    fontSize: "48px",
                  }}
                >
                  stim-noi suntem viitorul!
                </h2>
                <p
                  className="my-3"
                  style={{ color: "var(--bs-light)", fontSize: "24px" }}
                >
                  Tincidunt laoreet leo, adipiscing taciti tempor. Primis
                  senectus sapien, risus donec ad fusce augue interdum.
                </p>
                <a className="btn cta-button" href="#">
                  Get involved
                </a>
              </div>
            </div>
            <div className="col-md-6">
              <div className="p-xl-5 m-xl-5" style={{ width: "auto" }}>
                <img
                  className="rounded img-fluid w-100 fit-cover"
                  style={{ minHeight: "300px" }}
                  src={heroImage}
                  alt="Hero"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="clean-block clean-info dark">
        <div className="container py-4 py-xl-5">
          <div
            className="block-heading"
            style={{
              height: "198.188px",
              margin: "-45px",
              padding: "68px 33px 8px",
            }}
          >
            <hr
              style={{
                borderTopWidth: "4px",
                borderTopColor: "var(--bs-secondary)",
                height: "8px",
                margin: "6px 0",
              }}
            />
            <h2 className="title-section">LATEST NEWS</h2>
          </div>
          <div className="row gy-4 row-cols-1 row-cols-md-2 row-cols-xl-3">
            {[...Array(4)].map((_, i) => (
              <div key={i}>
                <NewsCard
                  title="Lorem libero donec"
                  date="01 May 2025"
                  excerpt="Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus."
                  imgSrc={newsImage}
                  alt={`News image ${i + 1}`}
                />
              </div>
            ))}
          </div>
          <p
            className="text-center"
            style={{
              marginTop: "37px",
              marginBottom: "-1px",
              fontWeight: "bold",
            }}
          >
            SEE MORE NEWS
          </p>
          <hr
            style={{
              borderTopWidth: "4px",
              borderTopColor: "var(--bs-secondary)",
              height: "8px",
              margin: "6px 0",
              marginTop: "12px",
            }}
          />
        </div>
      </section>

      {/* Blurry Intro Section */}
      <section
        className="position-relative text-white d-flex align-items-center"
        style={{
          backgroundImage: `url(${blurBg})`,
          backgroundSize: "cover",
          //   filter: "blur(8px)",
          minHeight: "400px",
        }}
      >
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{ backdropFilter: "blur(8px)" }}
        />
        <div className="container position-relative" style={{ filter: "none" }}>
          <h2
            style={{
              fontFamily: "Glaser Stencil D",
              fontSize: "64px",
              textShadow: "0 0 8px #0ff",
            }}
          >
            LOREM IPSUM DOLOR SIT AMET
          </h2>
          <p
            className="mt-3"
            style={{
              fontFamily: "Montserrat",
              fontSize: "18px",
              color: "#fff",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            vehicula, nisl eget bibendum sodales, augue ante facilisis nunc,
            vitae aliquet enim ligula eget dolor. Aenean lacinia bibendum nulla
            sed consectetur.
          </p>
          <div className="d-flex justify-content-end">
            <a className="btn btn-lg btn-outline-light" href="#">
              Support us
            </a>
          </div>
        </div>
      </section>

      {/* Redirect Your Taxes Section */}
      <section
        className="py-5 position-relative"
        style={{ backgroundColor: "#fff" }}
      >
        {/* Hexagon background via CSS */}
        {/* hex background */}
        <div
          className="hexagon-group"
          style={{ top: "20%", left: "20%", transform: "rotate(5deg)" }}
        >
          <Hexagon size={60} stroke="#ddd" />
          <Hexagon
            size={40}
            stroke="#ddd"
            style={{ position: "absolute", top: "50px", left: "50px" }}
          />
        </div>
        <div
          className="hexagon-group"
          style={{ bottom: "10%", right: "15%", transform: "rotate(25deg)" }}
        >
          <Hexagon size={90} stroke="#ddd" />
          <Hexagon
            size={55}
            stroke="#ddd"
            style={{ position: "absolute", top: "60px", left: "70px" }}
          />
        </div>

        {/* hex background */}
        <div
          className="hexagon-group"
          style={{ bottom: "55%", right: "21%", transform: "rotate(5deg)" }}
        >
          <Hexagon size={60} stroke="#ddd" />
          <Hexagon
            size={40}
            stroke="#ddd"
            style={{ position: "absolute", top: "50px", left: "50px" }}
          />
        </div>
        <div
          className="hexagon-group"
          style={{ top: "30%", left: "25%", transform: "rotate(25deg)" }}
        >
          <Hexagon size={90} stroke="#ddd" />
          <Hexagon
            size={55}
            stroke="#ddd"
            style={{ position: "absolute", top: "60px", left: "70px" }}
          />
        </div>

        <div className="container position-relative">
          <h2 style={{ fontFamily: "Glaser Stencil D", fontSize: "48px" }}>
            Redirect Your Taxes
          </h2>
          <p
            className="my-3"
            style={{ fontFamily: "Montserrat", fontSize: "18px" }}
          >
            Completează formularul și redirecționează 3.5% sau 20% către
            organizația noastră.
          </p>
          <div className="row align-items-center">
            {[
              {
                title: "Formular 3.5%",
                text: "Detalii formular 3.5%",
                buttonText: "Descarcă",
                imgSrc: taxImg,
              },
              {
                title: "Formular 20%",
                text: "Detalii formular 20%",
                buttonText: "Descarcă",
                imgSrc: taxImg,
              },
            ].map((item, idx) => (
              <div key={idx} className="col-md-6">
                <FeatureCard
                  title={item.title}
                  text={item.text}
                  buttonText={item.buttonText}
                  imgSrc={item.imgSrc}
                />
              </div>
            ))}
          </div>
        </div>

      </section>
      <hr
        style={{
          borderTopWidth: "4px",
          borderTopColor: "var(--bs-secondary)",
          height: "8px",
          margin: "6px 0",
        }}
      />
    </main>
  );
}
