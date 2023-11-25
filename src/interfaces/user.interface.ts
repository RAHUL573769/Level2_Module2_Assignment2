// Creating User Interface

interface UserInfo {
  userId: number;
  username: string;
  password: string;
  fullName: {
    firstName: string;
    lastName: string;
  };
  age: number;
  email: string;
  isActive: boolean;
  hobbies: string[];
  address: {
    street: string;
    city: string;
    country: string;
  };
  orders: Object[];
}
interface Output {
  success: boolean;
  message: string;
  data: any;
}
interface errorOutput {
  success: boolean;
  message: string;
  error: any;
}

export { UserInfo, Output, errorOutput };
