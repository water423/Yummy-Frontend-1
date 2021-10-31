<template>
<div class="message_window">
  <div class="message_header">
    消息
  </div>
  <div class="header_line">
    <el-badge :value="0" :max="99" class="item">
      <button id="t1" @click="changeColor(1)">私信</button>
    </el-badge>
    <el-badge :value="8" :max="99" class="item">
      <button id="t2" @click="changeColor(2)">评论</button>
    </el-badge>
    <el-badge :value="23" :max="99" class="item">
      <button id="t3" @click="changeColor(3)">通知</button>
    </el-badge>
    <el-badge :value="9" :max="99" class="item">
      <button id="t4" @click="changeColor(4)">@我</button>
    </el-badge>
  </div>
  <div class="list">
    <TFriendMessageList></TFriendMessageList>
  </div>
  <div>
    <el-button size="mini" type="primary" @click="closeMessageWindow" id="close_button">关闭</el-button>
  </div>
</div>
</template>

<script>
import TFriendMessageList from './TFriendMessageList'
export default {
  name: 'TMessageWindow',
  components: {TFriendMessageList},
  data () {
    return {
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
        ele.style.backgroundColor = '#4F7AAF'
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
  border-radius: 12px;
  display: inline;
  line-height: 22px;
}
.item{
  width: 10%;
  margin-right: 2%;
}
.item button{
  width: 100%!important;
  border-radius: 6px;
  border: slategrey solid 1px;
}
.item button:hover{
  cursor: pointer;
  background-color: #DCDCDC !important;
}
.list{
  margin: 8px 0;
  border: slategrey solid 1px;
  width: 100%;
  border-radius: 6px;
  height: 400px;
  overflow: auto;
}
#close_button{
  float: right;
  width: 10%;
  margin-bottom: 20px;
}
</style>
