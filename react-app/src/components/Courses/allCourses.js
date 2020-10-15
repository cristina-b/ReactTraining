import React from 'react';

const AllCourses = (props) => {    
    const {courses} =  props;
   
return (<ul>
          {courses.map((x) => (
            <li key={x.courseName}>Course name: {x.courseName}</li>
          ))}
        </ul>);
    };

export default AllCourses;