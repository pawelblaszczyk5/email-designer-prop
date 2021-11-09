import { JSX } from 'solid-js';
import { render } from 'solid-js/web';

import './index.css';
import App from './App';

render(() => <App/>, document.getElementById('root') as HTMLElement);

const renderToString = (fn: () => JSX.Element): string => {
  const div = document.createElement('div');

  render(fn, div);
  return div.innerHTML;
};

const benchmark = () => {
  const average = (arr: Array<number>) => arr.reduce( ( p, c ) => p + c, 0 ) / arr.length;
  const times: Array<number> = [];

  const test = () => {
    const x = performance.now();

    renderToString(() => <App/>);
    times.push(performance.now() - x);
  }

  for (let i = 0; i < 10000; i++) {
    test();
  }

  console.log(average(times));
}
// benchmark();
