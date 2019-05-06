<template>
	<div>
		<panel-item :panelData="panelData"></panel-item>
    <circle-item :caption="'面包'" :value="80"></circle-item>
	</div>
</template>

<script>
import PanelItem from '@/components/Panel'
import CircleItem from '@/components/Circle'
import { getPanelData } from '@/api/index'
export default {
  name: 'Index',
  components: {
    PanelItem,
    CircleItem
  },
  data() {
    return {
      pData: null
    }
  },
  computed: {
    panelData() {
      if (this.pData) {
        return [
          {
            text: '今日订单',
            icon: 'form',
            endVal: this.pData.todayOrder,
            color: '#34bfa3'
          },
          {
            text: '今日销售收入',
            icon: 'money',
            endVal: this.pData.todayRevenue,
            color: '#36a3f7'
          },
          {
            text: '在线设备数',
            icon: 'international',
            endVal: this.pData.onlineEquipment,
            color: '#f4516c'
          },
          {
            text: '代理商总数',
            icon: 'peoples',
            endVal: this.pData.sumAgent,
            color: '#34bfa3'
          },
          {
            text: '订单总数',
            icon: 'clipboard',
            endVal: this.pData.allOrder,
            duration: 4000,
            color: '#34bfa3'
          },
          {
            text: '销售总收入',
            icon: 'moneys',
            endVal: this.pData.allRevenue,
            color: '#36a3f7'
          },
          {
            text: '设备总数',
            icon: 'table',
            endVal: this.pData.sumEquipment,
            color: '#f4516c'
          },
          {
            text: '场所总数',
            icon: 'address',
            endVal: this.pData.sumSite,
            color: '#34bfa3'
          }
        ]
      }
    }
  },
  created() {
    getPanelData().then(response => {
      this.pData = response.data
    })
  }
}
</script>

<style lang="scss" scoped>

</style>
