import { listOfLists } from './index';

export default function updateStoredList() {
  localStorage.setItem('listOfLists', JSON.stringify(listOfLists));
}
