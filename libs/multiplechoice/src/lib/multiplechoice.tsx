import { Choices, ChoicesProps } from './button/button';
import { Typography, Container, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  container: {
    backgroundColor: '#ededed',
    height: '40vh',
    width: '50vh',
    textAlign: 'center',
  },
  title: {
    backgroundColor: 'Black',
    color: 'White',
  },
}));

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
  const classes = useStyles();
  // TODO: Once a user clicks on an option block out the rest of the choices

  return (
    <Container maxWidth="sm" className={classes.container}>
      <Typography variant="h3" className={classes.title}>
        {title}
      </Typography>
      <Typography variant="h4">Choices: </Typography>
      {properties.choices.map((choice, i) => {
        return <Choices label={choice.label} key={i} />;
      })}
    </Container>
  );
};
