<script lang="ts">
	export let permission_page;
	export let onChange;
	import { Navbar, NavbarBrand, Button, Icon } from 'sveltestrap';
	import { logged_in } from '../stores/user_store.js';
	function toggle_page() {
		permission_page = !permission_page;
	}
	$: onChange(permission_page);
</script>

<Navbar color="dark" dark expand="zl">
	<NavbarBrand href="/">授權碼管理</NavbarBrand>
	{#if  $logged_in }
		{#if permission_page}
			<Button on:click={toggle_page}><Icon name="list" /></Button>
		{:else}
			<Button on:click={toggle_page}><Icon name="people-fill" /></Button>
		{/if}
	{/if}
</Navbar>
