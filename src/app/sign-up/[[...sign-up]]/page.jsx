import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        top: "60px",
      }}
    >
      <SignUp />
    </div>
  );
}
