import * as React from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
// import sketchImg from '../../assets/visualhunter-70349147e8-removebg-preview 1.png';
import { MdOutlineArrowBackIos } from "react-icons/md";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://giatto.co/">
        giatto.co
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function Login() {
  const [showPassword, setShowPassword] = React.useState(false);
  const navigate = useNavigate();

  const goBack = () => navigate(-1);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={4}
          sm={8}
          md={5}
          component={Paper}
          elevation={6}
          sx={{
            background: "linear-gradient(45deg, #FE6B8B 30%, #7FFFD4 90%)",
          }}
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
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <h1 className="white logo-text">giatto</h1>
            <Typography
              component="h3"
              textAlign="center"
              className="white"
              sx={{ fontWeight: "bold" }}
            >
              Log in
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
                // autoComplete="email"
                autoFocus
                variant="standard"
                sx={{
                  "& .MuiInputBase-input": {
                    background: "transparent",
                  },
                }}
              />
              <FormControl
                variant="standard"
                margin="normal"
                required
                fullWidth
              >
                <InputLabel htmlFor="standard-adornment-password">
                  Password
                </InputLabel>
                <Input
                  id="standard-adornment-password"
                  type={showPassword ? "text" : "password"}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
              <FormControlLabel
                control={<Checkbox value="remember" style={{color:"#333"}} />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="outlined"
                sx={{ mt: 3, mb: 2, color: "#333", borderColor: "#333" }}
              >
                Log in
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link
                    href="#"
                    variant="body2"
                    underline="none"
                    color="#333"
                    fontWeight="lg"
                  >
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link
                    href="/signup/socials"
                    variant="body2"
                    underline="none"
                    color="#333"
                  >
                    Don't have an account? Sign Up
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 24 }} />
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          xs={8}
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
