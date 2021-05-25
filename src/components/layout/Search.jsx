import React, { useContext, useEffect, useState } from "react";
import ClassContext from "../context/information/classContext";
import { Form } from "react-bootstrap";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import moment from "moment";
const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 220,
  },
}));
const Search = () => {
  const classes = useStyles();
  const { getFaculties, faculties, getClasses,tabIndex,setFormData} = useContext(ClassContext);
  useEffect(() => {
    getFaculties();
  }, []);


  
  const now = moment(Date.now()).format(); 
  const [time, setTime] = useState(now);
 
console.log(time)
const todayDate =time.substring(0,16)

console.log(todayDate)

  const [faculty, setFaculty] = useState("Select..");
  const [grade, setGrade] = useState("Select..");
  const [startDate, setStartDate] = useState(todayDate);//"2021-03-07T12:00:00.000Z"
  const [endDate, setEndDate] = useState(todayDate);
  const handleChange = (e) => {
    setFaculty(e.target.value);
  };
  const handleGradeChange = (e) => {
    setGrade(e.target.value);
  };
  const handleStartDate = (e) => {
    setStartDate(e.target.value);
  };
  const handleEndDate = (e) => {
    checkDate(e.target.value);
   

  };
  const checkDate=(d)=>{
    var d1 = new Date(startDate);
var d2 = new Date(d);
if(d2<=d1){
 setEndDate(todayDate);
}else{
 setEndDate(d);
}

  }
  const handleClick = () => {
    getClasses({
      instructorName: faculty !== "Select.." ? faculty : "",
      beginDateTime:startDate===todayDate?"":startDate ,
      endDateTime: endDate===todayDate?"":endDate,
      standard: grade !== "Select.." ? Number(grade) : "",
      limit:1000
    });
    setFormData({
      instructorName: faculty !== "Select.." ? faculty : "",
      beginDateTime: startDate ? startDate : "",
      endDateTime: endDate ? endDate : "",
      standard: grade !== "Select.." ? Number(grade) : "",
    });
  };


  return tabIndex===1?<div className="form-field">
      <h5>Search For Class</h5>
      <div className="search">
        <div className="topSearch">
          <div className="form-items">
            <Form>
              <Form.Group controlId="exampleForm.SelectCustomSizeSm">
                <Form.Label>Choose Instructor</Form.Label>
                <br />
                <Form.Control
                  as="select"
                  size="sm"
                  custom
                  onChange={handleChange}
                  value={faculty}
                  className="form-select"
                >
                  <option>Select..</option>
                  {faculties &&
                    faculties.faculties.length > 0 &&
                    faculties.faculties.map(
                      (f, index) => f && <option key={index}>{f}</option>
                    )}
                </Form.Control>
              </Form.Group>
            </Form>
          </div>
          <div className="form-items">
            <Form>
              <Form.Group controlId="exampleForm.SelectCustomSizeSm">
                <Form.Label>Start Date</Form.Label>
                <br />
                <form className={classes.container} noValidate>
                  <TextField
                    id="datetime-local"
                    type="datetime-local"
               
                    className={classes.textField}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    onChange={handleStartDate}
                    value={startDate}
                  />
                </form>
              </Form.Group>
            </Form>
          </div>
          <div className="form-items">
            <Form>
              <Form.Group controlId="exampleForm.SelectCustomSizeSm">
                <Form.Label>End Date</Form.Label>
                <br />
                <form className={classes.container} noValidate>
                  <TextField
                    id="datetime-local"
                    type="datetime-local"
               
                    className={classes.textField}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    onChange={handleEndDate}
                    value={endDate}
                  />
                </form>
              </Form.Group>
            </Form>
          </div>
          <div className="form-items">
            <button className="appbar__button" onClick={handleClick}>
              Search
            </button>
          </div>
        </div>
        <div>
          <Form>
            <Form.Group controlId="exampleForm.SelectCustomSizeSm">
              <Form.Label>Choose Grade</Form.Label>
              <br />
              <Form.Control
                as="select"
                size="sm"
                custom
                onChange={handleGradeChange}
                value={grade}
                className="form-select"
              >
                <option>Select..</option>
                {["6", "7", "8", "9", "10", "11", "12"].map((f, index) => (
                  <option key={index}>{f}</option>
                ))}
              </Form.Control>
            </Form.Group>
          </Form>
        </div>
      </div>
    </div>:<></>
                }


export default Search;
