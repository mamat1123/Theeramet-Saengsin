<template>
    <div class="row" style="height:100vh">
        <div class="col-8">
            <q-img :contain="contain" :height="height" :src="require(`@/assets/img${img}`)">
                <div
                    class="row items-center justify-center"
                    :style="`height:100%;width:100%;opacity:0;background-color:tranparent;color:white`"
                >
                    <h3>sdsd</h3>
                </div>
            </q-img>
        </div>
        <div class="col-4 row" id="info">
            <div class="col-12">
                <h5>Advance Fiber Co., Ltd.</h5>
                <h3 style="margin:30px 0">Advance Fiber</h3>
                <h5 style="color:#6F6F6F;font-size:18px">Front-end Develop,CMS</h5>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  props: ['contain', 'height', 'img'],
  mounted () {
    var me = this
    var value = document.querySelector(`#info`).offsetTop + 550
    document.addEventListener('scroll', function () {
      me.TrickerAnimation('info', 'fixed-position', value)
    })
  },
  methods: {
    TrickerAnimation (id, className, value) {
      if (document.querySelector(`#${id}`) !== null) {
        var top = window.pageYOffset + window.innerHeight
        console.log((value + value) - 1500 < top)
        var start = top > value
        if ((value + value) - 1500 < top) {
            console.log('Change')
        }
      }
      if (start) {
        document.getElementById(id).classList.add(className)
      } else {
        var del = document.getElementById(id)
        if (del !== null) {
          del.classList.remove(className)
        }
      }
    }
  }

}
</script>

<style scoped>
.q-img__content > div {
  position: absolute;
  padding: 16px;
  /* color: #fff; */
  background: rgba(0, 0, 0, 0);
}
.fixed-position {
  position: fixed;
  right: 0px;
  bottom: 50vh;
}
/* .q-img__content > div:hover {
  opacity: 1!important;
  transition: all 0.5s ease-in-out;
} */
</style>