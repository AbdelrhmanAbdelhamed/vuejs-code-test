<script>
import { getNestedValue } from '@/utils';

export default {
  name: 'Row',
  functional: true,
  props: {
    headers: Array,
    item: Object,
  },
  render(createElement, { props, data }) {
    const { item, headers } = props;
    const columns = headers.map((header) => {
      const children = [];
      const value = getNestedValue(item, header.value);

      const slotName = header.value;
      const scopedSlot = data.scopedSlots && data.scopedSlots[slotName];

      if (scopedSlot) {
        children.push(scopedSlot({ item, header, value }));
      } else {
        children.push(value != null ? String(value) : value);
      }

      return createElement('td', {
      }, children);
    });

    return createElement('tr', data, columns);
  },
};
</script>
