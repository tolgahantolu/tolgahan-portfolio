import React from "react";
import {
  SiTypescript,
  SiJavascript,
  SiRedux,
  SiGraphql,
  SiTailwindcss,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { FaReact, FaBootstrap, FaGitAlt } from "react-icons/fa";

const Tech = () => {
  return (
    <>
      <div className="tech">
        <h1 className="section-title">Technologies</h1>
        <p className="section-desc">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae ad
          autem suscipit delectus voluptas sed excepturi soluta laboriosam
          officia! Veritatis! Amet consectetur adipisicing elit.
        </p>
        <div className="tech__tools">
          <ul className="tech__list list">
            <li className="tech__item">
              <span>
                <SiJavascript />
              </span>
              <p>JavaScript</p>
            </li>
            <li className="tech__item">
              <span>
                <SiTypescript />
              </span>
              <p>TypeScript</p>
            </li>
            <li className="tech__item">
              <span>
                <FaReact />
              </span>
              <p>React.js</p>
            </li>
            <li className="tech__item">
              <span>
                <SiRedux />
              </span>
              <p>Redux</p>
            </li>
            <li className="tech__item">
              <span>
                <TbBrandNextjs />
              </span>
              <p>Next.js</p>
            </li>
            <li className="tech__item">
              <span>
                <SiGraphql />
              </span>
              <p>GraphQL</p>
            </li>
            <li className="tech__item">
              <span>
                <SiTailwindcss />
              </span>
              <p>Tailwindcss</p>
            </li>
            <li className="tech__item">
              <span>
                <FaBootstrap />
              </span>
              <p>Bootstrap</p>
            </li>
            <li className="tech__item">
              <span>
                <FaGitAlt />
              </span>
              <p>Git</p>
            </li>
          </ul>
        </div>
      </div>

      <style jsx>{`
        @import "../../styles/variables.scss";

        .tech {
          &__tools {
            margin-top: 2rem;
          }

          &__list {
            display: flex;
            flex-wrap: wrap;
            gap: 3rem;
          }

          &__item {
            min-width: 10%;
            max-width: 15%;
            height: auto;
            min-height: 8rem;
            background: $color-dark-black;
            padding: 1.5rem;
            font-size: 1.6rem;
            transition: all 0.3s ease;

            display: grid;
            place-items: center;

            &:hover {
              background: $color-blue;
            }

            span {
              font-size: 3.5rem;
            }

            p {
              font-size: 1.8rem;
            }
          }
        }
      `}</style>
    </>
  );
};

export default Tech;
