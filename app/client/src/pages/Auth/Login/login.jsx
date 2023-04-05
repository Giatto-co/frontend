import React, { useState } from "react";
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
  CircularProgress,
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  Stack,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
// import sketchImg from '../../assets/visualhunter-70349147e8-removebg-preview 1.png';
import { MdOutlineArrowBackIos } from "react-icons/md";
import { useLogin } from "../../../hooks/useLogin";
import { grey } from "@mui/material/colors";

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
  const { login, isLoading } = useLogin();
  const [state, setState] = useState({
    email: "",
    password: "",
  });
  const { email, password } = state;
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const goBack = () => navigate(-1);
  const goHome = () => navigate("/home");

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const onChange = (e) => {
    setState((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    login(email, password);
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={12}
          sm={8}
          md={6}
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
            <h1 className="white logo-text cursor-pointer" onClick={goHome}>
              giatto
            </h1>
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
                value={email}
                onChange={onChange}
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
                  name="password"
                  onChange={onChange}
                  value={password}
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
                control={
                  <Checkbox value="remember" style={{ color: "#333" }} />
                }
                sx={{ marginTop: "1em" }}
                label="Remember me"
              />
              <Box sx={{ m: 1, position: "relative" }}>
                {!isLoading ? (
                  <Button
                    type="submit"
                    fullWidth
                    variant="outlined"
                    sx={{ mt: 3, mb: 2, color: "#333", borderColor: "#333" }}
                    disabled={isLoading}
                  >
                    Log in
                  </Button>
                ) : (
                  <Button
                    type="submit"
                    fullWidth
                    variant="outlined"
                    sx={{ mt: 3, mb: 2, color: "#333", borderColor: "#333" }}
                    disabled={isLoading}
                  >
                    Log in
                    <CircularProgress
                      size={24}
                      sx={{
                        color: grey[700],
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        marginTop: "-12px",
                        marginLeft: "-12px",
                      }}
                    />
                  </Button>
                )}
              </Box>
              <Stack
                direction={{ xs: "column", sm: "row", md: "row" }}
                spacing={{ xs: 1, sm: 2, md: 4 }}
                justifyContent="space-between"
                alignItems="center"
                mt={2}
              >
                <Link
                  href="/reset-password"
                  variant="body2"
                  underline="none"
                  color="#333"
                  fontWeight="lg"
                >
                  Forgot password?
                </Link>
                <Link
                  href="/signup"
                  variant="body2"
                  underline="none"
                  color="#333"
                >
                  Don't have an account? <strong>Sign Up</strong>
                </Link>
              </Stack>
              <Copyright sx={{ mt: 24 }} />
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          sm={4}
          md={6}
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
