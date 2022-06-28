<script>
	import {
		Table,
		Button,
		Modal,
		ModalHeader,
		ModalFooter,
		ModalBody,
		Form,
		FormGroup,
		Label,
		Input
	} from 'sveltestrap/src';
	import { user, users_list, load_users, add_user } from '../stores/user_store.js';
	import PermissionElem from './PermissionElem.svelte';
	$: users_list;
	load_users();
	let isopen_new_user_modal = false;
	const toggle_new_user_modal = () => {
		isopen_new_user_modal = !isopen_new_user_modal;
	};
	let new_user_param = {
		username: '',
		password: '',
		permission_user_add: false,
		permission_user_edit: false,
		permission_user_delete: false,
		permission_authcode_add: false,
		permission_authcode_edit: false,
		permission_authcode_delete: false
	};
	function handle_add_user() {
		add_user(new_user_param);
		new_user_param = {
			username: '',
			password: '',
			permission_user_add: false,
			permission_user_edit: false,
			permission_user_delete: false,
			permission_authcode_add: false,
			permission_authcode_edit: false,
			permission_authcode_delete: false
		};
		toggle_new_user_modal();
	}
	function handle_cancel_add() {
		new_user_param = {
			username: '',
			password: '',
			permission_user_add: false,
			permission_user_edit: false,
			permission_user_delete: false,
			permission_authcode_add: false,
			permission_authcode_edit: false,
			permission_authcode_delete: false
		};
		toggle_new_user_modal();
	}
</script>

{#if $user.permission_user_add}
	<Button
		id="new_user_btn"
		color="primary"
		style="margin-top: 1rem"
		on:click={toggle_new_user_modal}>新增</Button
	>
	<Modal isOpen={isopen_new_user_modal} toggle={toggle_new_user_modal}>
		<ModalHeader>新增使用者資訊</ModalHeader>
		<ModalBody>
			<Form>
				<FormGroup>
					<Label for="username_input">使用者名字</Label>
					<Input
						type="text"
						name="username"
						id="username_input"
						placeholder=""
						bind:value={new_user_param.username}
					/>
				</FormGroup>
				<FormGroup>
					<Label for="password_input">使用者密碼</Label>
					<Input
						type="text"
						name="password"
						id="password_input"
						placeholder=""
						bind:value={new_user_param.password}
					/>
				</FormGroup>
				<p>使用者權限</p>
				<FormGroup class="permission_groups">
					<Input
						id="permission_user_add"
						type="switch"
						label="新增"
						bind:checked={new_user_param.permission_user_add}
					/>
					<Input
						id="permission_user_edit"
						type="switch"
						label="編輯"
						bind:checked={new_user_param.permission_user_edit}
					/>
					<Input
						id="permission_user_delete"
						type="switch"
						label="刪除"
						bind:checked={new_user_param.permission_user_delete}
					/>
				</FormGroup>
				<p>授權碼權限</p>
				<FormGroup class="permission_groups">
					<Input
						id="permission_authcode_add"
						type="switch"
						label="新增"
						bind:checked={new_user_param.permission_authcode_add}
					/>
					<Input
						id="permission_authcode_edit"
						type="switch"
						label="編輯"
						bind:checked={new_user_param.permission_authcode_edit}
					/>
					<Input
						id="permission_authcode_delete"
						type="switch"
						label="刪除"
						bind:checked={new_user_param.permission_authcode_delete}
					/>
				</FormGroup>
			</Form>
		</ModalBody>
		<ModalFooter>
			<Button color="primary" on:click={handle_add_user}>新增</Button>
			<Button color="secondary" on:click={handle_cancel_add}>取消</Button>
		</ModalFooter>
	</Modal>
{/if}

<Table responsive hover bordered id="permission_table">
	<thead>
		<tr>
			<td colspan="1" />
			<td colspan="3" style="text-align: center">授權碼</td>
			<td colspan="3" style="text-align: center">使用者</td>
			{#if $user.permission_user_edit && $user.permission_user_delete}
				<td colspan="2" />
			{:else if $user.permission_user_edit || $user.permission_user_delete}
				<td colspan="1" />
			{/if}
		</tr>
		<tr>
			<td class="text-nowrap">帳號</td>
			<td class="text-nowrap">新增</td>
			<td class="text-nowrap">修改</td>
			<td class="text-nowrap">刪除</td>
			<td class="text-nowrap">新增</td>
			<td class="text-nowrap">修改</td>
			<td class="text-nowrap">刪除</td>
			{#if $user.permission_user_edit}
				<td class="text-nowrap">編輯</td>
			{/if}
			{#if $user.permission_user_delete}
				<td class="text-nowrap">刪除</td>
			{/if}
		</tr>
	</thead>
	<tbody>
		{#each $users_list as user_info (user_info.id)}
			<PermissionElem {...user_info} />
		{/each}
	</tbody>
</Table>
