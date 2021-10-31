<template>
  <div class="THeader">
    <span style="margin-left: 2%"><i class="el-icon-s-home"></i> 主页</span>
    <span><i class="el-icon-help"></i> 动态</span>
    <span><i class="el-icon-hot-water"></i> 讨论</span>
    <span><i class="el-icon-user"></i> 好友</span>
    <span><i class="el-icon-share"></i> 推荐</span>
    <span style="margin-right: 32%"><i class="el-icon-edit"></i> 评论</span>
    <span @click="popUpMessageWindow"><i class="el-icon-bell"></i> 消息</span>
    <span><i class="el-icon-setting"></i> 设置</span>
    <span v-if="userInfo.isLogin"><i class="el-icon-user-solid"></i> 登录</span>
    <span v-else><i class="el-icon-user-solid"></i>
      <el-dropdown>
        <span style="margin: 0">{{userInfo.name}}</span>
        <el-dropdown-menu>
          <el-dropdown-item style="padding: 0 10px;line-height: 20px;margin: 0 10px">
            退出
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </span>
    <el-divider></el-divider>
    <TWindows v-if="messageWindowPopUP"></TWindows>
  </div>
</template>

<script>
import TWindows from './TWindows'
export default {
  name: 'THeader',
  components: {TWindows},
  props: {},
  data () {
    return {
      userInfo: {
        name: 'zyk0001',
        message: 0,
        isLogin: false
      },
      messageWindowPopUP: false
    }
  },
  mounted () {
    this.getUserInfo()
  },
  created () {
    this.closeMessageWindow()
  },
  methods: {
    resUserInfo () {
      // this.$emit('userInfo', this.userInfo)
      return this.userInfo
    },
    getUserInfo () {
      this.bus.$emit('getUserInfo', this.userInfo)
    },

    // 弹出窗口
    popUpMessageWindow () {
      this.messageWindowPopUP = true
    },
    closeMessageWindow () {
      this.bus.$on('closeTheMessageWindow', (type) => {
        console.log(type, 'hh')
        if (type === 1) {
          this.messageWindowPopUP = false
        }
      })
    }
  }
}
</script>

<style scoped>
.THeader{
  background-color: #FFFFFF;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  line-height: 40px;
  font-size: 14px;
  font-weight: 500;
  position: fixed;
  width: 100%;
  left: 0;
  top: 0;
  z-index: 2;
  margin: 0;
}
.THeader span{
  margin: 0 25px;
  border-radius: 6px;
  cursor: pointer;
}

.THeader span:hover{
  background-color: #A7D2CB;
}
/*不可删除*/
.el-divider--horizontal {
  display: block;
  height: 1px;
  width: 100%;
  margin: 0;
}
</style>
