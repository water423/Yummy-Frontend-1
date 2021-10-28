<template>
<div class="container">
  <img :src="bgImgUrl" class="bg_img">
  <div id="me">
    <div id="picture">
      <img :src="meImgUrl">
    </div>
    <div id="info">
      <p>UID: <span>{{userInfo.name}}</span></p>
      <p>Signature:
        <el-button v-if="userInfo.testSign==null" type="mini">Empty~ Click to edit</el-button>
        <el-button v-else type="mini">{{userInfo.testSign}}</el-button>
      </p>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'TUserInfoShow',
  data () {
    return {
      bgImgUrl: 'static/user/bg_1.png',
      meImgUrl: 'static/user/img.png',
      userInfo: {
        name: null,
        isLogin: null,
        sign: null,
        testSign: '所爱隔山海，山海亦可平'
      }
    }
  },
  created () {
    this.getUserInfo()
  },
  methods: {
    getUserInfo () {
      this.bus.$on('getUserInfo', (data) => {
        this.userInfo.name = data.name
        this.userInfo.isLogin = data.isLogin
      })
    }
  }
}
</script>

<style scoped>
.container{
  height: 200px;
  margin: 40px 5% 0 5%;
}
.bg_img{
  padding-top: 0px;
  z-index: 0;
  left: 0;
  margin: 0 5%;
  position: absolute;
}
#me{
  z-index: 1;
  position: absolute;
  background-color: #F8F8FF;
  margin: 85px 0 0 0.5%;
  width: 60%;
  text-align: left;
  border-radius: 5px;
  opacity: 0.85;
}
#picture{
  height: 80px;
  width: 80px;
  padding: 10px;
  float: left;
}
#picture img{
  height: 100%;
  width: 100%;
  border-radius: 6px !important;
}
#info{
  padding: 10px;
  float: left;
  width: 60%;
}
#info p{
  margin-bottom: 0;
  margin-top: 12px;
}
#info p button{
  background-color: #F8F8FF;
  border-radius: 5px;
  width: 80%;
  text-align: left;
  border: #DCDCDC solid 1px;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  font-size: 14px;
  font-weight: 500;
  opacity: 0.6;
}
#info p button:hover{
  background-color: #FFFFFF;
  cursor: pointer;
}
#info p span{
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  font-size: 14px;
  font-weight: 800;
  opacity: 1;
}
</style>
