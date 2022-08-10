<template>
    <div>
        Index
        <router-link :to="{name: 'fruit.index'}">List</router-link>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: "Index",
    }
</script>

<style lang="scss" scoped>

</style>
