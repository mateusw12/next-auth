import { getServerSession } from "next-auth";
import ButtonLogout from "./buttonLogout";
import { redirect } from "next/navigation";

export default async function dashboard() {
  const session = await getServerSession();

  if (!session) {
    redirect("/");
  }

  return (
    <>
      <div>Dashboard</div>
      <div>ola {session?.user?.name}</div>
      <div>
        <ButtonLogout />
      </div>
    </>
  );
}
