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
	let open = false,
		view_open = false;
	const toggle = () => (open = !open);
	const view_toggle = () => (view_open = !view_open);
	function handle_edit() {
		if (
			!document.getElementById('auth_start_date').value ||
			!document.getElementById('auth_end_date').value
		) {
			alert('必須輸入日期');
		} else if (authcode.auth_end_date >= authcode.auth_start_date) {
			edit_authcode(
				authcode.id,
				authcode.created_at,
				authcode.product_name,
				authcode.system_num,
				authcode.auth_num,
				authcode.company_name,
				authcode.auth_start_date,
				authcode.auth_end_date,
				authcode.system_name,
				authcode.case_name,
				authcode.remarks
			);

			toggle();
		} else {
			alert('開始日期不能比結束日期晚');
		}
	}
</script>

<td class="text-nowrap">{authcode.product_name}</td>
<td class="text-nowrap">{authcode.system_name}</td>
<td class="text-nowrap">{authcode.case_name}</td>
<td class="text-nowrap">{`${!authcode.auth_start_date ? '' : authcode.auth_start_date}`}</td>
<td class="text-nowrap">{`${!authcode.auth_end_date ? '' : authcode.auth_end_date}`}</td>
<td class="text-nowrap">{authcode.company_name}</td>
<td class="text-nowrap">{`${!authcode.remarks ? '' : authcode.remarks}`}</td>
<td>
	<Button color="dark" on:click={() => view_toggle()}>
		<Icon name="list" />
	</Button>
	<Modal isOpen={view_open} toggle={view_toggle}>
		<ModalHeader toggle={view_toggle}>授權碼資訊</ModalHeader>
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
						disabled
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
						disabled
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
						disabled
					/>
				</FormGroup>
				<FormGroup>
					<Label for="system_num">系統編號</Label>
					<Input
						type="textarea"
						name="system_num"
						id="system_num"
						placeholder=""
						bind:value={authcode.system_num}
						disabled
					/>
				</FormGroup>
				<FormGroup>
					<Label for="company_name">公司名字</Label>
					<Input
						type="text"
						name="company_name"
						id="company_name"
						placeholder=""
						bind:value={authcode.company_name}
						disabled
					/>
				</FormGroup>
				<FormGroup>
					<Label for="auth_num">授權碼</Label>
					<Input
						type="textarea"
						name="auth_num"
						id="auth_num"
						placeholder=""
						bind:value={authcode.auth_num}
						disabled
					/>
				</FormGroup>
				<FormGroup>
					<Label for="auth_start_date">授權開始日期</Label>
					<Input
						type="date"
						name="auth_start_date"
						id="auth_start_date"
						placeholder=""
						bind:value={authcode.auth_start_date}
						disabled
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
						disabled
					/>
				</FormGroup>	
				<FormGroup>
					<Label for="system_name">備注</Label>
					<Input
						type="textarea"
						name="case_name"
						id="case_name"
						placeholder=""
						bind:value={authcode.remarks}
						disabled
					/>
				</FormGroup>
			</Form>
		</ModalBody>
	</Modal>
</td>
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
					<Label for="system_name">案件名字</Label>
					<Input
						type="text"
						name="case_name"
						id="case_name"
						placeholder=""
						bind:value={authcode.case_name}
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
					<Label for="system_num">系統編號</Label>
					<Input
						type="textarea"
						name="system_num"
						id="system_num"
						placeholder=""
						bind:value={authcode.system_num}
					/>
				</FormGroup>
				<FormGroup>
					<Label for="company_name">公司名字</Label>
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
					<Input
						type="textarea"
						name="auth_num"
						id="auth_num"
						placeholder=""
						bind:value={authcode.auth_num}
					/>
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
					<Label for="system_name">備注</Label>
					<Input
						type="textarea"
						name="case_name"
						id="case_name"
						placeholder=""
						bind:value={authcode.remarks}
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
