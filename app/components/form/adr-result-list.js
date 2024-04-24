import Component from '@glimmer/component';

export default class FormAdrResultListComponent extends Component {
  bookListing = [
    {
      id: 'suzuha',
      title: 'Suzuha',
    },
    {
      id: 'ede',
      title: "L'Enfant des Esprits",
    },
    {
      id: 'vdy',
      title: 'Le Voeu de Yoko',
    },
  ];

  get results() {
    if (!this.score) {
      return [
        { id: 'suzuha', value: 1 },
        { id: 'ede', value: 2 },
        { id: 'vdy', value: 3 },
      ];
    }
    // Transform the score dictionary into an array
    let results = [];
    for (let [key, value] of Object.entries(this.score)) {
      results.push({
        id: key,
        value,
      });
    }
    // Sort the array by score
    return results.sort((a, b) => b.value - a.value);
  }

  get score() {
    return this.args.score ? JSON.parse(this.args.score) : undefined;
  }
}
