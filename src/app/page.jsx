import { UserButton, SignedIn, ClerkLoading, ClerkLoaded } from "@clerk/nextjs";

const Page = () => {
  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "10px 12px",
        backgroundColor: "dodgerblue",
        color: "white",
        alignItems: "center",
      }}
    >
      <div
        style={{
          fontSize: "18px",
          fontWeight: "bold",
        }}
      >
        Home
      </div>
      <div>
        <ClerkLoading>
          <div>Checking...</div>
        </ClerkLoading>
        <ClerkLoaded>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </ClerkLoaded>
      </div>
    </header>
  );
};

export default Page;
