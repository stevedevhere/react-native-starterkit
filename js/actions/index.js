import * as types from '../constants/ActionTypes';

export const addData = payload => ({ type: types.ADD_DATA, payload });

// export function fetchApiAsync(path, subpath) {
//     return (dispatch, getState) => {
//       if (!getState().paragraphs[subpath]) {
//         fetch(`http://pdd.ua/api/${path}${subpath ? '/' + subpath + '/' : '/'}`, { //TODO: refactor this line
//           method: 'GET',
//           headers: {
//             Accept: 'application/json',
//             'Content-Type': 'application/json', //TODO: check what content type is good to use
//             Authorization: 'Basic YmFiaWNoOjEyMw==' //TODO: make config file w/ login and pass w/ 'base-64' module
//             //credentials: 'babich:123'
//           },
//         })
//           .then(res => res.json())
//           .then(json => {
//             if (subpath) {
//               dispatch({
//                 type: types.FETCH_PARAGRAPHS,
//                 payload: json.data
//               });
//             } else {
//               dispatch({
//                 type: types.FETCH_CHAPTERS,
//                 payload: json.data
//               });
//             }
//           })
//           .catch(e => e);
//     };
//   };
// }