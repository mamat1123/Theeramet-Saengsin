<template>
    <div class="row justify-center items-center" style="padding:90px 0">
        <div class="col-12 text-center">
            <h1>{{title}}</h1>
        </div>
        <div class="col-10 text-center" style="padding:20px 0 0">
            <h5 style="color:#232020">{{info}}</h5>
        </div>
    </div>
</template>

<script>
export default {
  props: ['title', 'info']
}
</script>

<style>
</style>