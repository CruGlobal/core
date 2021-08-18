import { MultipleChoice } from './lib/multiplechoice';
import data from './data/data';

export function App() {
  return (
    <div>
      <main>
        <MultipleChoice
          title={data.title}
          properties={data.properties}
          language={data.language}
        />
      </main>
    </div>
  );
}

export default App;
