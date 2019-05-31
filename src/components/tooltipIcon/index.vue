<template>
	<div>
		<el-tooltip :effect="effect" :content="content" :placement="placement">
			<svg-icon :icon-class="iconClass"></svg-icon>
		</el-tooltip>
	</div>
</template>

<script>
export default {
  name: 'TooltipIcon',
  props: {
    effect: {
      type: String,
      default: 'dark'
    },
    content: {
      type: String,
      required: true
    },
    placement: {
      type: String,
      default: 'top'
    },
    iconClass: {
      type: String,
      default: '',
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
