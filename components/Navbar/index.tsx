import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <Link href="/">
          <a className="link navbar__logo">
            Tolgahan<span className="blue-text">.</span>
          </a>
        </Link>

        <ul className="navbar__list list">
          <li className="navbar__item">
            <Link href="#about">
              <a className="navbar__link link">About</a>
            </Link>
          </li>
          <li className="navbar__item">
            <Link href="#tech">
              <a className="navbar__link link">Technologies</a>
            </Link>
          </li>
          <li className="navbar__item">
            <Link href="#projects">
              <a className="navbar__link link">Projects</a>
            </Link>
          </li>
        </ul>

        <Link href="mailto:tolgahanntolu@gmail.com">
          <a className="navbar__button link">Contact</a>
        </Link>
      </nav>

      <style jsx>{`
        @import "../../styles/variables.scss";

        .navbar {
          width: 100%;
          height: 100%;

          display: flex;
          justify-content: space-between;
          align-items: center;

          &__logo {
            font-size: 2.5rem !important;
            font-weight: 700;
          }

          &__list {
            display: flex;
            font-size: 1.6rem;
            font-weight: 500;
          }

          &__item {
            .link {
              transition: all 0.3s ease;
            }
            .link:hover {
              color: $color-blue;
            }

            &:not(:first-child) {
              margin-left: 1.5rem;
            }
          }

          &__button {
            font-size: 1.6rem;
            padding: 1rem 2rem;
            font-weight: 600;
            border-radius: $border-rad-medium;
            background-color: $color-blue;
            color: $color-black;
            transition: all 0.3s ease;

            &:hover {
              color: unset;
              transform: translateY(-0.1rem);
            }
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;
