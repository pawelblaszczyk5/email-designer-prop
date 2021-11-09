import type { SvelteComponentDev } from 'svelte/internal';
import App from './App.svelte';

const app = new App({
  target: document.getElementById('app')
});

const renderToString = (component: typeof SvelteComponentDev): string => {
  const div = document.createElement('div');

  new component({
    target: div
  });

  return div.innerHTML;
};

const benchmark = () => {
  const average = arr => arr.reduce( ( p, c ) => p + c, 0 ) / arr.length;
  const times: Array<number> = [];

  const render = () => {
    const x = performance.now();

    renderToString(App);
    times.push(performance.now() - x);
  }

  for (let i = 0; i < 10000; i++) {
    render();
  }
  console.log(average(times));
};
// benchmark();
export default app;
