import {
  ADD_BLAH,
  DELETE_BLAH,
  ADD_VALUE,
} from '../actions/blahActions.js'

const initialState = {
  blah:[],
  a:true,
  b:1,
  c:{
    d:"blah"
  },
}

const blahReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BLAH:
      let newList = state.blah.concat([action.text])

      return Object.assign({}, state, { blah:newList } )

    case ADD_VALUE:
      return Object.assign({}, state, { blah: state.blah.concat([action.text]) } )

    case DELETE_BLAH:
      //filter takes in a function to be called on each item in list,
      //if the function returns true for that item, keep it, otherwise, remove it
      let filteredList = state.blah.filter((text) => {
        if(text !== action.value)
          return true
        return false
      })

      return Object.assign({}, state, {blah:filteredList})

    default:
      return state
  }
}

export default blahReducer