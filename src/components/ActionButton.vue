<template>
  <Dialog :title="dialogTitle">
    <template #activator="{ toggleShow, on }">
      <base-button
       v-on="on"
       @click="onClick(toggleShow, item)"
       v-bind="$attrs"
       >
        <slot> </slot>
      </base-button>
    </template>

    <slot name="dialogBody"></slot>

    <template #footer="{ toggleShow }">
      <base-button
        :loading="loading"
        :disabled="loading"
        :color="confirmButtonColor"
        @click="onClickConfirm(toggleShow, item)"
      >
        {{ confirmButtonText }}
      </base-button>
      <base-button
        :color="cancelButtonColor"
        @click="toggleShow"
      >
        {{ cancelButtonText }}
      </base-button>
    </template>
  </Dialog>
</template>

<script>
import Dialog from '@/components/Dialog.vue';

export default {
  components: { Dialog },
  inheritAttrs: false,
  props: {
    item: {
      type: Object,
      required: true,
    },
    dialogTitle: {
      type: String,
      required: false,
    },
    confirmButtonText: {
      type: String,
      required: false,
      default: 'Confirm',
    },
    confirmButtonColor: {
      type: String,
      required: false,
      default: 'danger',
    },
    cancelButtonText: {
      type: String,
      required: false,
      default: 'Cancel',
    },
    cancelButtonColor: {
      type: String,
      required: false,
      default: 'dark',
    },
  },
  data() {
    return {
      loading: false,
    };
  },
  methods: {
    toggleLoading() {
      this.loading = !this.loading;
    },
    onClick(toggleShow, item) {
      this.$emit('click', {
        toggleShow,
        item,
      });
    },
    onClickConfirm(toggleShow, item) {
      this.$emit('click:confirm', {
        toggleShow,
        item,
        toggleLoading: this.toggleLoading,
      });
    },
    onClickCancel(toggleShow) {
      this.$emit('click:cancel', { toggleShow });
      this.toggleShow();
    },
  },
};
</script>
