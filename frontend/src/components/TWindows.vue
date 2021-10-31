<template>
<div class="window">
  <el-card id="main">
    <TMessageWindow></TMessageWindow>
  </el-card>
</div>
</template>

<script>
import TMessageWindow from './TMessageWindow'
export default {
  name: 'TWindows',
  components: {TMessageWindow},
  methods: {
    //
  }
}
</script>

<style scoped>
.window{
  position: fixed;
  z-index: 10;
  background: rgba(0, 0, 0, 0.7);
  width: 100%;
  height: 100%;
  margin: -40px 0 0 0;
}
#main{
  margin: 80px 20% 0 20%;
  opacity: 1;
}
</style>
