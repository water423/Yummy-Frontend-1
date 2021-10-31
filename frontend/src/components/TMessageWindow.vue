<template>
<div class="message_window">
  <div class="message_header">
    消息
  </div>
  <div class="header_line">
    <span id="t1" @click="changeColor(1)">私信</span>
    <span id="t2" @click="changeColor(2)">评论</span>
    <span id="t3" @click="changeColor(3)">通知</span>
    <span id="t4" @click="changeColor(4)">@我</span>
  </div>
  <div class="list">
    <div v-for="(item, index) in data" v-bind:key="index">
      {{item.name}}
    </div>
  </div>
  <div>
    <el-button type="mini" @click="closeMessageWindow">关闭</el-button>
  </div>
</div>
</template>

<script>
export default {
  name: 'TMessageWindow',
  data () {
    return {
      data: [
        {
          name: 'zhh',
          url: 'static/user/img.png'
        },
        {
          name: 'zdf',
          url: 'static/user/img.png'
        }
      ]
    }
  },
  created () {

  },
  methods: {
    closeMessageWindow () {
      this.bus.$emit('closeTheMessageWindow', 1)
      console.log('kk')
    },
    changeColor (id) {
      let theId = ''
      let idArr = ['t1', 't2', 't3', 't4']
      theId = idArr[id - 1]
      let ele = document.getElementById(theId)
      for (let i = 0; i < 4; i++) {
        document.getElementById(idArr[i]).style.backgroundColor = '#ffffff'
      }
      if (ele != null) {
        ele.style.backgroundColor = '#A9A9A9FF'
      }
    }
  }
}
</script>

<style scoped>
.message_window{
  text-align: left;
  margin: 0 3%;
}
.message_header{
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  line-height: 60px;
  font-size: 20px;
  font-weight: 800;
}
.header_line{
  border: #D3D3D3 solid 1px;
  border-radius: 12px;
  width: 58%;
  line-height: 18px;
}
.header_line span{
  display: inline-block;
  text-align: center;
  width: 24.2%;
  padding: 5px 0;
  border-radius: 12px;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  font-size: 12px;
  font-weight: 800;
}
.header_line span:hover{
  cursor: pointer;
  background: darkgray;
}
.list{
  margin: 8px 0;
  border: slategrey solid 1px;
  width: 100%;
  border-radius: 6px;
}
.list div{
  margin: 0 5px;
}
</style>
