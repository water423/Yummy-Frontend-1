<template>
  <div id="list">
    <el-row :gutter="12">
      <el-col :span="6">
        <el-card shadow="always" class="l1">
          <div class="focus">
            <p class="item">个人简介</p>
            <div class="small_list">
              <div>
                <div>
                  <p><i class="el-icon-location" style="color: #4F7AAF"></i>地点</p>
                  <span>{{person.location}}</span>
                </div>
              </div>
              <div>
                <div v-if="person.sex=='male'">
                  <p><i class="el-icon-female" style="color: darkgoldenrod"></i>性别</p>
                  <span>{{person.sex}}</span>
                </div>
                <div v-else>
                  <p><i class="el-icon-male" style="color: darkgoldenrod"></i>性别</p>
                  <span>{{person.sex}}</span>
                </div>
              </div>
              <div>
                <div>
                  <p><i class="el-icon-collection-tag" style="color: #D1322E"></i>标签</p>
                  <div id="label">
                    <span v-for="(item,index) in person.label" v-bind:key="index" style="margin-left: 0;margin-right: 15px;line-height: 25px">
                    {{item}}
                  </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <el-button type="mini" style="width: 100%;margin-top: 10px;margin-bottom: 20px">编辑个人资料</el-button>
          <div>
            <p class="item">功能集锦</p>
            <div class="small_list">
              <div class="small_list_item">
                <div>
                  <a href="#list"><p @click="scrollToPosition"><i class="el-icon-user"></i>我的好友</p></a>
                </div>
              </div>
              <div class="small_list_item">
                <div>
                  <a href="#list"><p @click="scrollToPosition"><i class="el-icon-help"></i>我的动态</p></a>
                </div>
              </div>
              <div class="small_list_item">
                <div>
                  <a href="#list"><p><i class="el-icon-edit-outline"></i>评价中心</p></a>
                </div>
              </div>
              <div class="small_list_item">
                <div>
                  <a href="#list"><p><i class="el-icon-share"></i>我的推荐</p></a>
                </div>
              </div>
              <div class="small_list_item">
                <div>
                  <a href="#list"><p><i class="el-icon-video-camera-solid"></i>我看过的</p></a>
                </div>
              </div>
              <div class="small_list_item">
                <div>
                  <a href="#list"><p><i class="el-icon-service"></i>客服反馈</p></a>
                </div>
              </div>
            </div>
          </div>
          <div>
            <p class="item">相关数据</p>
            <div class="small_list">
              <div class="small_list_item">
                <div>
                  <p><i class="el-icon-medal" style="color: goldenrod"></i>声望等级 {{data[0]}}</p>
                </div>
              </div>
              <div class="small_list_item">
                <div>
                  <p><i class="el-icon-view" style="color: #4F7AAF"></i>浏览总数 {{data[1]}}</p>
                </div>
              </div>
              <div class="small_list_item">
                <div>
                  <p><i class="el-icon-edit" style="color: #F27D2E"></i>被评论数 {{data[2]}}</p>
                </div>
              </div>
              <div class="small_list_item">
                <div>
                  <p><i class="el-icon-star-on" style="color: #D1322E"></i>获得点赞 {{data[3]}}</p>
                </div>
              </div>
            </div>
          </div>
        </el-card>
      </el-col>
      <el-col :span="9">
        <el-card shadow="always">
          board...
        </el-card>
      </el-col>
      <el-col :span="9">
        <el-card shadow="always">
          board...
        </el-card>
      </el-col>
      <el-col :span="18" id="content">
        <TContent></TContent>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import TContent from './TContent'
export default {
  name: 'TList',
  components: {TContent},
  data () {
    return {
      person: {
        name: 'zyk0108',
        sex: 'male',
        location: 'ShangHai',
        label: ['kol', 'super star', 'delicious food discover', 'big man']
      },
      data: [12, 3, 4, 56]
    }
  },
  methods: {
    scrollToPosition () {
      this.$nextTick(() => {
        let ele = document.getElementById('list')
        if (ele != null) {
          ele.scrollTop = 0
          console.log('kk', ele.scrollTop)
        }
        console.log(document.body.scrollTop)
        console.log(document.body.scrollHeight)
      })
    },
    // 滚动到最底
    scroll () {
      // nextTick在DOM完成后在执行
      this.$nextTick(() => {
        let element = document.getElementById('chatBody')// 获取对象
        if (element != null) {
          element.scrollTop = element.scrollHeight// 滚动高度
        }
      })
    }
  }
}
</script>

<style scoped>
#list{
  padding-top: 10px;
  margin: 0 5%;
  background-position: 50% center;
}
.l1{
  text-align: left;
}
.focus{
  padding-bottom: 10px;
}
.item{
  text-align: left;
  font-weight: bold;
}
.small_list{
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  font-size: 14px;
  font-weight: 500;
  padding-left: 10px;
}
.small_list_item{
  cursor: pointer;
}
.small_list_item div p{
  background-color: #F8F8FF;
  border-radius: 2px;
  margin-right: 20%;
  line-height: 35px;
  padding-left: 5%;
}
.small_list_item div p:hover{
  background-color: #D3D3D3;
}
.small_list div div p{
  margin-bottom: 0;
}
.small_list div div span{
  margin-left: 15px;
  padding:0 5px;
  background-color: #F5F5F5;
  border-radius: 2px;
  margin-bottom: 5px;
}
#label{
  margin-left: 15px;
}
a{
  text-decoration: none;
  color: #333;
}
#content{
  margin-top: 10px;
  float: right;
}
</style>
