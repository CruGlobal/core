import { Story, Meta } from '@storybook/react';
import { MultipleChoice, MultipleChoiceProps } from './multiplechoice';

export default {
  component: MultipleChoice,
  title: 'Multiplechoice',
} as Meta;

const Template: Story<MultipleChoiceProps> = (args) => (
  <MultipleChoice {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  title: 'How can we help you know more about jesus?',
  language: {
    ar: '',
  },
  properties: {
    choices: [
      {
        label: 'Chat privately',
      },
      {
        label: 'Get a bible',
      },
      {
        label: 'Watch more videos about jesus',
      },
      {
        label: 'Ask a question',
      },
    ],
  },
};

export const Secondary = Template.bind({});
Secondary.args = {
  title: 'What did you eat for lunch?',
  language: {
    ar: 'Arabic',
  },
  properties: {
    choices: [
      {
        label: 'Chicken',
      },
      {
        label: 'Burger',
      },
      {
        label: 'Pizza',
      },
    ],
  },
};
