<template>
	<div class="login-container">
		<el-row>
			<el-col :offset="14">
				<el-form
					class="login-form"
					ref="loginForm"
					label-position="left"
					:model="loginForm"
					:rules="loginRules"
				>
					<div class="title-container">
						<h3 class="title">面包识别机后台管理系统</h3>
						<p class="title title-2">Business Management System</p>
					</div>
					<el-form-item prop="userName">
						<span class="svg-container svg-container-login">
							<svg-icon icon-class="user"></svg-icon>
						</span>
						<el-input
							type="text"
							v-model="loginForm.userName"
							autocomplete="off"
							placeholder="请输入用户名"
						></el-input>
					</el-form-item>
					<el-form-item prop="passWord">
						<span class="svg-container">
							<svg-icon icon-class="password"></svg-icon>
						</span>
						<el-input
							:type="passwordType"
							v-model="loginForm.passWord"
							autocomplete="off"
							placeholder="请输入密码"
						></el-input>
						<span class="show-pwd" @click="showPwd">
							<svg-icon icon-class="eye"></svg-icon>
						</span>
					</el-form-item>
					<el-button class="login-btn" type="primary" @click="handleLogin">登录</el-button>
					<p class="register">还没有账号? <router-link to='/register'>立即注册</router-link></p>
				</el-form>
			</el-col>
		</el-row>
	</div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      loginForm: {
        userName: '',
        passWord: ''
      },
      loginRules: {
        userName: [{ required: true, trigger: 'blur', message: '用户名不能为空' }],
        passWord: [
          { required: true, trigger: 'blur', message: '密码不能为空' },
          { min: 6, max: 15, message: '长度在 6 到 15 个字符' }
        ]
      },
      passwordType: 'password'
    }
  },
  methods: {
    showPwd() {
      if (this.passwordType === 'password') {
        this.passwordType = 'text'
      } else {
        this.passwordType = 'password'
      }
    },
    handleLogin() {
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          this.$store.dispatch('LoginByUserName', this.loginForm).then(() => {
            this.$router.push({ path: '/' })
          }).catch((error) => {
            console.log(error)
          })
        }
      })
    }
  }
}
</script>

<style lang="scss">
.login-container {
	.el-input {
		display: inline-block;
		width: 85%;
		height: 47px;
		input {
			background: transparent;
			border: 0px;
			border-radius: 0px;
			height: 47px;
			color: #eee;
			padding: 12px 5px 12px 15px;
			&:-webkit-autofill {
				box-shadow: 0 0 0px 1000px #2d3a4b inset !important;
				-webkit-text-fill-color: #fff !important;
			}
		}
	}
	.el-form-item {
		border: 1px solid rgba(255, 255, 255, 0.1);
		background: rgba(0, 0, 0, 0.1);
		border-radius: 5px;
		color: #454545;
	}
	.el-button {
		width: 100%;
	}
}
</style>

<style lang="less" scoped>
.login-container {
	position: fixed;
	height: 100%;
	width: 100%;
	background: #2d3a4b;
	.login-form {
		position: absolute;
		left: 0;
		right: 0;
		width: 520px;
		padding: 35px 35px 15px 35px;
		margin: 120px auto;
	}
	.svg-container {
		padding: 6px 5px 6px 15px;
		color: #889aa4;
		vertical-align: middle;
		width: 30px;
		display: inline-block;
		font-size: 20px;
		&-login {
			font-size: 25px;
		}
	}
	.title-container {
		position: relative;
		margin: 0px auto 40px auto;
		.title {
			font-size: 26px;
			font-weight: bold;
			color: #eee;
			text-align: center;
			&-2 {
				font-size: 18px;
			}
		}
	}
	.show-pwd {
		position: absolute;
		right: 10px;
		top: 7px;
		font-size: 16px;
		color: #889aa4;
		cursor: pointer;
		user-select: none;
	}
	.register {
		text-align: center;
		color: #fff;
		a {
			text-decoration: none;
			color: aqua;
		}
	}
}
</style>
