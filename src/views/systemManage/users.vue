<template>
	<div>
		<custom-form :formOptions="formOptions">
			<template slot="button-slot">
				<el-button type="primary">新增用户</el-button>
			</template>
		</custom-form>
		<custom-table :tableOptions="tableOptions">
			<template slot="handle-column">
				<el-table-column>
					<template slot="header">
						<svg-icon icon-class="eye"></svg-icon>
					</template>
				</el-table-column>
			</template>
		</custom-table>
		<pagination :page="page"></pagination>
	</div>
</template>

<script>
import CustomForm from 'vue-simple-custom-form'
import CustomTable from 'vue-simple-custom-table'
import Pagination from 'vue-simple-custom-pagination'
export default {
  name: 'Users',
  components: {
    CustomForm,
    CustomTable,
    Pagination
  },
  data() {
    return {
      formOptions: {
        formName: 'usersForm',
        inline: true,
        showResetBtn: true,
        forms: [
          {
            label: '用户姓名',
            prop: 'userName'
          },
          {
            label: '所属商户',
            itemType: 'select',
            prop: 'tenant',
            options: [
              {
                label: '深大教工食堂',
                value: 1
              }
            ]
          },
          {
            label: '手机号',
            prop: 'tel'
          },
          {
            label: '状态',
            itemType: 'select',
            prop: 'status',
            options: [
              {
                label: '状态',
                value: 0
              }
            ]
          }
        ]
      },
      tableOptions: {
        columns: [
          {
            label: '用户姓名',
            prop: 'userName'
          },
          {
            label: '手机号码',
            prop: 'tel'
          },
          {
            label: '所属商户',
            prop: 'tenant'
          },
          {
            label: '状态',
            prop: 'status'
          },
          {
            label: '最后登录时间',
            prop: 'lastLoginTime'
          }
        ],
        dataSource: null
      },
      page: {
        pageIndex: 1,
        pageSize: 20,
        totalPage: 343
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
