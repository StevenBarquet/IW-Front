// Dependencies
import * as _ from "underscore";

export const getItemByAttr = (list, item) => {
  return _.findWhere(list, item);
};

export const replaceObject = (list, item, newItem) => {
  return _.map(list, (o) => {
    if (_.isMatch(o, item)) {
      return newItem;
    }
    return o;
  });
};

export const removeItem = (list, item) => {
  const elements = _.where(list, item);

  if (elements && elements.length > 0) {
    let listElements = list;

    elements.forEach((e) => {
      listElements = _.without(listElements, e);
    });
    return listElements;
  }
  return list;
};
