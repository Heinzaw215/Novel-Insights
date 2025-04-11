interface User {
  id: number;
  name: string;
  userName: string;
  email: string;
  password: string;
  dateOfBirth: Date;
  isAdmin: boolean;
  profilePicture?: string;
  phoneNumber?: string;
  address?: string;
  bio?: string;
}

const userList: User[] = [
  {
    id: 0,
    name: "Dave John",
    userName: "Dave_John",
    email: "Dave.John@example.com",
    password: "daveJohn345",
    dateOfBirth: new Date(2006, 9, 23), // 23-10-2006
    isAdmin: true,
  },
  {
    id: 1,
    name: "Johnny Dearth",
    userName: "Johnny_Dearth",
    email: "Johnny.Dearth@example.com",
    password: "JohnnyDearth345",
    dateOfBirth: new Date(2020, 12, 23), // 23-12-2020
    isAdmin: true,
  },
];

export default userList;