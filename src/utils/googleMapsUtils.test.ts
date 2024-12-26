import {
  createGoogleMapsUrl,
  formatLocationParam,
  isMobileDevice,
} from './googleMapsUtils';

describe('Google Maps Utilities', () => {
  test('formats location parameter correctly for string', () => {
    const result = formatLocationParam('San Francisco', 'destination');

    expect(result).toBe('destination=San%20Francisco');
  });

  test('formats location parameter correctly for coordinates', () => {
    const result = formatLocationParam(
      { lat: 37.7749, lng: -122.4194 },
      'origin'
    );

    expect(result).toBe('origin=37.7749,-122.4194');
  });

  test('creates mobile Google Maps URL', () => {
    const url = createGoogleMapsUrl('destination=37.7749,-122.4194', true, '');

    expect(url).toBe('google.navigation:destination=37.7749,-122.4194');
  });

  test('creates desktop Google Maps URL', () => {
    const url = createGoogleMapsUrl(
      'destination=37.7749,-122.4194',
      false,
      'origin=0,0'
    );

    expect(url).toContain('travelmode=driving');
    expect(url).toContain('destination=37.7749,-122.4194');
    expect(url).toContain('origin=0,0');
  });

  test('detects mobile device correctly', () => {
    Object.defineProperty(window.navigator, 'userAgent', {
      value: 'iPhone',
      writable: true,
    });
    Object.defineProperty(window, 'innerWidth', {
      value: 425,
      writable: true,
    });
    Object.defineProperty(window, 'innerHeight', {
      value: 600,
      writable: true,
    });
    const isMobile = isMobileDevice();

    expect(isMobile).toBe(true);
  });
});
