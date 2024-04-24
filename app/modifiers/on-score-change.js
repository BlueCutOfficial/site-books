import { modifier } from 'ember-modifier';

const position1 = '0px';
const position2 = '50px';
const position3 = '100px';

const bookPosition = (results, bookId) => {
  // Find the first (and only) element corresponding to the bookId in the results array
  let resultItem = results.find(({ id }) => id === bookId);
  // Find the first element with the same score as the found book
  let firstScoreItem = results.find(({ value }) => resultItem.value === value);
  // Then return the index of this element + 1 to get its position
  return {
    // The rank is the actual rank related to the score
    rank: results.indexOf(firstScoreItem) + 1,
    // The position id for the display order of the boxes
    position: results.indexOf(resultItem) + 1,
  };
};

export default modifier(function onScoreChange(element, [results, bookItem]) {
  let ranking = bookPosition(results, bookItem.id);
  let marginValue = position1;
  switch (ranking.position) {
    case 2:
      marginValue = position2;
      break;
    case 3:
      marginValue = position3;
      break;
  }
  element.style['margin-top'] = marginValue;
  element.innerHTML = `${ranking.rank}. ${bookItem.title}`;
});
