<template>
    <div>
        <div class="row justify-between">
            <q-parallax :src="require(`@/assets/img/${data.img}.jpg`)" :height="800" :speed="2">
                <h5>MY NAME IS</h5>
                <h2>THEERAMET SAENGSIN</h2>
                <div class="line"></div>
                <h4>FONT-END DEVELOPER</h4>
                <q-btn
                    outline
                    style="color: white;margin-top:10px"
                    label="View my work"
                    size="lg"
                    @click="ScrollToWork"
                />
            </q-parallax>
            {{scrollInfo}}
        </div>
    </div>
</template>
<script>
export default {
  data () {
    return {
      data: {
        img: 'Main-2',
        title: 'Hello, Im THEERAMET SAENGSIN Im a front-end developer'
      },
      scrollInfo: {}
    }
  },
  methods: {
    ScrollToWork () {
      // window.scrollTo({
      //   top: 800,
      //   behavior: "smooth"
      // });
    }
  }
}
</script>
<style scoped>
>>> .q-parallax__content {
  background-color: hsla(0, 15%, 0%, 0.65);
  /* position: fixed; */
}
>>> .q-parallax__media {
  -webkit-filter: blur(3px);
  -moz-filter: blur(3px);
  -o-filter: blur(3px);
  -ms-filter: blur(3px);
  filter: blur(3px);
  /* position: fixed; */
}
.line {
  margin: 20px;
  border-bottom: 1px solid #fff;
  width: 50%;
}
.q-btn {
  text-transform: none !important;
}
</style>