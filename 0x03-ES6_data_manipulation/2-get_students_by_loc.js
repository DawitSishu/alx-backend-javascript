const getStudentsByLocation = (students, city) => {
    const arratyObjec = students.filter((fun) => fun.location === city);
    return arratyObjec;
  };
  
  export default getStudentsByLocation;