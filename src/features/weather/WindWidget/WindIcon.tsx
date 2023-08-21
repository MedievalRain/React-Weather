interface WindIconProps {
  beaufort: number;
}

function WindIcon({ beaufort }: WindIconProps) {
  return (
    <img
      className="h-28 w-28"
      src={`/wind/wind-beaufort-${beaufort}.svg`}
      alt="UV index"
    />
  );
}

export default WindIcon;
