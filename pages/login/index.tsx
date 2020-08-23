import { H1, FlexContainer, H2, Card, Input, Button, Text } from "./styles";
import { useRef, useState } from "react";
import { api } from "../../lib/helpers";

export default function Login() {
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const [message, setMessage] = useState<any>();

  async function handleLogin() {
    const response = await fetch(api + "/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: usernameRef.current.value,
        password: passwordRef.current.value,
      }),
    });
    const json = await response.json();
    setMessage(json);

    //console.log(usernameRef.current.value, passwordRef.current.value);
  }

  return (
    <FlexContainer>
      <H1>Bambank</H1>
      <H2>Please log in to access your account</H2>
      <Card>
        <H2>Account Login</H2>
        <Input placeholder="Username" type="text" ref={usernameRef} />
        <Input placeholder="Password" type="password" ref={passwordRef} />
        <Button onClick={handleLogin}>Login</Button>

        <Text>{JSON.stringify(message)}</Text>
      </Card>
    </FlexContainer>
  );
}
