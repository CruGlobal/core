import { useState, useEffect } from 'react';
import {
  Typography,
  Container,
  makeStyles,
  Grid,
  Button,
  ThemeProvider,
} from '@material-ui/core';
import { customTheme } from '../theme/theme';

const useStyles = makeStyles((theme) => ({
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
  textColor: {
    color: customTheme.palette.primary.main,
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

export const MultipleChoice = ({
  title,
  properties,
  language,
}: MultipleChoiceProps) => {
  const classes = useStyles();
  const [option, setOption] = useState<string | null>(null);
  const [rtl, setRTL] = useState<string>('');

  const handleButtonSelect = (selected: string) => {
    setOption(selected);
    console.log('option: ', selected);
  };

  useEffect(() => {
    if (language.ar === 'Arabic') {
      setRTL('rtl');
    }
  }, []);

  return (
    <ThemeProvider theme={customTheme}>
      <Container maxWidth="sm" className={classes.container} dir={rtl}>
        <Typography variant="h3" className={classes.title}>
          {title}
        </Typography>
        <Typography variant="h4" className={classes.textColor}>
          Choices:{' '}
        </Typography>
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
    </ThemeProvider>
  );
};
