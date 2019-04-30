<template>
	<div>
		<panel-item :panelData="panelData"></panel-item>
	</div>
</template>

<script>
import PanelItem from '@/components/Panel'
export default {
  name: 'Index',
  components: {
    PanelItem
  },
  data() {
    return {
      panelData: [
        {
          text: '今日订单',
          icon: 'form',
          endVal: 5000,
          color: '#34bfa3'
        },
        {
          text: '今日销售收入',
          icon: 'money',
          endVal: 5000,
          color: '#36a3f7'
        },
        {
          text: '在线设备数',
          icon: 'international',
          endVal: 5000,
          color: '#f4516c'
        },
        {
          text: '代理商总数',
          icon: 'peoples',
          endVal: 5000,
          color: '#34bfa3'
        },
        {
          text: '订单总数',
          icon: 'clipboard',
          endVal: 5000,
          color: '#34bfa3'
        },
        {
          text: '销售总收入',
          icon: 'moneys',
          endVal: 5000,
          color: '#36a3f7'
        },
        {
          text: '设备总数',
          icon: 'table',
          endVal: 5000,
          color: '#f4516c'
        },
        {
          text: '场所总数',
          icon: 'address',
          endVal: 5000,
          color: '#34bfa3'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
