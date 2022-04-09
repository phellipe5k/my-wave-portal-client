import { Meta, Story } from '@storybook/react';
import Modal from '.';

export default {
  title: 'Modal',
  component: Modal,
  args: {
    title: 'Modal'
  }
} as Meta;

export const Basic: Story = (args) => <Modal {...args} />;
