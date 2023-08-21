interface MoonIconProps {
  phase: string;
}

function MoonIcon({ phase }: MoonIconProps) {
  return (
    <img
      className="h-28 w-28"
      src={`/moon/moon-${phase}.svg`}
      alt="Moon phase"
    />
  );
}

export default MoonIcon;
