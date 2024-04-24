import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

import BookSuzuha from '../components/books/adr-suzuha';
import BookEde from '../components/books/adr-ede';
import BookVdy from '../components/books/adr-vdy';

import { initDropdowns } from '../utilities/pure-dropdown';

export default class LivresController extends Controller {
  // 'latest', 'date', 'chrono'
  queryParams = ['sorting'];
  @tracked sorting = 'latest';

  books = [
    {
      id: 'suzuha',
      latest: 3,
      date: 2017,
      chrono: 784,
      component: BookSuzuha,
    },
    {
      id: 'ede',
      latest: 2,
      date: 2020,
      chrono: 782,
      component: BookEde,
    },
    {
      id: 'vdy',
      latest: 1,
      date: 2021,
      chrono: 682,
      component: BookVdy,
    },
  ];

  sortingTexts = {
    latest: 'Plus récent',
    date: 'Date de publication',
    chrono: 'Ordre chronologique',
  };

  @action initSortingDropdown() {
    initDropdowns();
  }
}
