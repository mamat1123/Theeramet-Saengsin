<template>
    <div class="size-page row text-center items-center" id="about">
        <h1 class="col-12 text-black">WHO I AM ?</h1>
        <div class="col-12 row items-center justify-center">
            <h5 class="col-8" style="color:#232020">
                Hello! My name is Theeramet Saengsin. You can call me METT! I like front-end developer.
                I have experience in Vue.js 2 years and I have been used another framework such as Angular React and React-native
            </h5>
        </div>
        <div class="col-12 row items-center justify-center text-center">
            <div class="col-8 row">
                <div class="col-6">
                    <q-img
                        class="card-hover"
                        height="600px"
                        src="https://image.freepik.com/free-photo/close-up-image-programer-working-his-desk-office_1098-18707.jpg"
                    >
                        <div class="absolute-full flex flex-center">
                            <h3>WEB</h3>
                        </div>
                    </q-img>
                </div>
                <div class="col-6">
                    <q-img
                        class="card-hover"
                        height="600px"
                        src="https://image.freepik.com/free-photo/discussing-mobile-app_1098-18640.jpg"
                    >
                        <div class="absolute-full flex flex-center">
                            <h3>MOBILE</h3>
                        </div>
                    </q-img>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.q-img__content > div:hover {
  background-color: rgba(255, 255, 255, 0.8);
  color: black;
  transition: all 0.5s ease;
  -webkit-transition: all 0.5s ease;
  -moz-transition: all 0.5s ease;
  border: 3px solid black;
}
.size-page {
  height: calc(100vh - 80px);
}
</style>