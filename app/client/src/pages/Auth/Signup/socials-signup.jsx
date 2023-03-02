import * as React from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Stack } from "@mui/system";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import MailOutlineRoundedIcon from "@mui/icons-material/MailOutlineRounded";
import { FcGoogle } from "react-icons/fc";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
      fontWeight="lg"
    >
      {"Copyright © "}
      <Link color="inherit" href="https://giatto.co/" underline="none">
        giatto.co
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function SocialsSignup() {
  const navigate = useNavigate();

  const goHome = () => navigate('/home');

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={12}
          sm={8}
          md={5}
          lg={6}
          component={Paper}
          elevation={6}
          sx={{ background: 'linear-gradient(180deg, #00BFFF, #7FFFD4)' }}
          square
        >
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
           <h1 className="logo-text white cursor-pointer" onClick={goHome}>giatto</h1>
           <Typography
              component="h4"
              className="white bodytext--auth"
              sx={{ marginInline: 10, textAlign: "center" }}
              fontWeight="lg"
            >
              Join 10,000+ African creators and experience more visibility, more
              money and connection.
            </Typography>
            <Typography
              component="h3"
              textAlign="center"
              className="white"
              fontWeight="lg"
              marginTop={3}
            >
              Create an Account
            </Typography>
            <Box sx={{ mt: 2 }}>
              <Stack spacing={2}>
                <Button fullWidth variant="outlined"  sx={{
                    textTransform: "capitalize",
                    color: "#333",
                    border: "1px solid #ededed",
                    fontWeight:"bold",
                  }}>
                  <FcGoogle size={22} className="mr--social-btns" />
                  Continue with Google
                </Button>
                <Button fullWidth variant="outlined"  sx={{
                    textTransform: "capitalize",
                    color: "#333",
                    border: "1px solid #ededed",
                    fontWeight:"bold",
                  }}>
                  <FacebookRoundedIcon size={22} sx={{color:'#4267B2'}} className="mr--social-btns" />
                  Continue with Facebook
                </Button>
                <Button
                  fullWidth
                  variant="outlined"
                  component="a"
                  href="/signup"
                  sx={{
                    textTransform: "capitalize",
                    color: "#333",
                    border: "1px solid #ededed",
                    fontWeight:"bold",
                  }}
                >
                  <MailOutlineRoundedIcon
                    size={22}
                    className="mr--social-btns"
                    color="#333"
                  />
                  Continue with Mail
                </Button>
              </Stack>
            </Box>

            <Grid item sx={{ mt: 3, mb: 2 }}>
              <Link href="/login/socials" variant="body2" underline="none" color="#333">
                Already have an account? <strong>Log in</strong>
              </Link>
            </Grid>
          </Box>

          <Copyright sx={{ mt: 38 }} />
        </Grid>

        <Grid
          item
          // xs={8}
          sm={4}
          md={7}
          lg={6}
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
