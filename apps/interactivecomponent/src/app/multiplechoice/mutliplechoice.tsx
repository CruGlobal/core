import './multiplechoice.css';
import { Choices, ChoicesProps } from './button/button';

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
    <div>
      <h3>{title}</h3>
      <h4>Choices: </h4>
      {properties.choices.map((choice, i) => {
        return <Choices label={choice.label} key={i} />;
      })}
    </div>
  );
};
