<script>
	import {
		Button,
		Icon,
		Form,
		FormGroup,
		Label,
		Input,
		Modal,
		ModalBody,
		ModalHeader,
		ModalFooter
	} from 'sveltestrap/src';
	import { user, update_user, delete_user } from '../stores/user_store';

	export let id;
	export let username;
	export let password;
	export let permission_user_add;
	export let permission_user_edit;
	export let permission_user_delete;
	export let permission_authcode_add;
	export let permission_authcode_edit;
	export let permission_authcode_delete;
	let local_param = {
		id: id,
		username: username,
		password: password,
		permission_user_add: permission_user_add,
		permission_user_edit: permission_user_edit,
		permission_user_delete: permission_user_delete,
		permission_authcode_add: permission_authcode_add,
		permission_authcode_edit: permission_authcode_edit,
		permission_authcode_delete: permission_authcode_delete
	};
	let open = false;
	const toggle = () => (open = !open);

	function handle_edit() {
		update_user(local_param);
		toggle();
	}

	function handle_cancel() {
		local_param = {
			id: id,
			username: username,
			password: password,
			permission_user_add: permission_user_add,
			permission_user_edit: permission_user_edit,
			permission_user_delete: permission_user_delete,
			permission_authcode_add: permission_authcode_add,
			permission_authcode_edit: permission_authcode_edit,
			permission_authcode_delete: permission_authcode_delete
		};
		toggle();
	}
</script>

<tr>
	<td>{username}</td>
	{#if $user.permission_user_edit}
		<td>
			<Button on:click={toggle} color="primary">
				<Icon name="pencil-square" />
			</Button>
			<Modal isOpen={open} {toggle}>
				<ModalHeader>修改使用者資訊</ModalHeader>
				<ModalBody>
					<Form>
						<FormGroup>
							<Label for="username_input">使用者名字</Label>
							<Input
								type="text"
								name="username"
								id="username_input"
								placeholder=""
								bind:value={local_param.username}
								disabled={!$user.permission_user_edit}
							/>
						</FormGroup>
						<FormGroup>
							<Label for="password_input">使用者密碼</Label>
							<Input
								type="text"
								name="password"
								id="password_input"
								placeholder=""
								bind:value={local_param.password}
								disabled={!$user.permission_user_edit}
							/>
						</FormGroup>
						<p>使用者權限</p>
						<FormGroup class="permission_groups">
							<Input
								id="permission_user_add"
								type="switch"
								label="新增"
								bind:checked={local_param.permission_user_add}
								disabled={!$user.permission_user_edit}
							/>
							<Input
								id="permission_user_edit"
								type="switch"
								label="編輯"
								bind:checked={local_param.permission_user_edit}
								disabled={!$user.permission_user_edit}
							/>
							<Input
								id="permission_user_delete"
								type="switch"
								label="刪除"
								bind:checked={local_param.permission_user_delete}
								disabled={!$user.permission_user_edit}
							/>
						</FormGroup>
						<p>授權碼權限</p>
						<FormGroup class="permission_groups">
							<Input
								id="permission_authcode_add"
								type="switch"
								label="新增"
								bind:checked={local_param.permission_authcode_add}
								disabled={!$user.permission_user_edit}
							/>
							<Input
								id="permission_authcode_edit"
								type="switch"
								label="編輯"
								bind:checked={local_param.permission_authcode_edit}
								disabled={!$user.permission_user_edit}
							/>
							<Input
								id="permission_authcode_delete"
								type="switch"
								label="刪除"
								bind:checked={local_param.permission_authcode_delete}
								disabled={!$user.permission_user_edit}
							/>
						</FormGroup>
					</Form>
				</ModalBody>
				<ModalFooter>
					<Button color="primary" on:click={handle_edit} disabled={!$user.permission_user_edit}
						>修改</Button
					>
					<Button color="secondary" on:click={handle_cancel}>取消</Button>
				</ModalFooter>
			</Modal>
		</td>
	{/if}
	{#if $user.permission_user_delete}
		<td>
			<Button color="danger" on:click={() => delete_user(id)}>
				<Icon name="trash" />
			</Button>
		</td>
	{/if}
</tr>
