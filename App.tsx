import * as React from 'react';
import './style.css';
import Button from './src/components/Button/Button';
import Counter from './src/components/Counter/Counter';

export default function App() {
  return (
    <div>
      <Button />
      <Counter />
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}
