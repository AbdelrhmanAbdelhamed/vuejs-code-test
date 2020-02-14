<template>
  <div>
    <progress
     class="progress is-small is-primary"
     :class="{ [loadingClass]: loading }"
     v-if="loading"
    >
    </progress>

    <table class="table is-fullwidth">
      <thead>
        <slot name="header">
          <tr>
            <th v-for="(header, index) in headers" :key="index">
              {{ header.text }}
            </th>
          </tr>
        </slot>
      </thead>

      <tbody>
        <slot name="body">
          <template v-for="item in items">
            <data-table-row :item="item" :headers="headers" :key="item.id">
              <template v-for="(_, slotName) in $scopedSlots" #[slotName]>
                <slot :name="slotName" :item="item" :header="slotName" :value="item[slotName]" />
              </template>
            </data-table-row>
          </template>
        </slot>
      </tbody>

    </table>

    <div class="column">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
import loadable from '@/mixins/loadable';
import DataTableRow from './DataTableRow.vue';

export default {
  components: {
    DataTableRow,
  },
  mixins: [
    loadable,
  ],
  props: {
    headers: {
      type: Array,
      required: true,
    },
    items: {
      type: Array,
      required: true,
    },
    loading: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
};
</script>
