<template>
  <div>
    <div class="row justify-between">
    <q-parallax
    cantain
      :src="require(`@/assets/img/${data.img}.jpg`)"
      :height="800" :speed="2"
    >
      <sapn class="text-white text-black">{{data.title}}</sapn>
    </q-parallax>

    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      data: {
        img:'clouds',
        title:'Hello, Im THEERAMET SAENGSIN Im a front-end developer'
      }
    }
  }
}
</script>
<style scoped>
</style>