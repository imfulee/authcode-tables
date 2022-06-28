<script>
	import { Button, Input, Form, FormGroup, Icon } from 'sveltestrap/src';
	import { user, login_user, logout_user } from '../stores/user_store.js';

	let username = '',
		password = '';
	let logged_in = false;
	let user_prof;

	$: user;
	async function handle_login() {
		user_prof = await login_user(username, password);
		if (user_prof) {
			password = '';
			logged_in = true;
		} else {
			alert('帳號或者密碼輸入錯誤');
		}
	}

	function handle_logout() {
		logged_in = false;
		username = '';
		logout_user();
	}
</script>

{#if !logged_in}
	<div id="auth_box">
		<Form id="login_boxes">
			<FormGroup floating label="帳號">
				<Input type="text" bind:value={username} />
			</FormGroup>
			<FormGroup floating label="密碼">
				<Input type="password" bind:value={password} />
			</FormGroup>
		</Form>
		<div>
			<Button color="primary" on:click={handle_login}>登入</Button>
		</div>
	</div>
{:else}
	<div id="logged_in_bar">
		<div id="username_display">
			<Icon name="people-fill" />
			<span>{username}</span>
		</div>
		<Button color="danger" on:click={handle_logout}>登出</Button>
	</div>
	<slot />
{/if}

<style type="scss">
	#auth_box {
		margin-top: 1rem;
	}
	#logged_in_bar {
		margin-top: 1rem;
		display: flex;
		justify-content: space-between;
	}
	#username_display {
		display: flex;
		align-items: center;
		gap: 5px;
	}
</style>
