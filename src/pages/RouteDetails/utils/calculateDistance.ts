export const calculateDistance = (
  lat1: number,
  lng1: number,
  lat2: number,
  lng2: number
): number => {
  const halfCircleDegrees = 180;
  const toRadians = (degree: number): number =>
    (degree * Math.PI) / halfCircleDegrees;

  const earthRadiusKm = 6371;
  const doublingFactor = 2;
  const dLat = toRadians(lat2 - lat1);
  const dLng = toRadians(lng2 - lng1);

  const a =
    Math.sin(dLat / doublingFactor) * Math.sin(dLat / doublingFactor) +
    Math.cos(toRadians(lat1)) *
      Math.cos(toRadians(lat2)) *
      Math.sin(dLng / doublingFactor) *
      Math.sin(dLng / doublingFactor);

  const c = doublingFactor * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return earthRadiusKm * c;
};
