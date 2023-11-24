import { useState } from "react";

type ToggleReturnType = [boolean, () => void];

const useToggle = (initialValue: boolean): ToggleReturnType => {
  const [value, setValue] = useState<boolean>(initialValue);

  const toggle = () => {
    setValue((prevValue) => !prevValue);
  };

  return [value, toggle];
};

export default useToggle;
