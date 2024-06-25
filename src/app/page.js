import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";

export default function Page({children}) {
  return (
    <Box>
        <Typography
          sx={{
            mt: 4,
            ml: 3,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 50,
            fontFamily: "Roboto",
            fontStyle: "normal",
            fontWeight: "700",
          }}
        >
          Dobrodosli na schdlmkr!
        </Typography>
        <Box
          sx={{
            borderRadius: "8px",
            width: 500,
            height: 400,
            margin: "0 auto",
            mt: 5,
            backgroundColor: "white",
            boxShadow: "0px 4px 12px 0px rgba(0, 0, 0, 0.15)",
            paddingTop: "10px"
          }}
        >
          <Box
          sx={{
            display: "flex",
            justifyContent: "left",
            ml: 5,
            mt: 3,
            fontSize: 30,
            fontWeight: "700"
          }}
          >
            Prijavite se
          </Box>
          <TextField id="outlined-basic" label="Korisnicko Ime" variant="outlined" required
          sx={{
            display: "flex",
            justifyContent: "left",
            ml: 5,
            mr: 5,
            mt: 5,
            backgroundColor: "white"
          }}
          />
          <TextField id="outlined-basic" label="Lozinka" variant="outlined" type="password" required
          sx={{
            display: "flex",
            justifyContent: "left",
            ml: 5,
            mr: 5,
            mt: 5,
            backgroundColor: "white"
          }}
          />
          <Box>
          <Button size="small"
          sx={{
            display: "flex",
            alignItems: "left",
            ml: 5,
            mt: 1,
            mb: 3
          }}
          >
            Zaboravili ste lozinku?
          </Button>
          </Box>
          <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mt: 3,
            mb: 3
          }}
          >
          <Button variant="contained" size="medium"
          sx={{
            backgroundColor: "#4caf50",
            borderRadius: "30px",
            padding: "10px",
            width: "100%",
            mr: 5,
            ml: 5
          }}
          >
            Prijavite se
          </Button>
          </Box>
        </Box>
    </Box>
  );
}
