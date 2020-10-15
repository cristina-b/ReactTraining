import React, {useState} from 'react';
import AllCourses from './allCourses';

const Courses = () => {

    const [courses, setCourseList] = useState([]);
    const [courseName, setName] = useState('');
   
    const saveCourseName = (e) => {
      setName(e.target.value);
    }
       
    const addToCourseList = () => {
      let allCourses = courses.concat( {courseName} );      
      setCourseList(allCourses);
    }
   
    const resetCourses = () => {
        setCourseList([]);
        setName('');
    }

    return (
      <div>
        <div>         
            <input type="text" value={courseName} onChange={saveCourseName} name="course name"/>      
            <button type="button" onClick={addToCourseList}>Add</button>
            <button type="button" onClick={resetCourses}>Reset</button>
        </div>        
        <AllCourses courses={courses}/>
      </div>
    );
  };

  export default Courses;