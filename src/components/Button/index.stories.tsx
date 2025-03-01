import 'normalize.css';
import { ThemeProvider } from '@mui/material';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Meta, StoryFn } from '@storybook/react';

import Button, { ButtonProps } from './index';

import theme from '@/theme';

export default {
  title: 'UI/Button',
  component: Button,
} as Meta<typeof Button>;

const Template: StoryFn<typeof Button> = (args) => (
  <ThemeProvider theme={theme}>
    <Button {...args} />
  </ThemeProvider>
);

export const Colored = Template.bind({});
Colored.args = {
  label: 'label',
  variant: 'colored',
} as ButtonProps;

export const Outlined = Template.bind({});
Outlined.args = {
  label: 'label',
  variant: 'outlined',
} as ButtonProps;

export const LinedGrey = Template.bind({});
LinedGrey.args = {
  label: 'label',
  variant: 'linedGrey',
} as ButtonProps;
