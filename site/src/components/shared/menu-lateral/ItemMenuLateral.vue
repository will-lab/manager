<template>
    <div>
        <a class="link" :href="link">{{ texto }}</a>
    </div>
</template>

<script>
export default {
  props: ["texto", "link"]
};
</script>

<style scoped>

.item-menu-lateral .link {
  color: white;
  text-decoration: none;
}
</style>
