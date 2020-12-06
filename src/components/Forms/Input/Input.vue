<template>
    <div class="form-group login__item">
        <label>{{ label }}</label>
        <input
            :type="type"
            v-model="content"
            @input="handleInput"
            required
        />
    </div>
</template>
<script>
export default {
  name: "Input",
  data: function() {
    return {
      content: this.content
    }
  },
  props: {
    label: {
      label: String
    },
    type: {
      type: String,
      required: false,
      default: () => "text"
    }
  },
  methods: {
    handleInput() {
      this.$emit("input", this.content);
    }
  }
}
</script>