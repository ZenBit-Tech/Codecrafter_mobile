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
  destination: { lat: number; lng: number } | string,
  isMobile: boolean,
  origin?: string
): string => {
  if (isMobile) {
    if (typeof destination === 'string') {
      return `google.navigation:q=${destination}`;
    }
    const { lat, lng } = destination;

    return `google.navigation:q=${lat},${lng}`;
  }

  const baseUrl = 'https://www.google.com/maps/dir/?api=1';
  const travelMode = 'travelmode=driving';
  const originParam = origin ? `&${origin}` : '';

  return `${baseUrl}&${destination}${originParam}&${travelMode}`;
};
