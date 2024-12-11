import { Box, CircularProgress } from '@mui/material';

import { loaderStyles } from './styles';

const Loader: React.FC<{ isLoading: boolean }> = ({
  isLoading,
}: {
  isLoading: boolean;
}) => {
  const loaderSize = 80;

  return isLoading ? (
    <Box sx={loaderStyles}>
      <CircularProgress size={loaderSize} />
    </Box>
  ) : null;
};

export default Loader;
