<template>
    <q-layout style="height:2000px">
        <q-header elevated>
            <Toolbar />
        </q-header>
        <router-view />
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
