export default function catalogs(state = [], action) {
  switch (action.type) {
    case 'ADD_CATALOG':
      return [...state];
    case 'ADD_CATALOG_SUCCEEDED':
      return [...state, { catalog: action.catalog, message: null }];
    case 'ADD_CATALOG_FAILED':
      return [...state, { catalog: null, message: action.message }];
    case 'LIST_CATALOG':
      return [...state, { catalog: action.catalog }];
    default:
        
      return state;
  }
}
