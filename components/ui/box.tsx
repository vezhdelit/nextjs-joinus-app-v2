import { twMerge } from "tailwind-merge";

interface BoxProps {
  children: React.ReactNode;
  className?: string;
}

const Box: React.FC<BoxProps> = ({ children, className }) => {
  return (
    <div
      className={twMerge(
        `
        h-full 
        w-full 
        rounded-lg 
        bg-white
        dark:bg-midnight
        `,
        className
      )}
    >
      {children}
    </div>
  );
};

export default Box;
