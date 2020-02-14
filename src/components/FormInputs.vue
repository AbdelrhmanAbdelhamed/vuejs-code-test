<template>
  <div>
    <BaseInput
      v-for="(value, key) in sourceItem"
      :label="key | startCase"
      :key="key"
      v-model="sourceItem[key]"
    />
  </div>
</template>

<script>
export default {
  props: {
    sourceItem: {
      type: Object,
      required: true,
    },
  },
};
</script>
