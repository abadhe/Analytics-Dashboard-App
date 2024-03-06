import Address from './Address';
interface User {
    id: number;
    name: string;
    email:string;
    username:string,
    address: Address;
    phone: string;
  }

  export default User;