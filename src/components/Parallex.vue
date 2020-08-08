<template>
    <div style="margin-top:-80px">
        <div>
            <q-img :src="require(`@/assets/img/${data.img}.jpg`)" height="100vh">
                <div class="items-center row" style="height: 100%;width: 100%;">
                    <div class="col-12 text-center row justify-center items-center">
                        <h5 class="col-12">MY NAME IS</h5>
                        <h2 class="col-12 text-green-13">
                            <span class="typed-text">{{typeValue}}</span>
                            <span class="cursor" :class="{'typing': typeStatus}">&nbsp;</span>
                        </h2>
                        <div class="line col-8"></div>
                        <h4 class="col-12">FONT-END DEVELOPER</h4>
                        <q-btn outline style="margin-top:10px" size="lg" color="green-13" @click="ScrollToWork">
                            <h5 class>View my work</h5>
                        </q-btn>
                    </div>
                </div>
            </q-img>
        </div>
    </div>
</template>
<script>
export default {
  data: () => {
    return {
      data: {
        img: 'Main-2',
      },
      scrollInfo: {},
      typeValue: '',
      typeStatus: false,
      typeArray: ['THEERAMET SAENGSIN 😀', 'ธีรเมธ แสงสิน', 'SHINCHAN 🥺'],
      typingSpeed: 150,
      erasingSpeed: 100,
      newTextDelay: 2000,
      typeArrayIndex: 0,
      charIndex: 0
    }
  },
  methods: {
    ScrollToWork () {
      document.getElementById('about').scrollIntoView({
        behavior: 'smooth'
      })
    },
    typeText () {
      if (this.charIndex < this.typeArray[this.typeArrayIndex].length) {
        if (!this.typeStatus)
          this.typeStatus = true;
        this.typeValue += this.typeArray[this.typeArrayIndex].charAt(this.charIndex)
        this.charIndex += 1
        setTimeout(this.typeText, this.typingSpeed)
      }
      else {
        this.typeStatus = false
        setTimeout(this.eraseText, this.newTextDelay)
      }
    },
    eraseText () {
      if (this.charIndex > 0) {
        if (!this.typeStatus)
          this.typeStatus = true
        this.typeValue = this.typeArray[this.typeArrayIndex].substring(0, this.charIndex - 1)
        this.charIndex -= 1
        setTimeout(this.eraseText, this.erasingSpeed)
      }
      else {
        this.typeStatus = false;
        this.typeArrayIndex += 1;
        if (this.typeArrayIndex >= this.typeArray.length)
          this.typeArrayIndex = 0
        setTimeout(this.typeText, this.typingSpeed + 1000);
      }
    }
  },
  created () {
    setTimeout(this.typeText, this.newTextDelay + 200)
  }
}
</script>
<style scoped>
span.cursor {
  display: inline-block;
  margin-left: 3px;
  width: 4px;
  height: 50px;
  background-color: #fff;
  animation: cursorBlink 1s infinite;
}
span.cursor.typing {
  animation: none;
}
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
}
.q-btn {
  text-transform: none !important;
}
@keyframes cursorBlink {
  49% {
    background-color: #fff;
  }
  50% {
    background-color: transparent;
  }
  99% {
    background-color: transparent;
  }
}
</style>