<template>
	<div class="register-container">
		<el-steps :active="active" finish-status="success" align-center>
			<el-step title="选择类型"></el-step>
			<el-step title="填写信息"></el-step>
			<el-step title="提交审核"></el-step>
		</el-steps>
		<div class="choose-type" v-if="active === 0">
			<el-row :gutter="30">
				<el-col
					:span="8"
					v-for="item in type"
					:key="item.title"
					@click.native="chooseType(item)"
					:class="{active: item.type === selectedType.type}"
				>
					<span class="svg-container">
						<svg-icon :icon-class="item.icon"></svg-icon>
					</span>
					<p>{{item.title}}</p>
				</el-col>
			</el-row>
		</div>
		<el-form v-show="active === 1" :model="registerForm" :rules="registerRules" label-position="right" label-width="120px">
      <div v-show="selectedType.type !== 'user'">
        <h2>基本信息</h2>
        <el-form-item prop="companyName" label="商户名称">
          <el-input v-model="registerForm.companyName" placeholder="请输入营业执照上的主体名称"></el-input>
        </el-form-item>
        <el-form-item prop="simpleName" label="商户主体简称">
          <el-input v-model="registerForm.simpleName" placeholder="请输入商户主体简称"></el-input>
        </el-form-item>
        <el-form-item prop="area" label="所在区域">
          <el-input></el-input>
        </el-form-item>
      </div>
      <h2>管理员信息</h2>
      <el-form-item prop="adminName" label="管理员姓名">
        <el-input v-model="registerForm.adminName" placeholder="请输入管理员姓名"></el-input>
      </el-form-item>
      <el-form-item prop="telephone" label="管理员手机号">
        <el-input v-model="registerForm.telephone" placeholder="请输入管理员手机号"></el-input>
      </el-form-item>
    </el-form>
		<div v-show="active === 2" style="text-align: center;">
			<span class="svg-container">
				<svg-icon icon-class="right"></svg-icon>
			</span>
		</div>
		<div class="btn-group">
			<el-button v-show="active > 0" @click="prev">上一步</el-button>
			<el-button
				:disabled="!selectedType.type"
				@click="next"
			>{{active === 2 ? '我知道了' : active === 1 ? '提交审核' : '下一步'}}</el-button>
		</div>
	</div>
</template>

<script>
export default {
  name: 'Register',
  data() {
    return {
      active: 0,
      type: [
        {
          title: '企业',
          icon: 'company',
          type: 'company'
        },
        {
          title: '个体工商户',
          icon: 'unit',
          type: 'unit'
        },
        {
          title: '个人',
          icon: 'user',
          type: 'user'
        }
      ],
      selectedType: {},
      registerForm: {
        companyName: '',
        simpleName: '',
        area: '',
        adminName: '',
        telephone: ''
      },
      registerRules: {
        companyName: [{ required: true, trigger: 'blur', message: '商户名称不能为空' }],
        simpleName: [{ required: true, trigger: 'blur', message: '商户简称不能为空' }],
        area: [{ required: true, trigger: 'blur', message: '所在区域不能为空' }],
        adminName: [{ required: true, trigger: 'blur', message: '管理员姓名不能为空' }],
        telephone: [{ required: true, trigger: 'blur', message: '管理员手机号码不能为空' }]
      }
    }
  },
  methods: {
    prev() {
      this.active--
    },
    next() {
      if (this.active++ >= 2) {
        this.$router.push('/login')
      }
    },
    chooseType(item) {
      this.selectedType = item
    }
  }
}
</script>

<style lang="less" scoped>
.register-container {
	width: 40%;
	margin: 100px auto;
	box-sizing: border-box;
	.svg-container {
		font-size: 100px;
		color: #00BFBF;
	}
	.choose-type {
		text-align: center;
		.el-row {
			display: flex;
			.el-col {
				justify-content: space-around;
			}
		}
		.el-col:hover {
			background: #b5e0b5;
			color: #fff;
			border-radius: 5px;
			cursor: pointer;
		}
		.active {
			background: #b5e0b5;
			color: #fff;
			border-radius: 5px;
		}
	}
	.btn-group {
		margin-top: 30px;
		text-align: center;
	}
}
</style>
