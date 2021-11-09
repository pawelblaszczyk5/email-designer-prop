import { Component, onMount } from 'solid-js';

export const OutlookOnly: Component = (props) => {
  let tempDiv: HTMLDivElement | undefined = undefined;

  onMount(() => {
    if (tempDiv) {
      tempDiv.outerHTML = `<!--[if mso | IE]>${tempDiv.innerHTML}<![endif]-->`;
    }
  });

  return <div ref={tempDiv}>{props.children}</div>;
};
