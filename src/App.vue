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

<style scoped>
</style>
