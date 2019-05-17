<template>
	<div>
		<custom-form
      :forms="formOptions.forms"
      :inline="true"
      :size="'small'"
      :handleSubmit="handleSubmit"
    ></custom-form>
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
import { getSimpleName } from '@/api/login'
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
        forms: [
          {
            label: '商户简称',
            prop: 'simple',
            itemType: 'select',
            selectFetch: getSimpleName,
            selectResultField: 'data',
            selectResultHandle: (item) => {
              return {
                value: item.id,
                label: item.name
              }
            }
          },
          {
            label: '下拉框',
            prop: 'select',
            itemType: 'select',
            options: [
              {
                label: 'AAAA',
                value: 'a'
              },
              {
                label: 'BBBB',
                value: 'b'
              }
            ]
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
        pageSize: 20
      }
    }
  },
  created() {

  },
  methods: {
    handleSubmit(value) {
      console.log(value)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
