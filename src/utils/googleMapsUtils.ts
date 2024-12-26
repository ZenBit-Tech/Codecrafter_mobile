export const mobileMaxDimensions = { width: 425, height: 600 };

export const isMobileDevice = (): boolean => {
  return (
    /iPhone|iPad|iPod|Android/i.test(navigator.userAgent) &&
    (window.innerWidth <= mobileMaxDimensions.width ||
      window.innerHeight <= mobileMaxDimensions.height)
  );
};

export const formatLocationParam = (
  location: { lat: number; lng: number } | string,
  paramName: string
): string => {
  return typeof location === 'string'
    ? `${paramName}=${encodeURIComponent(location)}`
    : `${paramName}=${location.lat},${location.lng}`;
};

export const createGoogleMapsUrl = (
  destination: string,
  isMobile: boolean,
  origin: string = ''
): string => {
  if (isMobile) {
    return `google.navigation:${destination}${origin}`;
  }

  const baseUrl = 'https://www.google.com/maps/dir/?api=1';
  const travelMode = 'travelmode=driving';

  return `${baseUrl}&${destination}&${origin}&${travelMode}`;
};
