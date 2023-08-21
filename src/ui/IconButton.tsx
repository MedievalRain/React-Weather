import { ReactNode } from "react";

interface IconButtonProps {
  children: ReactNode;
  onClick: () => void;
}

function IconButton({ children, onClick }: IconButtonProps) {
  return (
    <button
      onClick={onClick}
      className="flex h-8 w-8 items-center justify-center rounded-md bg-gray-700 fill-white p-1 shadow-md transition-shadow duration-200 hover:shadow-lg"
    >
      {children}
    </button>
  );
}

export default IconButton;
