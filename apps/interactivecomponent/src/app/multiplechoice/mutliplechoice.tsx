import './multiplechoice.css';
import { Choices, ChoicesProps } from './button/button';
import { Typography, Container } from '@material-ui/core';

export type MultipleChoiceProps = {
  id?: string;
  ref?: string;
  title: string;
  type?: string;
  validations?: {
    required: boolean;
  };
  properties: {
    randomize?: boolean;
    allow_multiple_selection?: boolean;
    allow_other_choice?: boolean;
    vertical_alignment?: boolean;
    choices: ChoicesProps[];
  };
};

export const MultipleChoice = ({ title, properties }: MultipleChoiceProps) => {
  // TODO: Once a user clicks on an option block out the rest of the choices

  return (
    <Container maxWidth="sm">
      <Typography variant="h1">{title}</Typography>
      <Typography variant="h2">Choices: </Typography>
      {properties.choices.map((choice, i) => {
        return <Choices label={choice.label} key={i} />;
      })}
    </Container>
  );
};
