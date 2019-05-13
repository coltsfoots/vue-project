<template>
	<div>
		<custom-form :formOptions="formOptions"></custom-form>
    <custom-table :tableOptions="tableOptions"></custom-table>
    <pagination :page="page" @currentChange="getLoginLog({})"></pagination>
	</div>
</template>

<script>
import CustomForm from 'vue-simple-custom-form'
import CustomTable from 'vue-simple-custom-table'
import Pagination from 'vue-simple-custom-pagination'
import { getLoginLogList } from '@/api/log/loginLog'
export default {
  name: 'LoginLog',
  components: {
    CustomForm,
    CustomTable,
    Pagination
  },
  data() {
    return {
      formOptions: {
        formName: 'loginLogForm',
        showResetBtn: true,
        inline: true,
        forms: [
          {
            label: '用户姓名',
            prop: 'userName'
          },
          {
            label: '操作类型',
            itemType: 'select',
            prop: 'handleType',
            options: [
              {
                label: '登录',
                value: 'login'
              }
            ]
          },
          {
            label: '操作时间',
            itemType: 'date',
            prop: 'handleTime'
          }
        ],
        handleSubmit: this.getLoginLog
      },
      tableOptions: {
        columns: [
          {
            label: '操作名称',
            prop: 'handleName'
          },
          {
            label: '用户姓名',
            prop: 'userName'
          },
          {
            label: '登录名',
            prop: 'loginName'
          },
          {
            label: '登录时间',
            prop: 'loginTime'
          },
          {
            label: '归属地',
            prop: 'location'
          },
          {
            label: '操作类型',
            prop: 'handleType'
          },
          {
            label: '操作终端',
            prop: 'handleSite'
          },
          {
            label: '操作结果',
            prop: 'handleResult'
          }
        ],
        dataSource: null
      },
      page: {
        pageIndex: 1,
        pageSize: 20,
        totalPage: 284
      }
    }
  },
  created() {
    this.getLoginLog({})
  },
  methods: {
    getLoginLog(formParams) {
      getLoginLogList(formParams, this.page).then(response => {
        this.tableOptions.dataSource = response.data
      })
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
