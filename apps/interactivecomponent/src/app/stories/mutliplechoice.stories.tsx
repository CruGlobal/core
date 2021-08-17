import { Story, Meta } from '@storybook/react';
import { Choices, ChoicesProps } from '../multiplechoice/button/button';

export default {
  component: Choices,
  title: 'ChoicesButton',
} as Meta;

const Template: Story<ChoicesProps> = (args) => <Choices {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Terrific!',
  index: 0,
};
