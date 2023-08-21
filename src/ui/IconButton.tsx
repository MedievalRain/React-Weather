import { ReactNode } from "react";
import { useTranslation } from "react-i18next";

interface IconButtonProps {
  children: ReactNode;
  onClick: () => void;
  disabled?: boolean;
  ariaLabelKey: string;
}

function IconButton({
  children,
  onClick,
  disabled,
  ariaLabelKey,
}: IconButtonProps) {
  const { t } = useTranslation();
  return (
    <button
      aria-label={t(ariaLabelKey)}
      disabled={disabled}
      onClick={onClick}
      className="flex h-8 w-8 items-center justify-center rounded-md bg-gray-700 fill-white p-1 shadow-md transition-shadow duration-200 hover:shadow-lg disabled:cursor-not-allowed disabled:bg-gray-500"
    >
      {children}
    </button>
  );
}

export default IconButton;
