import React from 'react';

const AllCourses = (props) => {    
    const {courses} =  props;
   
return (<ul>
          {courses.map((x, k) => (
            <li key={k}>Course name: {x}</li>
          ))}
        </ul>);
    };

export default AllCourses;