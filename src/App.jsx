import { Button } from './components/ui/Button';
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

export const App = () => {
  return (
    <main className='container'>
      <h1>React Snack Custom Hooks</h1>

      <Snack1 />
    </main>
  );
};
