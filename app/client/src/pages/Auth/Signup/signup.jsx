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
import { useSignup } from "../../../hooks/useSignup";
import { Stack } from "@mui/system";

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

export default function Signup() {
  const { signup, isLoading, error } = useSignup();
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    username: "",
    email: "",
    role: "",
    password: "",
    confirmPassword: "",
  });
  const {
    firstName,
    lastName,
    phone,
    username,
    email,
    role,
    password,
    confirmPassword,
  } = state;
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  const goBack = () => navigate(-1);
  const goHome = () => navigate("/home");

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleClickShowConfirmPassword = () =>
    setShowConfirmPassword((show) => !show);

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

    signup(
      firstName,
      lastName,
      phone,
      username,
      email,
      role,
      password,
      confirmPassword,
    );
    // signup();
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
            alignItems="center"
            margin={2}
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
              padding: "1rem",
              width: "100%",
            }}
          >
            <Stack>
              <h1
                className="logo-text white cursor-pointer"
                style={{ marginTop: "-0.3em", textAlign: "center" }}
                onClick={goHome}
              >
                giatto
              </h1>

              <Typography
                component="h3"
                textAlign="center"
                // mt={0}
                className="white"
                sx={{ fontWeight: "bold" }}
              >
                Create an Account
              </Typography>
            </Stack>

            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ flexGrow: 1 }}
              autoComplete="off"
            >
              <Stack spacing={2}>
                <Stack
                  direction={{ xs: "column", sm: "row", md: "row" }}
                  spacing={{ xs: 1, sm: 2, md: 4 }}
                >
                  <TextField
                    label="Firstname"
                    variant="standard"
                    name="firstName"
                    value={firstName}
                    onChange={onChange}
                    required
                    fullWidth
                  />
                  <TextField
                    label="Lastname"
                    variant="standard"
                    name="lastName"
                    value={lastName}
                    onChange={onChange}
                    required
                    fullWidth
                  />
                </Stack>
                <Stack
                  direction={{ xs: "column", sm: "row", md:"row" }}
                  spacing={{ xs: 1, sm: 2, md: 4 }}
                >
                  <TextField
                    label="Phone Number"
                    variant="standard"
                    name="phone"
                    value={phone}
                    onChange={onChange}
                    required
                    fullWidth
                  />
                  <TextField
                    label="Username"
                    variant="standard"
                    name="username"
                    value={username}
                    onChange={onChange}
                    required
                    fullWidth
                  />
                </Stack>
                <Stack
                  direction={{ xs: "column", sm: "row", md:"row" }}
                  spacing={{ xs: 1, sm: 2, md: 4 }}
                >
                  <TextField
                    label="Role"
                    variant="standard"
                    name="role"
                    value={role}
                    onChange={onChange}
                    required
                    fullWidth
                  />
                  <TextField
                    label="Email Address"
                    variant="standard"
                    name="email"
                    value={email}
                    onChange={onChange}
                    required
                    fullWidth
                  />
                </Stack>
                <Stack
                  direction={{ xs: "column", sm: "row", md:"row" }}
                  spacing={{ xs: 1, sm: 2, md: 4 }}
                >
                  <FormControl variant="standard" required fullWidth>
                    <InputLabel htmlFor="standard-adornment-password">
                      Password
                    </InputLabel>
                    <Input
                      id="standard-adornment-password"
                      onChange={onChange}
                      name="password"
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
                  <FormControl variant="standard" required fullWidth>
                    <InputLabel htmlFor="standard-password">
                      Confirm Password
                    </InputLabel>
                    <Input
                      id="standard-password"
                      onChange={onChange}
                      name="confirmPassword"
                      value={confirmPassword}
                      type={showConfirmPassword ? "text" : "password"}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowConfirmPassword}
                            onMouseDown={handleMouseDownPassword}
                          >
                            {showConfirmPassword ? (
                              <VisibilityOff />
                            ) : (
                              <Visibility />
                            )}
                          </IconButton>
                        </InputAdornment>
                      }
                    />
                  </FormControl>
                </Stack>
              </Stack>

              <Stack mt={2}>
                <FormControlLabel
                  control={
                    <Checkbox value="remember" style={{ color: "#333" }} />
                  }
                  label="Remember me"
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="outlined"
                  sx={{ mt: 3, mb: 2, color: "#333", borderColor: "#333" }}
                  // disabled={isLoading}
                >
                  Sign up
                </Button>
                {error && <div className="error">{error}</div>}
              </Stack>

              <Stack>
                <Typography
                  variant="body2"
                  textAlign="center"
                  marginX={12}
                  marginY={3}
                >
                  By clicking the “Sign up” button, you are creating a giatto
                  account and therefore you agree to giatto Company’s{" "}
                  <strong className="cursor-pointer underline-hover">
                    Terms of Use{" "}
                  </strong>{" "}
                  and{" "}
                  <strong className="cursor-pointer underline-hover">
                    Privacy Policy
                  </strong>
                  .
                </Typography>

                <Link
                  href="/login/socials"
                  variant="body2"
                  underline="none"
                  color="#333"
                  sx={{ textAlign: "center" }}
                  margin={5}
                >
                  Already have an account? <strong>Log in</strong>
                </Link>
              </Stack>
              <Copyright />
            </Box>
          </Box>
        </Grid>

        <Grid
          item
          // xs={8}
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
