import {GET_FACULTY,GET_FACULTY_ERROR,GET_CLASSES,GET_CLASSES_ERROR,SET_TAB_INDEX,SET_TABLE_INDEX,SET_FORM_DATA,REMOVE_EDIT} from "../types"
const classReducer=(state,action) =>{
    switch (action.type) {
      case GET_FACULTY:
        return { ...state, faculties: action.payload };
      case GET_CLASSES:
        return { ...state, classes: action.payload };
      case SET_TABLE_INDEX:
        return { ...state, tableIndex: action.payload };
      case SET_TAB_INDEX:
        return { ...state, tabIndex: action.payload };
      case GET_FACULTY_ERROR:
      case GET_CLASSES_ERROR:
        return { ...state, error: action.payload };
        case SET_FORM_DATA:
            return {...state, formData: action.payload}
            case REMOVE_EDIT:
                return { ...state,edit:!state.edit}
      default:
        return state;
    }
}
export default classReducer;