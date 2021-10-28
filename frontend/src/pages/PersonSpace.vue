<template>
  <div>
    <THeader></THeader>
    <TUserInfoShow></TUserInfoShow>
    <TList></TList>
  </div>
</template>

<script>
import THeader from '../components/THeader'
import TUserInfoShow from '../components/TUserInfoShow'
import TList from '../components/TList'
export default {
  name: 'PersonSpace',
  components: {TList, TUserInfoShow, THeader}
}
</script>

<style scoped>

</style>
