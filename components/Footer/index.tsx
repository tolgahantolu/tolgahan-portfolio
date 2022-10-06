import React from "react";
import Link from "next/link";

import { ImCodepen } from "react-icons/im";
import { BsGithub, BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <footer className="footer section-margin-top">
        <p className="footer__copy"> Tolgahan &copy; All Rights Reserved</p>

        <div className="footer__socials">
          <Link href="/">
            <a className="link">
              <BsLinkedin />
            </a>
          </Link>
          <Link href="/">
            <a className="link">
              <BsGithub />
            </a>
          </Link>
          <Link href="/">
            <a className="link">
              <ImCodepen />
            </a>
          </Link>
        </div>
      </footer>

      <style jsx>{`
        @import "../../styles/variables.scss";

        .footer {
          width: 100%;
          height: 5rem;
          font-size: 1.4rem;

          display: flex;
          justify-content: space-between;
          align-items: center;

          &__socials {
            font-size: 2rem;
            .link {
              transition: all 0.3s ease;
              display: inline-block;

              &:hover {
                color: $color-blue;
                transform: scale(1.5);
              }
            }

            .link:not(:first-child) {
              margin-left: 3rem;
            }
          }
        }
      `}</style>
    </>
  );
};

export default Footer;
