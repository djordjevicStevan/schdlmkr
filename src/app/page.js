import { Typography, Box } from "@mui/material";
import Image from "next/image";
import { SignIn } from "../../components/sign-in";

const styles = {
  header: {
    mt: 4,
    ml: 3,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontStyle: "italic",
    fontWeight: 700,
    color: "#33d375",
  }
};

export default function Page() {
  return (
    <Box>
      <Image
        src="/background.avif"
        fill={true}
        alt="Background image"
        style={{ zIndex: -1 }}
      />
      <Typography variant="h2" sx={styles.header}>
        Dobrodosli na schdlmkr!
      </Typography>
      <SignIn />
    </Box>
  );
}