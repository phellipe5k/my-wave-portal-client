import { Meta, Story } from '@storybook/react';
import Auth from '.';

export default {
  title: 'Auth',
  component: Auth,
  args: {
    title: 'Auth'
  }
} as Meta;

export const Basic: Story = (args) => <Auth {...args} />;
