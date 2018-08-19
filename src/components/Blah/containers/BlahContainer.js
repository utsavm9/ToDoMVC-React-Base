import { connect } from 'react-redux'
import Blah from '../components/Blah.js'
import {addBlah, deleteBlah, addValue} from '../../../actions/blahActions.js'

const mapStateToProps = (state, ownProps) => {
    console.log("state", state)
    return {
        blah:state.blahReducer.blah,
        blah2:state.blah2,
    }
}

/*
if you like destruction, use this instead of the above one
const mapStateToProps = ({blahReducer}, ownProps) => {
    return {
        blah:blahReducer.blah,
        blah2:blahReducer.a,
    }
}
*/

const mapDispatchToProps = () => {
    return {
        addBlah: ()=>{
            dispatchEvent(addBlah())
        },
        addValue: (value)=>{
            dispatchEvent(addValue(value))
        },
        deleteBlah: (blah) => {
            dispatchEvent(deleteBlah(blah))
        },
    }
}

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(Blah)

export default VisibleTodoList