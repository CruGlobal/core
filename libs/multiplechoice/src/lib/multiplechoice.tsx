import { useState } from 'react';
import {
  Typography,
  Box,
  Card,
  CardContent,
  makeStyles,
  Grid,
  Button,
  ThemeProvider,
} from '@material-ui/core';
import { customTheme } from '../theme/theme';

const useStyles = makeStyles((theme) => ({
  container: {
    maxWidth: 350,
  },
  title: {
    backgroundColor: '#8D8D8D',
    color: 'White',
    minHeight: 50,
  },
  choices: {
    justifyContent: 'flex-start',
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
  language: {
    ar?: string;
    he?: string;
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
    <ThemeProvider theme={customTheme}>
      <Card className={classes.container}>
        <Typography variant="h6" className={classes.title} align="center">
          {title}
        </Typography>
        <CardContent>
          <Grid container spacing={2} direction="column">
            {properties.choices.map((choice, i) => {
              return (
                <Grid item key={i}>
                  <Button
                    variant="outlined"
                    disabled={!!option}
                    fullWidth={true}
                    className={classes.choices}
                    onClick={() => handleButtonSelect(choice.label)}
                  >
                    {choice.label}
                  </Button>
                </Grid>
              );
            })}
          </Grid>
        </CardContent>
      </Card>
    </ThemeProvider>
  );
};
