import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { IconButton, InputAdornment } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import { useEffect, useState } from "react";
import axios from "axios";

const theme = createTheme({
    palette: {
        background: {
            default: "rgb(168, 168, 168)"
        },
    }
});

export default function SignIn() {
  const [showPassword, setVisibility] = useState(false);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passError, setPassError] = useState(null);
  const [password, setPassword] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
    axios.post('/api/login', data).then((res) => {
      if (res === "sucess") {
        document.cookie = "isLoggedIn=true"
        window.location.replace = "/dashboard"
      }
      else {
        alert("Try again later")
    }})
  };

    useEffect(() => {
        if (password !== "") {
            const re_digit = /^(?=.*\d)[a-zA-Z\d!@#$%^&*]{1,}$/,
              re_lower = /^(?=.*[a-z])[a-zA-Z\d!@#$%^&*]{1,}$/,
              re_upper = /^(?=.*[A-Z])[a-zA-Z\d!@#$%^&*]{1,}$/,
              re_special = /^(?=.*[!@#$%^&*])[a-zA-Z\d!@#$%^&*]{1,}$/,
                re_min = /^[a-zA-Z\d!@#$%^&*]{8,16}$/;
            let message = [];
            if (!re_min.test(String(password))) {
                message.push("Password should be 8-16 characters\n");
            }
            if (!re_lower.test(String(password))) {
              message.push("Password should have atleast one lower case character\n");
            }
            if (!re_upper.test(String(password))) {
              message.push(
                "Password should have atleast one upper case character\n");
            }
            if (!re_digit.test(String(password))) {
              message.push(
                "Password should have atleast one digit\n");
            }
            if (!re_special.test(String(password))) {
              message.push(
                "Password should have atleast one special case character\n");
          }
            setPassError(message.length === 0 ? null : message);
        } 
    }, [password]);
    
    useEffect(() => {
        if (email !== "") {
           const re =
             /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
           if (!re.test(String(email).toLowerCase())) {
             setEmailError("Enter valid Email");
           } else {
             setEmailError("");
           } 
        }
    }, [email]);
    
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            backgroundColor: "white",
            border: "1px grey",
            borderRadius: "1rem",
          }}
          p={2}
        >
          <Typography component="h1" variant="h5">
            Admin - Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              error={emailError !== ""}
              helperText={emailError}
              name="email"
              autoComplete="email"
              autoFocus
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <EmailIcon />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type={showPassword ? "text" : "password"}
              id="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              error={Array.isArray(passError)}
              helperText={<ul>{passError?.map((row, i) => <li key={i}>{row}</li>)}</ul>}
              autoComplete="current-password"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={() => setVisibility(!showPassword)}
                    >
                      {showPassword && <LockOpenIcon />}
                      {!showPassword && <LockIcon />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <Grid container>
              <Grid item xs sx={{ mt: 3, mb: 2 }}>
                <Link href="/ForgotPassword">Forgot password?</Link>
              </Grid>
              <Grid item>
                <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2 }}>
                  Sign In
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
