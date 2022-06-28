<script>
	import Lists from '../components/Lists.svelte';
	import Headers from '../components/Headers.svelte';
	import Controls from '../components/Controls.svelte';
	import Auth from '../components/Auth.svelte';
	import Permission from '../components/Permission.svelte';
	import { Styles } from 'sveltestrap/src';

	let permission_page = false;
</script>

<Styles />

<main>
	<Headers bind:value={permission_page} onChange={(newValue) => (permission_page = newValue)} />
	<Auth>
		{#if permission_page}
			<Permission />
		{:else}
			<div class="content_body">
				<Controls />
				<Lists />
			</div>
		{/if}
	</Auth>
</main>
