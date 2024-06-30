import { TextField, Typography, Button, Box } from "@mui/material";
import Image from "next/image";

const styles = {
  container: {
    borderRadius: '8px',
    width: 400,
    height: 400,
    m: '0 auto',
    mt: 5,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    boxShadow: '0px 4px 12px 0px rgba(0, 0, 0, 0.15)',
    paddingTop: '10px',
  },
  header: {
    mt: 4,
    ml: 3,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontStyle: "italic",
    fontWeight: 700,
    color: "#33d375",
  },
  title: {
    display: 'flex',
    justifyContent: 'left',
    ml: 5,
    mt: 3,
    fontSize: 30,
    fontWeight: 700,
    opacity: '75%',
  },
  textField: {
    display: 'flex',
    justifyContent: 'left',
    mx: 5,
    mt: 5,
    backgroundColor: 'white',
  },
  buttonContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    mt: 3,
    mb: 3,
  },
  button: {
    backgroundColor: '#33d375',
    borderRadius: '30px',
    padding: '10px',
    width: '100%',
    mx: 5,
    mt: 3,
    opacity: '75%',
  },
};

export default function Page({ children }) {
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
      <Box sx={styles.container}>
        <Box sx={styles.title}>Prijavite se</Box>
        <TextField
          id="outlined-username"
          label="Korisnicko Ime"
          variant="outlined"
          color="primary"
          required
          sx={styles.textField}
        />
        <TextField
          id="outlined-password"
          label="Lozinka"
          variant="outlined"
          type="password"
          required
          sx={styles.textField}
        />
        <Box sx={styles.buttonContainer}>
          <Button variant="contained" size="medium" sx={styles.button}>
            Prijava
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
