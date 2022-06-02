<script>
	import Lists from '../components/Lists.svelte';
    import Headers from '../components/Headers.svelte';
	import Controls from "../components/Controls.svelte";
	import { Styles } from 'sveltestrap/src';
</script>

<Styles />

<main>
	<Headers />
	<div class="content_body">
		<Controls />
		<Lists />
	</div>
</main>
