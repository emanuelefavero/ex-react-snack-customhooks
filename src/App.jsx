import { Button } from './components/ui/Button';
import { useDate } from './hooks/useDate';
import { useSwitch } from './hooks/useSwitch';
import './App.css';

const Snack1 = () => {
  const [isOn, toggle] = useSwitch();

  return (
    <div>
      <h2>Il valore è: {isOn ? 'ON' : 'OFF'}</h2>
      <Button onClick={toggle}>Cambia Stato</Button>
    </div>
  );
};

const Snack2 = () => {
  const currentDate = useDate();

  return (
    <div>
      <h1>Data e ora attuali:</h1>
      <p>{currentDate.toLocaleString()}</p>
    </div>
  );
};

export const App = () => {
  return (
    <main className='container'>
      <h1>React Snack Custom Hooks</h1>

      <Snack1 />
      <Snack2 />
    </main>
  );
};
