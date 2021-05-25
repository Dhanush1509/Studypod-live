import React, { useReducer } from "react";
import ClassContext from "./classContext";
import ClassReducer from "./classReducer";
import { GET_FACULTY, GET_FACULTY_ERROR,GET_CLASSES,GET_CLASSES_ERROR,SET_TAB_INDEX,SET_TABLE_INDEX,SET_FORM_DATA,REMOVE_EDIT } from "../types";
import axios from "axios";
const ClassState = ({ children }) => {
  const initialState = {
    faculties: null,
    tableIndex: 1,
    tabIndex: 1,
    error: null,classes:null,formData:null,edit:true
  };
  const [state, dispatch] = useReducer(ClassReducer, initialState);

  const getFaculties = async () => {
    try {
      const { data } = await axios.get(
        "https://studypodapi.askiitians.com/admin/dashboard/classes/getFaculties"
      );
      dispatch({ type: GET_FACULTY, payload: data });
    } catch (err) {
      dispatch({
        type: GET_FACULTY_ERROR,
        payload:
          err.response && err.response.data.msg
            ? err.response.data.msg
            : err.response,
      });
    }
  };
  const getClasses=async(formData)=>{
    console.log(formData)
     const config = {
       headers: {
         "Content-Type": "application/json",
       },
     };
     try {
       const { data } = await axios.post(
         "https://studypodapi.askiitians.com/admin/dashboard/classes/filterClasses",
         formData,
         config
       );
       dispatch({ type: GET_CLASSES, payload: data });
    
     } catch (err) {
       dispatch({
         type: GET_CLASSES_ERROR,
         payload:
           err.response && err.response.data.msg
             ? err.response.data.msg
             : err.response,
       });
     }
  }
  const setTabIndex=(i) => {
dispatch({type:SET_TAB_INDEX, payload: i})
  }
   const setTableIndex = (i) => {
     dispatch({ type: SET_TABLE_INDEX, payload: i });
   };
   const removeEdit=() => {
     dispatch({ type: REMOVE_EDIT})
   }
   const setFormData = (formData) => {
   dispatch({ type: SET_FORM_DATA, payload: formData });
   }
  return (
    <ClassContext.Provider
      value={{
        faculties: state.faculties,
        getFaculties,
        getClasses,
        tabIndex: state.tabIndex,
        tableIndex: state.tableIndex,
        error: state.error,
        classesInState: state.classes,
        setTabIndex,
        setTableIndex,removeEdit,edit:state.edit,
        formData:state.formData,
        setFormData
      }}
    >
      {children}
    </ClassContext.Provider>
  );
};

export default ClassState;
