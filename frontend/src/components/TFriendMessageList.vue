<template>
<div class="main">
  <div class="list" v-for="(person, index) in data" v-bind:key="index">
    <div id="picture">
      <img :src="person.imgUrl">
    </div>
    <div id="info">
      <p>UID: <span>{{person.name}}</span></p>
      <span>message:
        {{person.message}}
      </span>
      <span id="time">{{person.time}}</span>
      <el-divider></el-divider>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'TFriendMessageList',
  data () {
    return {
      data: [
        {
          name: 'Friend1',
          imgUrl: 'static/user/test.jpeg',
          time: '2021.09.10',
          message: 'how are you?'
        },
        {
          name: 'Friend2',
          imgUrl: 'static/user/test.jpeg',
          time: '2021.10.11',
          message: 'eat or not?'
        },
        {
          name: 'Friend3',
          imgUrl: 'static/user/test.jpeg',
          time: '2021.10.10',
          message: 'let\'s chat~'
        }]
    }
  }
}
</script>

<style scoped>
.main{
  padding: 10px 2%;
}
.list{
  width: 100%;
  display: inline-block;
}
.list:hover{
  cursor: pointer;
  background-color: #DCDCDC !important;
}
#picture{
  height: 40px;
  width: 40px;
  padding: 5px;
  float: left;
}
#picture img{
  height: 100%;
  width: 100%;
  border-radius: 50% !important;
}
#info{
  float: left;
  width: 80%;
  text-align: left;
}
#info p{
  margin: 0;
  line-height: 22px;
}

#info p span{
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  font-size: 14px;
  font-weight: 800;
}
#time{
  float: right;
}
/*不可删除*/
.el-divider--horizontal {
  display: block;
  height: 1px;
  width: 100%;
  margin: 0;
}
</style>
