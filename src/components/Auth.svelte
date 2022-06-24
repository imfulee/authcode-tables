<script>
	import { Button, Input, Form, FormGroup, Icon } from 'sveltestrap/src';
	import { add_user, load_users, logout_user } from '../stores/user_store.js';
	let username = '',
		password = '';
	let logged_in = false;
	let user_prof;

	function handle_register() {
		if (username && password) {
			add_user(username, password);
			username = '';
			password = '';
		} else {
			alert('沒有完整輸入注冊的帳號密碼');
		}
	}

	async function handle_login() {
		if (username && password) {
			user_prof = await load_users(username, password);
			if (user_prof) {
				username = user_prof['username'];
				password = '';
				logged_in = true;
			} else {
				alert('帳號或者密碼輸入錯誤');
			}
		} else {
			alert('沒有完整輸入登錄的帳號密碼');
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
			<Button color="light" on:click={handle_register}>注冊</Button>
		</div>
	</div>
{:else}
	<div id="logged_in_bar">
		<Button color="light">管理帳號</Button>
		<div id="user_ctrl">
			<div id="username_display">
				<Icon name="people-fill" />
				<span>{username}</span>
			</div>
			<Button color="danger" on:click={handle_logout}>登出</Button>
		</div>
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
	#user_ctrl {
		display: flex;
		align-items: center;
		justify-content: end;
		gap: 5px;
	}
</style>
