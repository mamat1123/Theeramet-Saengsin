<template>
    <div>
        <q-header elevated :style="`background-color: ${scrollInfo === 0 ? 'rgba(0,0,0,0);' :'rgba(0, 230, 118,1);'}`">
            <q-scroll-observer @scroll="onScroll" />
            <q-toolbar style="height:80px;padding:0px" class="justify-center">
                <q-tabs no-caps v-model="tab" shrink>
                    <q-tab name="about">
                        <h5 :class="{'color-tab':scrollInfo !== 0}">About</h5>
                    </q-tab>
                    <q-tab name="work">
                        <h5 :class="{'color-tab':scrollInfo !== 0}">Project</h5>
                    </q-tab>
                    <q-tab name="work">
                        <h5 :class="{'color-tab':scrollInfo !== 0}">Work</h5>
                    </q-tab>
                    <q-avatar size="70px">
                        <img :src="require('@/assets/img/logo.jpg')" />
                    </q-avatar>
                    <q-tab name="about">
                        <h5 :class="{'color-tab':scrollInfo !== 0}">Skills</h5>
                    </q-tab>
                    <q-tab name="work">
                        <h5 :class="{'color-tab':scrollInfo !== 0}">Education</h5>
                    </q-tab>
                    <q-tab name="work">
                        <h5 :class="{'color-tab':scrollInfo !== 0}">Contact</h5>
                    </q-tab>
                </q-tabs>
            </q-toolbar>
        </q-header>
    </div>
</template>

<script>
export default {
  data () {
    return {
      drawer: false,
      scrollInfo: {},
    }
  },
  methods: {
    CloseNavigation (value) {
      this.drawer = value
    },
    OpenNavigation () {
      this.drawer = true
      this.$refs.Navigation.SetLine()
    },
    onScroll (info) {
      this.scrollInfo = info.position
    }
  }
}
</script>

<style scoped>
.color-tab {
  color: #232020;
}
.toolbar-logo {
  height: 33px;
  width: 218px;
}
.logo {
  display: flex;
  align-items: center;
  justify-content: center;
}
.menu {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.menu-size {
  height: 100%;
  width: 80px;
  display: flex;
  justify-content: center;
  background: #0039ff;
}
.menu-text {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
>>> .q-layout__shadow:after {
  box-shadow: none;
}
</style>
