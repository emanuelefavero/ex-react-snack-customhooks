# EX - React Snack Custom Hooks

<img src="public/favicon.svg" alt="React Context API icon" width="48" />

Esercizio di React su custom hooks, dal mio corso web dev (specializzazione Frontend).

## Sviluppo locale

Per avviare l'applicazione in locale, clonare il repository ed eseguire i seguenti comandi:

```bash
npm install
npm run dev
```

## Consegna

Crea tre custom hook e usali in `App` per mostrarne il funzionamento.

### Snack 1 — `useSwitch()`

Crea un hook per alternare un valore booleano, inizialmente `false`. Restituisci il valore attuale e una funzione `toggle()` che lo inverta a ogni chiamata.

Mostra `ON` o `OFF` in base al valore e aggiungi un pulsante «Cambia Stato» che chiami `toggle()`.

Esempio di utilizzo:

```jsx
const [isOn, toggle] = useSwitch();

return (
  <div>
    <p>{isOn ? 'ON' : 'OFF'}</p>
    <button onClick={toggle}>Cambia Stato</button>
  </div>
);
```

### Snack 2 — `useDate()`

Crea un hook che restituisca la data e l'ora correnti come oggetto `Date`. Usa `useEffect()` per aggiornare il valore ogni secondo e mostralo in pagina con `.toLocaleString()`.

Esempio di utilizzo:

```jsx
const currentDate = useDate();

return (
  <div>
    <h1>Data e ora attuali:</h1>
    <p>{currentDate.toLocaleString()}</p>
  </div>
);
```

### Snack 3 — `useCustomPointer()`

Crea un hook che sostituisca il cursore del mouse con un puntatore personalizzato. Accetta una stringa, per esempio l'emoji 🔥, oppure un elemento JSX, come un'icona o un'animazione.

Restituisci il puntatore personalizzato, mostralo in `App` e fallo seguire ai movimenti del mouse.

Esempio di utilizzo:

```jsx
const customPointer = useCustomPointer('🔥');

return (
  <div>
    <h1>Sposta il mouse per vedere il cursore personalizzato!</h1>
    {customPointer}
  </div>
);
```

### Bonus — `useKeyPress()`

Crea un hook che accetti il nome di un tasto, per esempio `Enter` o `Escape`. Usa gli eventi `keydown` e `keyup` per restituire `true` mentre il tasto è premuto e `false` quando viene rilasciato.

Prova l'hook con `Enter` e mostra un messaggio che cambi quando premi o rilasci il tasto.

Esempio di utilizzo:

```jsx
const isEnterPressed = useKeyPress('Enter');

return (
  <div>
    <h1>Tieni premuto "Enter" per testare il custom hook</h1>
    <p>{isEnterPressed ? 'Enter premuto! ✅' : 'Aspettando input... ⌨️'}</p>
  </div>
);
```

## License

- [MIT](LICENSE.md)
