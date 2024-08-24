import { Button } from "@mui/material";
import { signOut } from "next-auth/react";

const ButtonLogout = () => {
  return (
    <>
      <Button variant="contained" onClick={() => signOut()}>
        Logout
      </Button>
    </>
  );
};

export default ButtonLogout;
