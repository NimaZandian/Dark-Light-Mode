import { useGetUsersQuery } from "../feature/ApiSlice";

const Users = () => {
  const { data, error, isLoading } = useGetUsersQuery();

  if (isLoading) return <div>Loading users...</div>;
  if (error) return <div>Error fetching users!</div>;

  return (
    <div>
      <h2>Users :</h2>
      <ul>{data && data.map((user) => <li key={user.id}>{user.name}</li>)}</ul>
    </div>
  );
};

export default Users;
