import React from "react";
import Link from "next/link";
import Image from "next/image";

import tolgahanImg from "../../assets/tolgahantolu.png";

import { ImCodepen } from "react-icons/im";
import { FiCornerRightDown } from "react-icons/fi";
import { BsGithub, BsLinkedin } from "react-icons/bs";

const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="hero__left">
          <div className="hero__title">
            <h1>Hi,</h1>
            <h1>
              I'm <span className="blue-text">Tolgahan</span>
            </h1>
            <h1>React / Front-end Developer</h1>
          </div>
          <Link href="#tech">
            <a className="link scroll-button">
              Scroll Down <FiCornerRightDown />
            </a>
          </Link>
          <div className="hero__socials">
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
        </div>
        <div className="hero__right">
          <div className="img-wrapper">
            <Image
              placeholder="blur"
              layout="responsive"
              src={tolgahanImg}
              alt="Image of Tolgahan Tolu"
              className="img"
            />
          </div>
        </div>
      </section>

      <style jsx>{`
        @import "../../styles/variables.scss";

        .hero {
          line-height: 1.6;
          width: 100%;
          height: calc(100vh - 8rem);

          display: flex;
          align-items: center;

          &__left {
            max-width: 60%;
            min-width: 60%;

            .scroll-button {
              display: inline-block;
              margin-top: 2.5rem;
              font-size: 1.4rem;
            }
          }

          &__right {
            width: 100%;

            display: grid;
            place-items: center;
          }

          &__title {
            font-size: 3.3rem;
          }

          &__socials {
            margin-top: 10rem;
            font-size: 2.5rem;

            .link {
              transition: all 0.3s ease;
              display: inline-block;

              &:hover {
                color: $color-blue;
                transform: translateY(-0.5rem);
              }
            }

            .link:not(:first-child) {
              margin-left: 3rem;
            }
          }
        }
        .img-wrapper {
          width: 40rem;
          height: 40rem;
          max-width: 40rem;
          max-height: 40rem;
          clip-path: circle(20rem at center);
          box-shadow: 10px 10px 30px -50px rgba(250, 250, 250, 0.5);

          .img {
            border-radius: 50%;
            border: 1.5rem solid var(--color-secondary);
          }
        }
      `}</style>
    </>
  );
};

export default Hero;
