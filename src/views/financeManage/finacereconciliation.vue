<template>
	<div>
		<custom-form :formOptions="formOptions"></custom-form>
		<custom-table :tableOptions="tableOptions">
      <template slot="handle-column">
        <el-table-column label="操作">
          <template slot="header">
            <svg-icon icon-class="icon"></svg-icon>
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
  name: 'FinaceReconciliation',
  components: {
    CustomForm,
    CustomTable,
    Pagination
  },
  data() {
    return {
      formOptions: {
        formName: 'finaceForm',
        inline: true,
        showResetBtn: true,
        forms: [
          {
            label: '商户简称',
            prop: 'simple'
          },
          {
            label: '生成时间',
            itemType: 'date',
            prop: 'date'
          }
        ]
      },
      tableOptions: {
        columns: [
          {
            label: '商户简称',
            prop: 'simple'
          },
          {
            label: '生成时间',
            prop: 'date'
          }
        ],
        dataSource: null
      },
      page: {
        pageIndex: 1,
        pageSize: 20,
        totalPage: 232
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
