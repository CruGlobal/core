import styles from './app.module.css';
import { MultipleChoice } from './multiplechoice';
import data from '../data/data';

export function App() {
  return (
    <div className={styles.app}>
      <main>
        <MultipleChoice title={data.title} properties={data.properties} />
      </main>
    </div>
  );
}

export default App;
