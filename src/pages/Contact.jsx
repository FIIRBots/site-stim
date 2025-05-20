import React from 'react';

export default function Contact() {
  return (
    <main
      className="contact-page d-flex justify-content-center align-items-start py-5"
      style={{
        background: 'linear-gradient(135deg, #A5DAF3 0%, #FEF9EF 100%)',
        minHeight: '100vh'
      }}
    >
      <div className="container" style={{ maxWidth: '600px' }}>
        <h2
          className="text-center mb-3"
          style={{ fontFamily: 'Glaser Stencil D', fontSize: '36px' }}
        >
          Let’s create something better... together...
        </h2>
        <hr
          style={{
            borderTop: '2px dotted #555',
            width: '50%',
            margin: '0 auto 2rem'
          }}
        />

        <form>
          <div className="row g-3 mb-3">
            <div className="col-md-6">
              <label htmlFor="firstName" className="form-label">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                className="form-control"
                placeholder="John"
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="lastName" className="form-label">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                className="form-control"
                placeholder="Doe"
              />
            </div>
          </div>
          <div className="row g-3 mb-3">
            <div className="col-md-6">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="form-control"
                placeholder="john@example.com"
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="phone" className="form-label">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                className="form-control"
                placeholder="+1 234 567 8900"
              />
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="message" className="form-label">
              Message
            </label>
            <textarea
              id="message"
              className="form-control"
              rows={5}
              style={{ backgroundColor: '#A5DAF3', color: '#000' }}
              placeholder="Your message..."
            />
          </div>

          <div className="text-end">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}