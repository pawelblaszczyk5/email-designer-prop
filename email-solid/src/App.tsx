import type { Component } from 'solid-js';

import { Button } from './lib/Button';
import { OutlookOnly } from './lib/OutlookOnly';
import { EverywhereExceptOutlook } from './lib/EverywhereExceptOutlook';

const App: Component = () => (
  <>
    <table>
      <tbody>
      <Button backgroundColor="red" color="white" href="/test">
        <p>Wszędzie</p>
      </Button>
      <EverywhereExceptOutlook>
        <Button backgroundColor="red" color="white" href="/test">
          <p>Nie outlook</p>
        </Button>
      </EverywhereExceptOutlook>
      <OutlookOnly>
        <Button backgroundColor="blue" color="white" href="/test">
          <p>Outlook</p>
        </Button>
      </OutlookOnly>
      </tbody>
    </table>
  </>
);

export default App;
