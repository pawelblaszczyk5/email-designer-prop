import { Component } from 'solid-js';

export const Preview: Component = () => {
  window.parent.postMessage('previewReady', '*');

  window.addEventListener('message', (e) => {
    if (e.data.type === 'update') {
      console.log(e.data.content);
    }
  });

  return null;
}
