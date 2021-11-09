<script lang="ts">
  import Button from './lib/Button.svelte';
  import EverywhereExceptOutlook from './lib/EverywhereExceptOutlook.svelte';
  import OnlyInOutlook from './lib/OnlyInOutlook.svelte';
</script>

<table>
  <tbody>
    <Button backgroundColor="red" color="white" href="/test">
      <p>Wszędzie</p>
    </Button>
    <OnlyInOutlook>
      <Button backgroundColor="red" color="white" href="/test">
        <p>Outlook</p>
      </Button>
    </OnlyInOutlook>
    <EverywhereExceptOutlook>
      <Button backgroundColor="red" color="white" href="/test">
        <p>Nie outlook</p>
      </Button>
    </EverywhereExceptOutlook>
  </tbody>
</table>
