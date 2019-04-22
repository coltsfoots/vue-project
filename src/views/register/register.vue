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
					:class="{active: item.type === selectedType.type}"
					@click.native="chooseType(item)">
					<span class="svg-container">
						<svg-icon :icon-class="item.icon"></svg-icon>
					</span>
					<p>{{item.title}}</p>
				</el-col>
			</el-row>
		</div>
		<register-item :is-user="selectedType && selectedType.type !== 'user'"></register-item>
		<div>
			<el-button v-if="active > 0" @click="prev">上一步</el-button>
			<el-button :disabled="!selectedType.type" @click="next">{{active === 2 ? '我知道了' : active === 1 ? '提交审核' : '下一步'}}</el-button>
		</div>
	</div>
</template>

<script>
import RegisterItem from './components/index'
export default {
  name: 'Register',
  components: {
    RegisterItem
  },
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
      selectedType: {}
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
	.choose-type {
		text-align: center;
		.el-col {
			.svg-container {
				font-size: 100px;
				color: #00BFBF;
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
}
</style>
