<template>
  <div class="field is-horizontal">
    <div class="field-label is-normal" v-if="label">
      <label class="label">{{ label }}</label>
    </div>
    <div class="field-body">
      <div class="field">
        <p class="control">
          <input
            class="input"
            :class="{ [colorClass]: color }"
            v-bind="$attrs"
            v-on="listeners"
          />
      <slot name="message">
        <p class="help" v-if="message">
          {{ message }}
        </p>
      </slot>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import colorable from '@/mixins/colorable';

export default {
  inheritAttrs: false,
  mixins: [colorable],
  props: ['label', 'message'],
  data() {
    return {
      value: '',
    };
  },
  computed: {
    listeners() {
      return {
        ...this.$listeners,
        input: (event) => this.$emit('input', event.target.value),
      };
    },
  },
};
</script>
