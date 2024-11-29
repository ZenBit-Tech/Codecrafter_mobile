export const calculateRouteTime = (
  submissionDate: string,
  arrivalDate: string
): string => {
  const submission = new Date(submissionDate);
  const arrival = new Date(arrivalDate);

  const options: Intl.DateTimeFormatOptions = {
    hour: '2-digit',
    minute: '2-digit',
  };

  return `${submission.toLocaleTimeString(undefined, options)}-${arrival.toLocaleTimeString(
    undefined,
    options
  )}`;
};
