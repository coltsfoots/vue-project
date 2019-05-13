<template>
	<div>
		<custom-form :formOptions="formOptions"></custom-form>
		<custom-table :tableOptions="tableOptions"></custom-table>
		<pagination :page="page"></pagination>
	</div>
</template>

<script>
import CustomForm from 'vue-simple-custom-form'
import CustomTable from 'vue-simple-custom-table'
import Pagination from 'vue-simple-custom-pagination'
export default {
  name: 'AccountBill',
  components: {
    CustomForm,
    CustomTable,
    Pagination
  },
  data() {
    return {
      formOptions: {
        formName: 'accountBillForm',
        inline: true,
        showResetBtn: true,
        forms: [
          {
            label: '商户简称',
            prop: 'simple'
          },
          {
            label: '打款状态',
            prop: 'status'
          },
          {
            label: '打款时间',
            itemType: 'date',
            prop: 'date'
          },
          {
            label: '打款单号',
            prop: 'order'
          }
        ]
      },
      tableOptions: {
        columns: [
          {
            label: '打款单号',
            prop: 'order'
          },
          {
            label: '打款时间',
            prop: 'date'
          },
          {
            label: '打款金额',
            prop: 'amount'
          },
          {
            label: '打款卡号',
            prop: 'cardNo'
          },
          {
            label: '打款开户名',
            prop: 'userName'
          },
          {
            label: '所属商户',
            prop: 'tenant'
          },
          {
            label: '打款状态',
            prop: 'status'
          },
          {
            label: '打款失败原因',
            prop: 'lose'
          }
        ],
        dataSource: null
      },
      page: {
        pageIndex: 1,
        pageSize: 20,
        totalPage: 213
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
