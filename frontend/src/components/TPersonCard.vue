<template>
  <div class="container">
    <el-card class="person" shadow="always" v-for="(person, index) in data" v-bind:key="index">
      <div id="picture">
        <img :src="person.imgUrl">
      </div>
      <div id="info">
        <p>UID: <span>{{person.name}}</span></p>
        <p>Signature:
          <el-button type="mini">{{person.testSign}}</el-button>
        </p>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'TPersonCard',
  data () {
    return {
      data: [
        {
          name: 'Friend1',
          imgUrl: 'static/user/test.jpeg',
          testSign: '所爱隔山海，山海亦可平'
        },
        {
          name: 'Friend2',
          imgUrl: 'static/user/test.jpeg',
          testSign: '所爱隔山海，山海亦可平'
        },
        {
          name: 'Friend3',
          imgUrl: 'static/user/test.jpeg',
          testSign: '所爱隔山海，山海亦可平'
        }]
    }
  },
  created () {
    this.getUserInfo()
  },
  methods: {
    getUserInfo () {
      this.bus.$on('getUserInfo', (data) => {
        console.log(data)
      })
    }
  }
}
</script>

<style scoped>
.container{
  height: 200px;
}
.person{
  margin-bottom: 10px;
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
  text-align: left;
}
#info p{
  margin-bottom: 0;
  margin-top: 12px;
}

#info p span{
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  font-size: 14px;
  font-weight: 800;
  opacity: 1;
}
</style>
