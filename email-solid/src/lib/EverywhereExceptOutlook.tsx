import { Component, onMount } from 'solid-js';

export const EverywhereExceptOutlook: Component = (props) => {
  let tempDiv: HTMLDivElement | undefined = undefined;

  onMount(() => {
    if (tempDiv) {
      tempDiv.outerHTML = `<!--[if !mso]><!-->${tempDiv.innerHTML}<!--<![endif]-->`;
    }
  });

  return <div ref={tempDiv}>{props.children}</div>;
};
