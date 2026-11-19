import { client } from "@repo/db/client";

 const Home: any = async () => {
  const user = await client.user.findFirst();

  return (
    <>
      <div>
        <p>{user?.username}</p>
        <p>{user?.password}</p>
      </div>
    </>
  );
};

export default Home ;