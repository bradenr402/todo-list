import Sortable from 'sortablejs';
import { sortableInstances } from './index';

export default function makeTabsSortable() {
  const tabList = document.querySelector('nav.side-links');
  // Sortable.create(tabList, {
  //   animation: 150,
  //   ghostClass: 'dragging',
  //   swapThreshold: 0.2,
  // });

  sortableInstances['tabListSortable'] = Sortable.create(tabList, {
    animation: 150,
    ghostClass: 'dragging',
    swapThreshold: 0.2,
    onSort: function () {
      const newOrder = sortableInstances['tabListSortable'].toArray();
      const jsonOrder = JSON.stringify(newOrder);
      localStorage.setItem('tabListSortableOrder', jsonOrder);
    },
  });
}
