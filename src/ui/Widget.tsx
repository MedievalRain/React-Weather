import { ReactNode } from "react";

interface WidgetProps {
  children?: ReactNode;
}

function Widget({ children }: WidgetProps) {
  return <div className="rounded-md bg-white shadow-md">{children}</div>;
}

export default Widget;
