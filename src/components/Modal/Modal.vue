<template>
    <div class="modals">
        <div class="modals__content">
            <div class="modals__body">
                <h1>Информация! {{ text }}</h1>
                <slot></slot>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: "Modal",
  props: {
    text: {
      text: String,
    },
  }
}
</script>
<style lang="scss" scoped>
    @import "Modal";
</style>