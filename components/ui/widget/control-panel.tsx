import * as React from "react";
import Box from "../box";

function ControlPanel({ lat, long, zoom }: any) {
  return (
    <div className="absolute bottom-0 right-0 z-10 flex justify-evenly gap-4 rounded-tl-md bg-white px-6 py-[6px] text-xs text-neutral-500 dark:bg-midnight">
      <h4>Lat:{lat}</h4> | <h4>Long:{long}</h4> | <h4>Zoom:{zoom}</h4>
    </div>
  );
}

export default React.memo(ControlPanel);
