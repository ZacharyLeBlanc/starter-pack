import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Header } from './index';

export default {
  title: 'Components/Hello World',
  component: Header,
} as Meta;

const Template: Story = (args) => <Header {...args} />;

export const FirstStory = Template.bind({});
FirstStory.args = {};
