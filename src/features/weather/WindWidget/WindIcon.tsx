interface WindIconProps {
  beaufort: number;
}

function WindIcon({ beaufort }: WindIconProps) {
  return (
    <img
      className="w-28"
      src={`/wind/wind-beaufort-${beaufort}.svg`}
      alt="UV index"
    />
  );
}

export default WindIcon;
