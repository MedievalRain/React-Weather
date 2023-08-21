interface UvIconProps {
  uvIndex: number;
}

function UvIcon({ uvIndex }: UvIconProps) {
  return (
    <img
      className="h-28 w-28"
      src={`/uv-index/uv-index-${uvIndex}.svg`}
      alt="UV index"
    />
  );
}

export default UvIcon;
