import Sortable from 'sortablejs';

const tabList = document.querySelector('nav.side-links');
Sortable.create(tabList, {
  animation: 150,
  ghostClass: 'dragging',
  swapThreshold: 0.2,
});
