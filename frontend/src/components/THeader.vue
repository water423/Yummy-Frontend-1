<template>
  <div class="THeader">
    <span><i class="el-icon-user"></i> 好友</span>
    <span><i class="el-icon-share"></i> 推荐</span>
    <span><i class="el-icon-help"></i> 动态</span>
    <span><i class="el-icon-bell"></i> 消息</span>
    <span><i class="el-icon-setting"></i> 设置</span>
    <span v-if="isLogin"><i class="el-icon-user-solid"></i> 登录</span>
    <span v-else><i class="el-icon-user-solid"></i> 用户</span>
    <hr class="foot_line">
  </div>
</template>

<script>
export default {
  name: 'THeader',
  props: {
    messages: {
      type: String,
      require: true
    }
  },
  data () {
    return {
      message: 12,
      activeName: 'second',
      isLogin: false
    }
  },
  methods: {
    handleClick (tab, event) {
      console.log(tab, event)
    }
  }
}
</script>

<style scoped>
.msg{
  font-family: Hiragino Sans GB;
  color:#D1322E;
}
.THeader{
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  line-height: 40px;
  font-size: 14px;
  font-weight: 500;
}
span{
  margin: 0 25px;
  cursor: pointer;
}
.foot_line{
  background-color: #E4E7ED;
  width: 100%;
  height: 1px;
  margin-top: 0;
  padding-top: 0
}
</style>
