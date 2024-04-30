const getStudentIdsSum = (students) => {
  const id = students.reduce((acc, val) => acc + val.id, 0);
  return id;
};

export default getStudentIdsSum;
