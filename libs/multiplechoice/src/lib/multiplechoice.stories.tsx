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
  title: 'Terrific',
  properties: {
    choices: [
      {
        label: 'Terrific!',
      },
      {
        label: 'Not so well...',
      },
      {
        label: "I'm a bit sad",
      },
    ],
  },
};

export const Secondary = Template.bind({});
Secondary.args = {
  title: 'What did you eat for lunch?',
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
