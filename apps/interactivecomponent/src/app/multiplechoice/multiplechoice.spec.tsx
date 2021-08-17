import { render } from '@testing-library/react';
import { MultipleChoice } from '.';

describe('Multiple Choice', () => {
  it('should render the title', () => {
    const { getByText } = render(
      <MultipleChoice
        title="How are you?"
        properties={{
          choices: [
            {
              ref: '16SDF6FJ28F8AJ17F7QJ19GJ',
              id: '17vd7v61083x0',
              label: 'Terrific!',
            },
            {
              ref: '18ASD987ASD987ASD98AS7DA',
              id: '1w039812hvals',
              label: 'Not so well...',
            },
          ],
        }}
      />
    );
    expect(getByText('How are you?')).toBeTruthy();
  });
  it('should render the choices', () => {
    const { getByText } = render(
      <MultipleChoice
        title="How are you?"
        properties={{
          choices: [
            {
              ref: '16SDF6FJ28F8AJ17F7QJ19GJ',
              id: '17vd7v61083x0',
              label: 'Terrific!',
            },
            {
              ref: '18ASD987ASD987ASD98AS7DA',
              id: '1w039812hvals',
              label: 'Not so well...',
            },
          ],
        }}
      />
    );
    expect(getByText('Terrific!')).toBeTruthy();
    expect(getByText('Not so well...')).toBeTruthy();
  });
});
