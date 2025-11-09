import React from "react";
import ScrollReveal from "../components/animations/ScrollReveal";
import ScrollVelocity from "../components/animations/ScrollVelocity";

const RevealMoment = () => {
  return (
    <div className="max-w-7xl mx-auto px-4">
      <ScrollVelocity
        texts={["Take Your Action", "For The Future"]}
        velocity={15}
        className="custom-scroll-text"
      />
      <div className="h-screen flex items-center justify-center">
        <ScrollReveal
          baseOpacity={0}
          enableBlur={true}
          baseRotation={5}
          blurStrength={25}
        >
          Starting from the problem where many people do not understand how to
          properly sort waste, many people throw waste carelessly, which has a
          lot of impact on the environment if this is not followed up, that's
          why EcoMind exists to educate, your actions today will have an impact
          in the future.
        </ScrollReveal>
      </div>
    </div>
  );
};

export default RevealMoment;
