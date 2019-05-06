<template>
	<el-row class="panel-group" :gutter="40">
		<el-col
      :xs="12"
      :sm="12"
      :lg="6"
      class="card-panel-col"
      v-for="(panel, index) in panelData"
      :key="panel.text"
      @mouseover.native="handleSetBackground(panel, index)"
      @mouseout.native="handleOut(panel, index)"
    >
			<div class="card-panel">
				<div class="card-panel-icon-wrapper" :style="{color: panel.color || '#34bfa3'}" :id="'icon-' + panel.icon + index">
					<svg-icon :icon-class="panel.icon" class-name="card-panel-icon"></svg-icon>
				</div>
				<div class="card-panel-description">
					<div class="card-panel-text">{{panel.text}}</div>
					<count-to class="card-panel-num" :startVal="panel.startVal || 0" :endVal="panel.endVal" :duration="panel.duration || 2800"></count-to>
				</div>
			</div>
		</el-col>
	</el-row>
</template>

<script>
import CountTo from 'vue-count-to'
export default {
  name: 'PanelItem',
  components: {
    CountTo
  },
  props: {
    panelData: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    handleSetBackground(panel, index) {
      const backgroundPanel = document.getElementById('icon-' + panel.icon + index)
      backgroundPanel.style.background = panel.color
      backgroundPanel.style.color = '#fff'
    },
    handleOut(panel, index) {
      const backgroundPanel = document.getElementById('icon-' + panel.icon + index)
      backgroundPanel.style.background = '#fff'
      backgroundPanel.style.color = panel.color
    }
  }
}
</script>

<style lang="scss" scoped>
.panel-group {
  padding: 22px;
  margin-top: 18px;
  .card-panel-col{
    margin-bottom: 32px;
  }
  .card-panel {
    height: 108px;
    cursor: pointer;
    font-size: 12px;
    position: relative;
    overflow: hidden;
    color: #666;
    background: #fff;
    box-shadow: 4px 4px 40px rgba(0, 0, 0, .05);
    border-color: rgba(0, 0, 0, .05);
    &:hover {
      .card-panel-icon-wrapper {
        color: #fff;
      }
    }
    .card-panel-icon-wrapper {
      float: left;
      margin: 14px 0 0 14px;
      padding: 16px;
      transition: all 0.38s ease-out;
      border-radius: 6px;
    }
    .card-panel-icon {
      float: left;
      font-size: 48px;
    }
    .card-panel-description {
      float: right;
      font-weight: bold;
      margin: 26px;
      margin-left: 0px;
      .card-panel-text {
        line-height: 18px;
        color: rgba(0, 0, 0, 0.45);
        font-size: 16px;
        margin-bottom: 12px;
      }
      .card-panel-num {
        font-size: 20px;
      }
    }
  }
}
</style>
