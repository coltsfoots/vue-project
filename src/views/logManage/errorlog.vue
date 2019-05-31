<template>
	<div>
		<custom-form
      :formName="'loginLogForm'"
      :inline="true"
      :showResetBtn="true"
      :handleSubmit="getErrorLog"
      :forms="forms"
    ></custom-form>
    <custom-table class="loading-area" :tableOptions="tableOptions">
			<template slot="handle-column">
				<el-table-column label="操作" width="80">
					<template slot-scope="scope">
						<span style="font-size: 30px;cursor: pointer;">
              <tooltip-icon :content="'详情'" :iconClass="'view'" @click.native="fetchDetails(scope)"></tooltip-icon>
						</span>
					</template>
				</el-table-column>
			</template>
		</custom-table>
    <pagination :page="page" :layout="'total, prev, pager, next, sizes, jumper'" :totalPage="totalPage" @currentChange="getErrorLog(formParams)"></pagination>

    <el-dialog title="异常日志详情" :visible.sync="dialogErrorLogDetail">
      <el-form :model="dialogForm" label-width="80px">
        <el-form-item label="服务名称">
          <el-input v-model="dialogForm.serverName" readonly></el-input>
        </el-form-item>
        <el-form-item label="异常类型">
          <el-input v-model="dialogForm.errorType" readonly></el-input>
        </el-form-item>
        <el-form-item label="异常描述">
          <el-input v-model="dialogForm.errorCaption" readonly></el-input>
        </el-form-item>
        <el-form-item label="端口号">
          <el-input v-model="dialogForm.siteNo" readonly></el-input>
        </el-form-item>
        <el-form-item label="版本号">
          <el-input v-model="dialogForm.versionsNo" readonly></el-input>
        </el-form-item>
        <el-form-item label="日志等级">
          <el-input v-model="dialogForm.logLv" readonly></el-input>
        </el-form-item>
        <el-form-item label="日志时间">
          <el-input v-model="dialogForm.logTime" readonly></el-input>
        </el-form-item>
        <el-form-item label="操作时间">
          <el-input v-model="dialogForm.handleTime" readonly></el-input>
        </el-form-item>
        <el-form-item label="操作终端">
          <el-input v-model="dialogForm.handleSite" readonly></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer">
        <el-button type="primary" @click="dialogErrorLogDetail = false">确定</el-button>
      </div>
    </el-dialog>
	</div>
</template>

<script>
import CustomForm from 'vue-simple-custom-form'
import CustomTable from 'vue-simple-custom-table'
import Pagination from 'vue-simple-custom-pagination'
import TooltipIcon from '@/components/TooltipIcon/index'
import { getErrorLogList } from '@/api/log/loginLog'
export default {
  name: 'LoginLog',
  components: {
    CustomForm,
    CustomTable,
    Pagination,
    TooltipIcon
  },
  data() {
    return {
      forms: [
        {
          label: '服务名称',
          prop: 'serverName'
        },
        {
          label: '操作者',
          itemType: 'select',
          prop: 'handleUser',
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
        },
        {
          label: '操作终端',
          prop: 'handleSite'
        },
        {
          label: '异常描述',
          prop: 'errorCaption'
        }
      ],
      tableOptions: {
        columns: [
          {
            label: '服务名称',
            prop: 'serverName',
            width: 80
          },
          {
            label: '操作者',
            prop: 'handleUser',
            width: 80
          },
          {
            label: '操作时间',
            prop: 'handleTime',
            width: 100
          },
          {
            label: '操作终端',
            prop: 'handleSite',
            width: 80
          },
          {
            label: '异常描述',
            prop: 'errorCaption'
          }
        ],
        dataSource: null
      },
      page: {
        pageIndex: 1,
        pageSize: 20
      },
      totalPage: null,
      formParams: {
        serverName: '',
        handleUser: '',
        handleTime: '',
        handleSite: '',
        errorCaption: ''
      },
      dialogForm: {},
      dialogErrorLogDetail: false
    }
  },
  created() {
    this.getErrorLog(this.formParams)
  },
  methods: {
    getErrorLog(formParams) {
      getErrorLogList(formParams, this.page).then(response => {
        this.tableOptions.dataSource = response.data
        this.totalPage = response.total
      })
    },
    fetchDetails(scope) {
      this.dialogErrorLogDetail = true
      const row = scope.row
      this.dialogForm = { ...row }
      console.log(scope)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
