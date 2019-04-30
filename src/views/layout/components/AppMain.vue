<template>
	<section class="app-main" style="min-height: 100%;">
		<transition name="fade" mode="out-in">
			<keep-alive :include="cachedViews">
				<router-view  class="app-container"></router-view>
			</keep-alive>
		</transition>
	</section>
</template>

<script>
export default {
  name: 'AppMain',
  computed: {
    cachedViews() {
      return this.$store.state.tagsView.cachedViews
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
