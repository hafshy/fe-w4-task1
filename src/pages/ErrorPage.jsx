import React from "react";
import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <>
      <div className="error-page-container">
        <h1 style={{ fontSize: "32px", textAlign: "center" }}>Not Found</h1>
        <section className="error-container">
          <span>
            <span>4</span>
          </span>
          <span>0</span>
          <span>
            <span>4</span>
          </span>
        </section>
        <div className="link-container">
          <Link to="/" className="back-button">
            Visit the original article
          </Link>
        </div>
      </div>
    </>
  );
}
