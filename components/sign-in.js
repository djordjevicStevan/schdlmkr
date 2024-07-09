import { Box, TextField, Button } from "@mui/material";
import { signIn } from "@/auth";

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
      }
}

export function SignIn() {
    return (
        <form 
        action={async (formData) => {
            "use server"
            await signIn("credentials", formData)
        }}
        >
            <Box sx={styles.container}
      component="form"
      noValidate
      autoComplete="off"
      >
        <Box sx={styles.title}>Prijavite se</Box>
        <TextField
          placeholder="Unesite email"
          name="email"
          type="email"
          id="outlined-username"
          label="Korisničko Ime"
          variant="outlined"
          color="primary"
          required
          sx={styles.textField}
        />
        <TextField
          placeholder="Unesi lozinku"
          id="outlined-password"
          label="Lozinka"
          variant="outlined"
          name="password"
          type="password"
          required
          sx={styles.textField}
        />
        <Box sx={styles.buttonContainer}>
          <Button
          type="submit"
          href="/home"
          variant="contained"
          size="medium"
          sx={styles.button}>
            Prijava
          </Button>
        </Box>
      </Box>
    </form>
    )
}