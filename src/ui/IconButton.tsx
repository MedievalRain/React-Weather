import { ReactNode } from "react";

interface IconButtonProps {
  children: ReactNode;
  onClick: () => void;
  disabled?: boolean;
}

function IconButton({ children, onClick, disabled }: IconButtonProps) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className="flex h-8 w-8 items-center justify-center rounded-md bg-gray-700 fill-white p-1 shadow-md transition-shadow duration-200 hover:shadow-lg disabled:cursor-not-allowed disabled:bg-gray-500"
    >
      {children}
    </button>
  );
}

export default IconButton;
