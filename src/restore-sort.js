import { sortableInstances } from './index';

export default function restoreSort() {
  for (const sortable in sortableInstances) {
    const jsonOrder = localStorage.getItem(`${sortable}Order`);
    if (jsonOrder) {
      const newOrder = JSON.parse(jsonOrder);
      sortableInstances[sortable].sort(newOrder);
    }
  }
}
