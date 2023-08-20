interface MoonIconProps {
  phase: string;
}

function MoonIcon({ phase }: MoonIconProps) {
  return (
    <img className="w-28" src={`/moon/moon-${phase}.svg`} alt="Moon phase" />
  );
}

export default MoonIcon;
