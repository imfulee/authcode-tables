<script>
	import { Table, Button, Icon, FormGroup, Input } from 'sveltestrap/src';
</script>

<Table responsive hover bordered>
	<thead>
		<td>帳號</td>
		<td>密碼</td>
		<td>編寫權限</td>
		<td>編輯</td>
        <td>刪除</td>
	</thead>
	<tbody>
		<tr>
			<td>admin</td>
			<td>****</td>
			<td>
				<FormGroup>
					<Input id="c1" type="switch" />
				</FormGroup>
			</td>
            <td>
                <Button color="primary">
                    <Icon name="pencil-square" />
                </Button>
            </td>
            <td>
                <Button color="danger">
                    <Icon name="trash" />
                </Button>
            </td>
		</tr>
	</tbody>
</Table>
