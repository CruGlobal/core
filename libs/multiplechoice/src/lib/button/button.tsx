import { useState } from 'react';
import { Button } from '@material-ui/core';

export type ChoicesProps = {
  ref?: string;
  id?: string;
  label: string;
  index?: number;
};

export const Choices = ({ label, index }: ChoicesProps) => {
  const [option, setOption] = useState<string | null>(null);

  const handleButtonSelect = (selected: string) => {
    setOption(selected);
    console.log('option: ', selected);
  };

  return (
    <Button
      variant="contained"
      disabled={!!option}
      className="choices"
      key={index}
      onClick={() => handleButtonSelect(label)}
    >
      {label}
    </Button>
  );
};
