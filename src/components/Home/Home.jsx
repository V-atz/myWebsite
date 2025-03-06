import React from "react";
import Social from "./Social";
import Data from "./Data";
import ScrollDown from "./ScrollDown";

function Home() {
  return (
    <div className="h-[82vh] lg:h-[69vh] mb-3">
      <div className="flex flex-col lg:flex-row items-center justify-center gap-x-24 mt-[2vh] lg:mt-[15vh]">
        <div>
          <Social />
        </div>
        <div>
          <Data />
        </div>
      </div>
      {/* <div>
        <ScrollDown />
      </div> */}
    </div>
  );
}

export default Home;
