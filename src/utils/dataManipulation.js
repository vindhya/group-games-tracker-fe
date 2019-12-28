import sortBy from 'lodash/sortBy';

export const graphable = objData => {
  return Object.keys(objData).map(player => ({
    name: player,
    count: objData[player]
  }));
};

export const orderDesc = arrayData => {
  return sortBy(arrayData, o => -o.count);
};
