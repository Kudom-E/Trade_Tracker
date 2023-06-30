import React from "react";

type Props = {};

const GraphsSection = (props: Props) => {
  return (
    <section>
      <div className="flex">
        {/* days graph */}
        <div className="bg-[rgba(var(--text-color-rgb),1)] w-[50%] h-[35rem]"></div>
        {/* week & month & year graph */}
        <div className="bg-[rgba(var(--secondary-color-rgb),1)] w-[50%] h-[35rem]"></div>
      </div>
    </section>
  );
};

export default GraphsSection;
