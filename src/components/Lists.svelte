<script>
	import { Table, Button, Icon } from 'sveltestrap';
	import { authcodes, delete_authcode } from '../stores/authcode_store.js';
	import { search_term, searching } from '../stores/search_store.js';
	import ListElem from './ListElem.svelte';
	let searched_authcodes;
	$: searched_authcodes = $authcodes.filter((code) => code.product_name == $search_term || code.system_num == $search_term || code.auth_num == $search_term || code.company_name == $search_term || code.auth_start_date == $search_term || code.auth_end_date == $search_term || code.system_num == $search_term || code.case_name == $search_term );
</script>

<Table responsive hover bordered id="authcode_table">
	<thead>
		<tr>
			<th>產品名字</th>
			<th>系統編號</th>
			<th>公司</th>
			<th>授權碼</th>
			<th>授權開始日期</th>
			<th>授權結束日期</th>
			<th>系統名字</th>
			<th>案件名字</th>
			<th>修改</th>
			<th>刪除</th>
		</tr>
	</thead>
	<tbody>
		{#if !$search_term}
			{#each $authcodes as authcode (authcode.id)}
				<tr>
					<ListElem {authcode} />
					<td>
						<Button color="danger" on:click={() => delete_authcode(authcode.id)}>
							<Icon name="trash" />
						</Button>
					</td>
				</tr>
			{/each}
		{:else}
			{#each searched_authcodes as authcode (authcode.id)}
				<tr>
					<ListElem {authcode} />
					<td>
						<Button color="danger" on:click={() => delete_authcode(authcode.id)}>
							<Icon name="trash" />
						</Button>
					</td>
				</tr>
			{/each}
		{/if}
	</tbody>
</Table>
