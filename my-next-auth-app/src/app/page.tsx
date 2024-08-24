"use client";

import { Button } from "@mui/material";
import { signIn } from "next-auth/react";

export default function Home() {
  return (
    <main>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button variant="contained" onClick={() => signIn("github", { callbackUrl: "/dashboard" })}>
          Login com Github
        </Button>
      </div>
    </main>
  );
}
