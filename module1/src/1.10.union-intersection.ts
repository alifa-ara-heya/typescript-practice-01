{
  // union type

  type Ions = "cation" | "anion"; //string literal type
  type FrontendDev = "react dev" | "javascript dev";
  type FullStackDev = "frontend dev" | "backend dev";
  type Developer = FrontendDev | FullStackDev;

  const newIons: Ions = "anion";

  type User = {
    name: string;
    email?: string;
    gender: "male" | "female";
    bloodGroup: "O+" | "A+" | "AB+";
  };

  const user1: User = {
    name: "Sakib",
    gender: "male",
    bloodGroup: "O+",
  };

  //   intersection type

  type FrontendDeveloper = {
    skills: string[];
    designation1: "Frontend Developer";
  };

  type BackendDeveloper = {
    skills: string[];
    designation2: "Backend Developer";
  };

  type FullStackDeveloper = FrontendDeveloper & BackendDeveloper;

  const fullStackDeveloper: FullStackDeveloper = {
    skills: ["HTML", "CSS", "Express"],
    designation1: "Frontend Developer",
    designation2: "Backend Developer",
  };
}
