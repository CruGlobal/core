import { useState } from 'react';
import {
  Typography,
  Container,
  makeStyles,
  Grid,
  Button,
} from '@material-ui/core';

const useStyles = makeStyles(() => ({
  container: {
    backgroundColor: '#ededed',
    height: '70vh',
    width: '80vh',
    textAlign: 'center',
  },
  title: {
    backgroundColor: 'Black',
    color: 'White',
  },
}));

type Choices = {
  ref?: string;
  id?: string;
  label: string;
};

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
    choices: Choices[];
  };
};

export const MultipleChoice = ({ title, properties }: MultipleChoiceProps) => {
  const classes = useStyles();
  const [option, setOption] = useState<string | null>(null);

  const handleButtonSelect = (selected: string) => {
    setOption(selected);
    console.log('option: ', selected);
  };

  return (
    <Container maxWidth="sm" className={classes.container}>
      <Typography variant="h3" className={classes.title}>
        {title}
      </Typography>
      <Typography variant="h4">Choices: </Typography>
      <Grid container spacing={2} direction="column">
        {properties.choices.map((choice, i) => {
          return (
            <Grid item key={i}>
              <Button
                variant="contained"
                disabled={!!option}
                className="choices"
                onClick={() => handleButtonSelect(choice.label)}
              >
                {choice.label}
              </Button>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};
