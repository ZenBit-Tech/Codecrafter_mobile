import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

interface CornerImageProps {
  position: 'topLeft' | 'bottomRight';
}

export const LogoContainer = styled(Box)({
  position: 'relative',
  width: '100%',
  maxWidth: '208px',
  height: '208px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const MainImage = styled('img')({
  width: '156px',
  height: '156px',
});

export const CornerImage = styled('img', {
  shouldForwardProp: (prop) => prop !== 'position',
})<CornerImageProps>(({ theme, position }) => ({
  position: 'absolute',
  width: '28px',
  height: '30px',
  padding: '10px',
  borderRadius: '50%',
  border: `1px solid ${theme.palette.primary.main}`,
  backgroundColor: theme.palette.background.default,
  ...(position === 'topLeft' && {
    top: '9px',
    left: '9px',
  }),
  ...(position === 'bottomRight' && {
    bottom: '9px',
    right: '9px',
  }),
}));
