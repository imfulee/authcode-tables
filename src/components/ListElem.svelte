<script>
	import { edit_authcode } from '../stores/authcode_store.js';
	import {
		Button,
		Icon,
		Modal,
		ModalHeader,
		ModalFooter,
		ModalBody,
		Form,
		FormGroup,
		Label,
		Input
	} from 'sveltestrap/src';
	export let authcode;
	let open = false;
	const toggle = () => (open = !open);
	function handle_edit() {
		edit_authcode(
			authcode.id,
			authcode.created_at,
			authcode.product_name,
			authcode.system_num,
			authcode.auth_num,
			authcode.company_name,
			Date.parse(authcode.auth_start_date),
			Date.parse(authcode.auth_end_date),
			authcode.system_name,
			authcode.case_name
		);

		toggle();
	}
</script>

<td>{authcode.product_name}</td>
<td>{authcode.system_num}</td>
<td>{authcode.company_name}</td>
<td>{authcode.auth_num}</td>
<td>{`${!authcode.auth_start_date ? '' : authcode.auth_start_date}`}</td>
<td>{`${!authcode.auth_end_date ? '' : authcode.auth_end_date}`}</td>
<td>{authcode.system_name}</td>
<td>{authcode.case_name}</td>
<td>
	<Button color="primary" on:click={() => toggle()}>
		<Icon name="pencil-square" />
	</Button>
	<Modal isOpen={open} {toggle}>
		<ModalHeader {toggle}>修改授權碼</ModalHeader>
		<ModalBody>
			<Form>
				<FormGroup>
					<Label for="product_name">產品名字</Label>
					<Input
						type="text"
						name="product_name"
						id="product_name"
						placeholder=""
						bind:value={authcode.product_name}
					/>
				</FormGroup>
				<FormGroup>
					<Label for="system_num">系統編號</Label>
					<Input
						type="text"
						name="system_num"
						id="system_num"
						placeholder=""
						bind:value={authcode.system_num}
					/>
				</FormGroup>
				<FormGroup>
					<Label for="company_name">公司</Label>
					<Input
						type="text"
						name="company_name"
						id="company_name"
						placeholder=""
						bind:value={authcode.company_name}
					/>
				</FormGroup>
				<FormGroup>
					<Label for="auth_num">授權碼</Label>
					<Input type="text" name="auth_num" id="auth_num" placeholder="" bind:value={authcode.auth_num} />
				</FormGroup>
				<FormGroup>
					<Label for="auth_start_date">授權開始日期</Label>
					<Input
						type="date"
						name="auth_start_date"
						id="auth_start_date"
						placeholder=""
						bind:value={authcode.auth_start_date}
					/>
				</FormGroup>
				<FormGroup>
					<Label for="auth_end_date">授權結束日期</Label>
					<Input
						type="date"
						name="auth_end_date"
						id="auth_end_date"
						placeholder=""
						bind:value={authcode.auth_end_date}
					/>
				</FormGroup>
				<FormGroup>
					<Label for="system_name">系統名字</Label>
					<Input
						type="text"
						name="system_name"
						id="system_name"
						placeholder=""
						bind:value={authcode.system_name}
					/>
				</FormGroup>
				<FormGroup>
					<Label for="system_name">案件名字</Label>
					<Input
						type="text"
						name="case_name"
						id="case_name"
						placeholder=""
						bind:value={authcode.case_name}
					/>
				</FormGroup>
			</Form>
		</ModalBody>
		<ModalFooter>
			<Button color="primary" on:click={handle_edit}>確認</Button>
			<Button color="secondary" on:click={toggle}>取消</Button>
		</ModalFooter>
	</Modal>
</td>
