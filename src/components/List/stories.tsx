import { Meta, Story } from '@storybook/react';
import List from '.';

export default {
  title: 'List',
  component: List,
  args: {
    title: 'List'
  }
} as Meta;

export const Basic: Story = (args) => <List {...args} />;
