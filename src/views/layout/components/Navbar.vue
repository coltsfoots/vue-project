<template>
	<el-menu class="navbar" mode="horizontal">
		<hamburger class="hamburger-container" :toggleClick="toggleSidebar" :isActive="sidebar.opened"></hamburger>
		<breadcrumb class="breadcrumb-container"></breadcrumb>
	</el-menu>
</template>

<script>
import { mapGetters } from 'vuex'
import Breadcrumb from '@/components/Breadcrumb'
import Hamburger from '@/components/Hamburger'
// import Screenfull from '@/components/Screenfull'
export default {
  name: 'Navbar',
  components: {
    Breadcrumb,
    Hamburger
    // Screenfull
  },
  computed: {
    ...mapGetters([
      'sidebar'
    ])
  },
  methods: {
    toggleSidebar() {
      this.$store.dispatch('toggleSidebar')
    }
  }
}
</script>

<style lang="less" scoped>
.navbar {
	height: 50px;
	line-height: 50px;
	border-radius: 0 !important;
	.hamburger-container {
		line-height: 58px;
		height: 50px;
		float: left;
		padding: 0 10px;
	}
	.breadcrumb-container {
		float: left;
	}
}
</style>
