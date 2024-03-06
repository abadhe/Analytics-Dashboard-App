// const fetchUsers = async (setUsers) => {
//     try {
//       const response = await fetch('https://fakestoreapi.com/users');
//       const data = await response.json();
//       const formattedUsers = data.map((user) => ({
//         id: user.id,
//         name: `${user.name.firstname} ${user.name.lastname}`,
//         email: user.email,
//         username: user.username,
//         address: user.address,
//         phone: user.phone,
//       }));
//       setUsers(formattedUsers);
//     } catch (error) {
//       console.error('Error fetching users:', error);
//     }
//   };
  
//   export { fetchUsers };