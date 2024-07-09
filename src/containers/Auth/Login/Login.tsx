import { FC, FormEvent, useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { Container, Form, Wrapper } from "./StyledLogin";
import { Button, TextField } from "@mui/material";
import { theme } from "../../../utility/Theme";
import { useAppDispatch } from "../../../app/hooks";
import { loginUser } from "../../../feature/authSlice";

const Login: FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useAppDispatch();
  const submitForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log({
      email: email,
      password: password,
    });
    dispatch(
      loginUser({
        email: email,
        password: password,
      })
    );
  };

  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <Container>
          <h3>Login</h3>
          <Form onSubmit={submitForm}>
            <div>
              <TextField
                required
                id="email"
                label="Email"
                variant="standard"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />

              <TextField
                required
                id="password"
                label="Password"
                type="password"
                autoComplete="current-password"
                variant="standard"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>
            <div>
              <Button type="submit" variant="outlined">
                Login
              </Button>
            </div>
          </Form>
        </Container>
      </Wrapper>
    </ThemeProvider>
  );
};

export default Login;
