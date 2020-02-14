<template>
  <div>
    <slot name="activator" :toggleShow="toggleShow" :on="on"></slot>

    <div class="modal" :class="{ 'is-active': isShowing }">
      <div class="modal-background"></div>

      <div class="modal-card">
        <header class="modal-card-head">
          <p v-if="title" class="modal-card-title">{{ title }}</p>
          <button class="delete" @click="toggleShow" aria-label="close"></button>
        </header>

        <section v-if="hasSlot()" class="modal-card-body">
          <slot></slot>
        </section>

        <footer v-if="hasSlot('footer')" class="modal-card-foot">
          <slot name="footer" :toggleShow="toggleShow"></slot>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
import toggleable from '@/mixins/toggleable';

export default {
  name: 'modal',
  mixins: [toggleable],
  model: {
    prop: 'isShowing',
    event: 'click',
  },
  props: {
    title: {
      type: String,
      required: false,
    },
  },
  data() {
    return {
      on: {
        click: () => {
          this.toggleShow();
        },
      },
    };
  },
  methods: {
    hasSlot(name = 'default') {
      return !!this.$slots[name] || !!this.$scopedSlots[name];
    },
  },
};
</script>
