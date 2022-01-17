import { Meta, Story } from '@storybook/react';
import SocialBadge from '.';

export default {
  title: 'SocialBadge',
  component: SocialBadge,
  args: {
    title: 'SocialBadge'
  }
} as Meta;

export const Basic: Story = (args) => <SocialBadge {...args} />;
