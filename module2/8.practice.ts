/* Intersection Types
Objective: Practice using intersection types.

Instructions:

Create a type AdminUser that is an intersection of:
User with properties name and email
Admin with property adminLevel
Write a function describeAdmin(user: AdminUser): string that returns a description of the admin user. */

type User = {
  name: string;
  email: string;
};

type Admin = User & { adminLevel: string };

type AdminUser = User & Admin;

const describeAdmin = (user: AdminUser): string => {
  return `${user.name} (${user.email}) is an admin with level ${user.adminLevel}`;
};

const admin1: AdminUser = {
  name: "ayesha",
  email: "ayesha@sl.com",
  adminLevel: "super",
};

console.log(describeAdmin(admin1));
