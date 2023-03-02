import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
// import sketchImg from '../../assets/visualhunter-70349147e8-removebg-preview 1.png';
import { MdOutlineArrowBackIos } from "react-icons/md";


const theme = createTheme();

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const goBack = () => navigate(-1);
  const goHome = () => navigate('/home');

  const onChange = (e) => {
    setEmail(e.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log(`Recovering password for...${{
      email: data.get("email"),
    }}`);
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={12}
          sm={8}
          md={5}
          component={Paper}
          elevation={6}
          sx={{ background: "linear-gradient(180deg, #00BFFF, #7FFFD4)" }}
          square
        >
          <Grid
            item
            container
            spacing={2}
            alignItems="center"
            margin={3}
            xs={2}
            className="cursor-pointer"
            onClick={goBack}
          >
            <MdOutlineArrowBackIos color="#333" />
            <Typography sx={{ fontWeight: "bold", fontSize: "0.85rem" }}>
              Back
            </Typography>
          </Grid>

          <Box
            sx={{
              //   m: 2,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <h1 className="white logo-text cursor-pointer" onClick={goHome}>giatto</h1>
            <Typography
              component="h2"
              textAlign="center"
              className="white sub-head-text"
              sx={{ fontWeight: "bold", fontSize: "1.5rem" }}
            >
              Recover your password
            </Typography>
            <Typography
              component="h3"
              textAlign="center"
              className="white"
              sx={{ mx: 8, my: 2 }}
            >
              Please enter your registration mail to recover your password. You
              will receive a password reset link via that email.
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
              autoComplete="off"
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="standard-email-input"
                label="Email Address"
                name="email"
                value={email}
                onChange={onChange}
                autoFocus
                variant="standard"
                sx={{
                  "& .MuiInputBase-input": {
                    background: "transparent",
                  },
                }}
              />

              <Button
                type="submit"
                fullWidth
                variant="outlined"
                sx={{ mt: 3, mb: 2, color: "#333", borderColor: "#333" }}
              >
                Send link
              </Button>
              <hr
                style={{
                  marginTop: "18em",
                  color: "#fff",
                  height: "1px",
                  backgroundColor: "#fff",
                  border: "0.8px solid #fff",
                }}
              />
              <Grid item>
                <Typography
                  color="#fff"
                  margin={1}
                  textAlign="center"
                  fontWeight="bold"
                >
                  ...connecting African creators to the world
                </Typography>
              </Grid>
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          sm={4}
          md={7}
          sx={{
            backgroundImage: "url(https://source.unsplash.com/random)",
            // backgroundImage:
            //   "url(../../assets/visualhunter-70349147e8-removebg-preview 1.png)",
            backgroundRepeat: "no-repeat",
            // backgroundColor: (t) =>
            //   t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundColor: "#33F2FF",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></Grid>
      </Grid>
    </ThemeProvider>
  );
}
