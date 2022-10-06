import React from "react";

const Projects = () => {
  return (
    <>
      <div className="projects section-margin-top">
        <h1 className="section-title">My Projects</h1>
        <p className="section-desc">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae ad
          autem suscipit delectus voluptas sed excepturi soluta laboriosam
          officia! Veritatis!
        </p>

        <div className="projects__container">🙅‍♂️ SOON 🙅‍♂️</div>
      </div>

      <style jsx>{`
        @import "../../styles/variables.scss";

        .projects {
          &__container {
            margin-top: 2rem;

            text-align: center;
            font-size: 5rem;
            font-weight: 600;
            animation: blink-blue 3s ease infinite;
          }
        }

        @keyframes blink-blue {
          0%,
          100% {
            color: $color-white;
          }

          50% {
            color: $color-blue;
          }
        }
      `}</style>
    </>
  );
};

export default Projects;
