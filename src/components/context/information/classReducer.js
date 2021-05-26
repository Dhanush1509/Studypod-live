import {GET_FACULTY,GET_FACULTY_ERROR,GET_CLASSES,GET_CLASSES_ERROR,SET_TAB_INDEX,SET_TABLE_INDEX,REMOVE_EDIT} from "../types"
const classReducer=(state,action) =>{
    switch (action.type) {
      case GET_FACULTY:
        return { ...state, faculties: action.payload };
      case GET_CLASSES:
        return { ...state, classes: action.payload,checkboxes:[] };
      case SET_TABLE_INDEX:
        return { ...state, tableIndex: action.payload,checkboxes:[] };
      case SET_TAB_INDEX:
        return { ...state, tabIndex: action.payload };
      case GET_FACULTY_ERROR:
      case GET_CLASSES_ERROR:
        return { ...state, error: action.payload };
     
            case REMOVE_EDIT:
                      console.log(action.payload)
    
      if(state.checkboxes.length===0){
         state.checkboxes.push(action.payload);
        return { ...state, edit: "false" };
      }
      else{
     const find = state.checkboxes.indexOf(action.payload);
      console.log(find)
      if (find > -1) {
        state.checkboxes = state.checkboxes.filter((s) => s !== action.payload);
        return { ...state, edit: "true" };
      } else {
        state.checkboxes.push(action.payload);
        return { ...state, edit: "false" };
      }
      }
      default:
        return state;
    }
}
export default classReducer;