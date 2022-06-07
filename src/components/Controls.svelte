<script>
	import {
		Button,
		Modal,
		ModalBody,
		ModalFooter,
		ModalHeader,
		Form,
		FormGroup,
		Input,
		Label,
		InputGroup
	} from 'sveltestrap/src';
	import { add_authcode } from '../stores/authcode_store.js';
	import {update_searchterm} from "../stores/search_store.js";
	let open = false;
	let search_term_local = '';
	let product_name = '',
		system_num = '',
		auth_num = '',
		company_name = '',
		auth_start_date = '',
		auth_end_date = '',
		system_name = '',
		case_name = '',
		remarks = '';
	const toggle = () => (open = !open);

	function handle_submit() {
		if (!auth_start_date || !auth_end_date){
			alert("必須輸入日期");
		} else if (auth_end_date >= auth_start_date) {
			add_authcode(
				product_name,
				system_num,
				auth_num,
				company_name,
				auth_start_date,
				auth_end_date,
				system_name,
				case_name, 
				remarks
			);
			product_name = '';
			system_num = '';
			auth_num = '';
			company_name = '';
			auth_start_date = '';
			auth_end_date = '';
			system_name = '';
			case_name = '';
			remarks = '';
			toggle();
		} else {
			alert('開始日期不能比結束日期晚');
		}
	}
</script>

<div>
	<div id="authcode_controls">
		<Button color="primary" id="add_authcode_button" on:click={toggle}>新增</Button>
		<InputGroup id="searchbar_inputgroup">
			<Input type="search" name="search" id="searchbar" placeholder="搜尋" bind:value={search_term_local} />
			<Button color="primary" on:click={() => update_searchterm(search_term_local)}>搜尋</Button>
		</InputGroup>
	</div>
	<Modal isOpen={open} {toggle}>
		<ModalHeader {toggle}>新增授權碼</ModalHeader>
		<ModalBody>
			<Form>
				<FormGroup>
					<Label for="product_name">產品名字</Label>
					<Input
						type="text"
						name="product_name"
						id="product_name"
						placeholder=""
						bind:value={product_name}
					/>
				</FormGroup>
				<FormGroup>
					<Label for="system_num">系統編號</Label>
					<Input
						type="text"
						name="system_num"
						id="system_num"
						placeholder=""
						bind:value={system_num}
					/>
				</FormGroup>
				<FormGroup>
					<Label for="company_name">公司</Label>
					<Input
						type="text"
						name="company_name"
						id="company_name"
						placeholder=""
						bind:value={company_name}
					/>
				</FormGroup>
				<FormGroup>
					<Label for="auth_num">授權碼</Label>
					<Input type="text" 
							name="auth_num" id="auth_num" placeholder="" bind:value={auth_num} />
				</FormGroup>
				<FormGroup>
					<Label for="auth_start_date">授權開始日期</Label>
					<Input
						type="date"
						name="auth_start_date"
						id="auth_start_date"
						placeholder=""
						bind:value={auth_start_date}
					/>
				</FormGroup>
				<FormGroup>
					<Label for="auth_end_date">授權結束日期</Label>
					<Input
						type="date"
						name="auth_end_date"
						id="auth_end_date"
						placeholder=""
						bind:value={auth_end_date}
					/>
				</FormGroup>
				<FormGroup>
					<Label for="system_name">系統名字</Label>
					<Input
						type="text"
						name="system_name"
						id="system_name"
						placeholder=""
						bind:value={system_name}
					/>
				</FormGroup>
				<FormGroup>
					<Label for="system_name">案件名字</Label>
					<Input
						type="text"
						name="case_name"
						id="case_name"
						placeholder=""
						bind:value={case_name}
					/>
				</FormGroup>
				<FormGroup>
					<Label for="system_name">備注</Label>
					<Input
						type="text"
						name="case_name"
						id="case_name"
						placeholder=""
						bind:value={remarks}
					/>
				</FormGroup>
			</Form>
		</ModalBody>
		<ModalFooter>
			<Button color="primary" on:click={handle_submit}>確認</Button>
			<Button color="secondary" on:click={toggle}>取消</Button>
		</ModalFooter>
	</Modal>
</div>
