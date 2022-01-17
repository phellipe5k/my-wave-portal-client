import { Meta, Story } from '@storybook/react';
import Form from '.';

export default {
  title: 'Form',
  component: Form,
  args: {
    title: 'Form'
  }
} as Meta;

export const Basic: Story = (args) => <Form {...args} />;
