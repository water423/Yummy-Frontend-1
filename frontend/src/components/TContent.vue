<template>
<div>
  <TPersonCard></TPersonCard>
</div>
</template>

<script>
import TPersonCard from './TPersonCard'
export default {
  name: 'TContent',
  components: {TPersonCard},
  data () {
    return {
      data: ['Friend1', 'Friend2']
    }
  }
}
</script>

<style scoped>

</style>
