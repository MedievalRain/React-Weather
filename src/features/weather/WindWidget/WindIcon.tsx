interface WindIconProps {
  windSpeed: number;
}

function WindIcon({ windSpeed }: WindIconProps) {
  return (
    <img
      className="w-28"
      src={`/uv-index/uv-index-${windSpeed}.svg`}
      alt="UV index"
    />
  );
}

export default WindIcon;
