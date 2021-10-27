<template>
  <div class="list">
    <el-row :gutter="12">
      <el-col :span="6">
        <el-card shadow="always" class="l1">
          <div class="focus">
            关注  ｜  被关注
            <br>
            <span>{{focus}}{{beFocus}}</span>
          </div>
          <el-button type="mini" style="width: 100%">编辑个人资料</el-button>
          <div>
            <p style="text-align: left;font-weight: bold">相关数据</p>
            <div id="small_list">
              <p><i class="el-icon-medal" style="color: goldenrod"></i>声望等级</p>
              <p><i class="el-icon-view" style="color: #4F7AAF"></i>浏览总数</p>
              <p><i class="el-icon-edit" style="color: #F27D2E"></i>被评论数</p>
              <p><i class="el-icon-star-on" style="color: #D1322E"></i>获得点赞</p>
            </div>
          </div>
        </el-card>
      </el-col>
      <el-col :span="9">
        <el-card shadow="always">
          show1...
        </el-card>
      </el-col>
      <el-col :span="9">
        <el-card shadow="always">
          show2...
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'TList',
  data () {
    return {
      focus: 0,
      beFocus: 0
    }
  }
}
</script>

<style scoped>
.list{
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
#small_list{
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  line-height: 40px;
  font-size: 14px;
  font-weight: 500;
  padding-left: 10px;
}
</style>
