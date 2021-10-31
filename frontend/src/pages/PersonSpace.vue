<template>
  <div>
    <THeader ref="header"></THeader>
    <div class="main">
      <TUserInfoShow></TUserInfoShow>
      <TList></TList>
    </div>
  </div>
</template>

<script>
import THeader from '../components/THeader'
import TUserInfoShow from '../components/TUserInfoShow'
import TList from '../components/TList'
export default {
  name: 'PersonSpace',
  components: {TList, TUserInfoShow, THeader},
  data () {
    return {
      userInfo: {
        name: null,
        isLogin: false
      }
    }
  },
  mounted () {
    // 初始化用户info
    // this.getUserInfo()
  },
  methods: {
    getUserInfo () {
      let data = this.$refs.header.resUserInfo()
      this.userInfo.name = data.name
      this.userInfo.isLogin = data.isLogin
    }
  }
}
</script>

<style scoped>
.main{
  position: relative;
  background-color: #F8F8FF;
  min-width: 1400px;
}
</style>
