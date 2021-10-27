<template>
  <div>
    <THeader></THeader>
    <user-info-show></user-info-show>
    <TList></TList>
  </div>
</template>

<script>
import THeader from '../components/THeader'
import UserInfoShow from '../components/UserInfoShow'
import TList from '../components/TList'
export default {
  name: 'PersonSpace',
  components: {TList, UserInfoShow, THeader}
}
</script>

<style scoped>

</style>
