import { H1, FlexContainer, H2, Card, Input, Button, Text } from "./styles";
import { useRef, useState } from "react";
import Link from "next/link";
import { api } from "../../lib/helpers";

export default function Signup() {
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const surnameRef = useRef<HTMLInputElement>(null);
  const [message, setMessage] = useState<any>();

  async function handleLogin() {
    const response = await fetch(api + "/api/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: usernameRef.current.value,
        password: passwordRef.current.value,
        firstname: nameRef.current.value,
        lastname: surnameRef.current.value,
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
        <H2>Register new account</H2>

        <Input placeholder="Username" type="text" ref={usernameRef} />
        <Input placeholder="Password" type="password" ref={passwordRef} />
        <Input placeholder="First name" type="text" ref={nameRef} />
        <Input placeholder="Last name" type="text" ref={surnameRef} />

        <Button onClick={handleLogin}>Create account</Button>
        <Text>
          Already registered? <Link href="/login">Login here.</Link>
        </Text>
        <Text>{JSON.stringify(message)}</Text>
      </Card>
    </FlexContainer>
  );
}
