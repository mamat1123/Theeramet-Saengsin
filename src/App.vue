<template>
    <q-layout view="lHh Lpr lFf">
        <Toolbar />
        <q-page-container>
            <router-view />
        </q-page-container>
    </q-layout>
</template>

<script>
import Toolbar from './components/Toolbar'
export default {
  components: {
    Toolbar
  }
}
</script>

<style>
@media screen and (max-device-width: 767px),
  screen and (max-width: 767px) {
  h1 {
    font-size: 60px !important;
  }
}
</style>
