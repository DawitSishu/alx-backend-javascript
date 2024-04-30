const getListStudentIds = (myArray) => {
    if (!Array.isArray(myArray)) {
      return [];
    }
    return myArray.map((std) => std.id);
  };
  
  export default getListStudentIds;