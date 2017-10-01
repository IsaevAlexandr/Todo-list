<template lang='pug'>
    .wrap
        h1 {{title}}
        button(
            type='button'
            @click='$router.go(-1)'
        ) Back
</template>

<script>
export default {
    data: function () {
            return {
                title: this.$route.params.title
            }
        }
}
</script>

<style>

</style>
