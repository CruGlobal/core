import { render } from '@testing-library/react';
import { MultipleChoice } from './multipleChoice';

describe('Multiplechoice', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <MultipleChoice
        title="How are you?"
        properties={{
          choices: [
            {
              label: 'Terrific!',
            },
            {
              label: 'Not so well...',
            },
          ],
        }}
      />
    );
    expect(baseElement).toBeTruthy();
  });
});
