{
  // function with generics

  const createArray = (param: string): string[] => {
    return [param];
  };

  const createArrayWithGeneric = <T>(param: T): T[] => {
    return [param];
  };

  const res1 = createArray("Bangladesh");
  const resGeneric = createArrayWithGeneric<boolean>(true);
  const resGenericStr = createArrayWithGeneric<string>("Bangladesh");

  type User = { id: number; name: string };
  const resGenericObj = createArrayWithGeneric<User>({
    id: 22,
    name: "Mr. Pasha",
  });

  const createArrayWithTuple = <T, Q>(param1: T, param2: Q): [T, Q] => {
    return [param1, param2];
  };

  const res2 = createArrayWithTuple<string, number>("Bangladesh", 123);
  const res3 = createArrayWithTuple<string, { name: string }>("Bangladesh", {
    name: "Asia",
  });

  const addCourseToStudent = <T>(student: T) => {
    const course = "Next Level Web Development";

    return {
      ...student,
      course,
    };
  };

  const student1 = addCourseToStudent({
    name: "Mr. X",
    email: "x@x.xom",
    devType: "NLWd",
  });
  const student2 = addCourseToStudent({
    name: "Mr. Y",
    email: "y@x.xom",
    hasWatch: "NLWd",
  });
}
