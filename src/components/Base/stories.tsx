import { Meta, Story } from '@storybook/react';
import Base from '.';

export default {
  title: 'Base',
  component: Base,
  args: {
    title: 'Base'
  }
} as Meta;

export const Basic: Story = (args) => <Base {...args} />;
