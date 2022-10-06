import React from "react";
import { FiCornerRightDown } from "react-icons/fi";
import { TimeLineData } from "../../constants/constant";

const About = () => {
  return (
    <>
      <div className="about section-margin-top">
        <h1 className="section-title">About Me</h1>
        <p className="section-desc">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae ad
          autem suscipit delectus voluptas sed excepturi soluta laboriosam
          officia! Veritatis! Amet consectetur adipisicing elit. Quae eaque,
          totam inventore beatae officiis in.
        </p>

        {/* timeline */}
        <ul className="about__timeline list">
          {TimeLineData.map((item, i) => (
            <li className="about__timeline-item" key={i}>
              <h2 className="about__timeline-title">
                {item.year}
                <span className="icon">
                  <FiCornerRightDown />
                </span>
              </h2>
              <h4 className="about__timeline-desc">{item.desc}</h4>
            </li>
          ))}
        </ul>
      </div>

      <style jsx>{`
        @import "../../styles/variables.scss";

        .about {
          &__timeline {
            margin-top: 2rem;

            display: flex;
            justify-content: space-between;

            .icon {
              animation: blink-blue 3s infinite;
            }

            @keyframes blink-blue {
              0% {
                color: $color-white;
              }

              50% {
                color: $color-blue;
              }

              100% {
                color: $color-white;
              }
            }

            &-title {
              font-size: 2rem;
            }

            &-desc {
              margin-top: 0.5rem;
              font-size: 1.4rem;
              padding-right: 3rem;
            }
          }
        }
      `}</style>
    </>
  );
};

export default About;
