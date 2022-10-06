import React from "react";
import Navbar from "../components/Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <header className="header">
        <Navbar />
      </header>
      <main className="main">{children}</main>

      <style jsx>{`
        @import "../styles/variables.scss";

        .header,
        .main {
          padding: 0 5rem;
        }

        .header {
          width: 100%;
          height: 8rem;
          border-bottom: 1px solid $color-white;
        }
      `}</style>
    </>
  );
};

export default Layout;
