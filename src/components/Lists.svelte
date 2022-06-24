<script>
	import { Table, Button, Icon } from 'sveltestrap/src';
	import { authcodes, delete_authcode } from '../stores/authcode_store.js';
	import { search_term } from '../stores/search_store.js';

	import ListElem from './ListElem.svelte';
	let searched_authcodes;
	$: searched_authcodes = $authcodes.filter((code) => code.product_name == $search_term || code.system_num == $search_term || code.auth_num == $search_term || code.company_name == $search_term || code.auth_start_date == $search_term || code.auth_end_date == $search_term || code.system_name == $search_term || code.case_name == $search_term || code.remarks == $search_term);
</script>

<Table responsive hover bordered id="authcode_table">
	<thead>
		<tr>
			<th class="text-nowrap">產品名字</th>
			<th class="text-nowrap">系統名字</th>
			<th class="text-nowrap">案件名字</th>
			<th class="text-nowrap">授權開始日期</th>
			<th class="text-nowrap">授權結束日期</th>
			<th class="text-nowrap">公司名字</th>
			<th class="text-nowrap">備注</th>
			<th class="text-nowrap">查看</th>
			<th class="text-nowrap">修改</th>
			<th class="text-nowrap">刪除</th>
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
