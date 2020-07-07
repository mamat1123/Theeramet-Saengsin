<template>
    <div class="toolbar bg-none row items-center">
        <q-scroll-observer @scroll="onScroll" />
        {{onScroll.position > 118}}
        <div :class="onScroll.position > 118 ? 'col-12 row bg-red' : 'col-12 row bg-none' ">
            <div class="col-4">
                <q-btn round>
                    <q-avatar size="50px">
                        <img :src="require('@/assets/img/logo.jpg')" />
                    </q-avatar>
                </q-btn>
            </div>
            <div class="col-8">
                <p>About</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      scrollInfo: {}
    }
  },
  methods: {
    onScroll (info) {
      this.scrollInfo = info
      console.log(this.scrollInfo)
    }
  }
}
</script>

<style scoped>
.toolbar {
  height: 70px;
  position: fixed;
  width: 100%;
}
.bg-none {
  background-color: rgba(0, 0, 0, 0);
}
</style>