<template>
    <div class="row justify-center items-center">
        <Parallex />
        <div style="background-color:rgba(0, 230, 118,1);">
            <Paragraph
                title="WHO AM I"
                info="Hello! My name is Theeramet Saengsin. You can call me METT! I like front-end developer.
                I have experience in Vue.js 2 years and I have been used another framework such as Angular React and React-native"
            />
        </div>
        <Paragraph class="col-12" title="Work" />
        <div class="col-12 row" style="padding:0 0 80px">
            <ImgCard class="col-12" :contain="true" img="/work/Advance-fiber/1.png" height="500px" />
            <ImgCard class="col-12" :contain="true" img="/work/Advance-fiber/1.png" height="500px" />
        </div>
    </div>
</template>

<style>
</style>

<script>
import Parallex from '../components/Parallex'
import Paragraph from '@/components/Paragraph'
import ImgCard from '@/components/ImgCard'
export default {
  components: {
    Parallex,
    Paragraph,
    ImgCard
  },
  data () {
    return {

    }
  }
}
</script>
