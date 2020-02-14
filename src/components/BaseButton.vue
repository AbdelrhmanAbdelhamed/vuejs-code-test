<template>
  <button
    class="button"
    :class="{
     [colorClass]: color,
     [roundedClass]: isRounded,
     [loadingClass]: loading,
     [sizeClass]: size
    }"
    v-bind="$attrs"
    v-on="listeners"
  >
    <slot></slot>
  </button>
</template>

<script>
import colorable from '@/mixins/colorable';
import roundable from '@/mixins/roundable';
import loadable from '@/mixins/loadable';
import sizeable from '@/mixins/sizeable';
import routeable from '@/mixins/routeable';

export default {
  inheritAttrs: false,
  mixins: [
    colorable,
    roundable,
    loadable,
    sizeable,
    routeable,
  ],
  computed: {
    listeners() {
      return {
        ...this.$listeners,
        click: this.onClick,
      };
    },
  },
  methods: {
    onClick() {
      this.$emit('click');
      this.goToRoute();
    },
  },
};
</script>
