<template>
	<div class="circle-wrapper" :style="{background: backgroundColor}">
		<div class="left" :style="leftCircleStyle"></div>
		<div class="right" :style="rightCircleStyle"></div>
		<div class="mask">
			<span class="caption">{{caption}}</span>
			<span class="value"><count-to :endVal="value"></count-to><span style="margin-left: 90px;">%</span></span>
		</div>
	</div>
</template>

<script>
import CountTo from 'vue-count-to'
export default {
  components: {
    CountTo
  },
  props: {
    backgroundColor: {
      type: String,
      default: 'red'
    },
    caption: '',
    value: {
      type: String | Number,
      default: 40
    }
  },
  data() {
    return {
      leftCircleStyle: null,
      rightCircleStyle: null,
      dis: 0
    }
  },
  created() {
    this.animation()
  },
  methods: {
    animation() {
      requestAnimationFrame(() => {
        if (+this.value <= 50) {
          this.dis++
          const rightRotate = {
            transform: 'rotate(' + this.dis * 3.6 + 'deg)'
          }
          this.rightCircleStyle = rightRotate

          if (this.dis < this.value) {
            requestAnimationFrame(this.animation)
          }
        } else {
          this.dis++
          const rightRotate = {
            transform: 'rotate(' + this.dis * 3.6 + 'deg)'
          }
          if (this.dis <= 50) {
            this.rightCircleStyle = rightRotate
          } else {
            const leftRotate = {
              transform: 'rotate(' + (this.dis - 50) * 3.6 + 'deg)'
            }
            this.leftCircleStyle = leftRotate
            this.rightCircleStyle = {
              background: this.backgroundColor,
              transform: 'rotate(0deg)'
            }
          }
          if (this.dis < this.value) {
            requestAnimationFrame(this.animation)
          }
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
.circle-wrapper {
	font-size: 200px;
	width: 1em;
	height: 1em;
	position: relative;
	* {
		position: absolute;
		top: 0;
		right: 0;
		left: 0;
		bottom: 0;
		margin: auto;
	}
	.left, .right {
		width: 1em;
		height: 1em;
		background: #f8f8f8;
	}
	.left {
		clip: rect(0, .5em, auto, 0);
	}
	.right {
		clip: rect(0, auto, auto, .5em);
	}
	.mask {
		width: 0.8em;
		height: 0.8em;
		background: #fff;
		text-align: center;
		line-height: 0.2em;
		color: #333;
		span {
			display: block;
		}
		.caption {
			font-size: 0.15em;
			top: 0.8em
		}
		.value {
			font-size: 0.25em;
			top: 1.6em;
			left: -30px;
		}
	}
}
.circle-wrapper, .circle-wrapper > * {
	border-radius: 50%;
}
@keyframes move {
	0% {
		transform: rotate(0deg)
	}
	100% {
		transform: rotate(144deg)
	}
}
</style>
