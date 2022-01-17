import { Meta, Story } from '@storybook/react';
import Header from '.';

export default {
  title: 'Header',
  component: Header,
  args: {
    title: 'Header'
  }
} as Meta;

export const Basic: Story = (args) => <Header {...args} />;
