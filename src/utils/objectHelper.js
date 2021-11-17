export const updateObjectInArray = (items, itemId, objectPropsName, newObjectProps) => 
items.map(el=>el[objectPropsName]===itemId ? {...el, ...newObjectProps} : el)
