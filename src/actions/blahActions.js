/*
 * action types
 */

export const ADD_BLAH = 'ADD_BLAH'
export const ADD_VALUE = 'ADD_VALUE'
export const DELETE_BLAH = 'DELETE_BLAH'

/*
 * action creators
 */

 export function addBlah() {
  return { type: ADD_BLAH, text:"blah", }
}

export function addValue(value) {
 return { type: ADD_VALUE, text:value, }
}

export function deleteBlah(value) {
  return { type: DELETE_BLAH, value: value }
}