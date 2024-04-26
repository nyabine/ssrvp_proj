import { useGetAllUsersQuery } from './reduxthings/apiSlice'

const RestServer = () => {
  const { data } = useGetAllUsersQuery()

  console.log(data)
  return (
    <div>
      
    </div>
  );
}

export default RestServer