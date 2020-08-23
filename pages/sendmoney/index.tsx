import { Card, TransactionCard } from "../../components/Card";
import { FlexContainer } from "../../components/FlexContainer";
import { H1, H2 } from "../../components/Title";
import Router from "next/router";
import { NextPageContext } from "next";
import fetch from "isomorphic-fetch";
import { FlexDynamic, FlexItem } from "../../components/FlexDynamic";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import Link from "next/link";
import { useState, useRef } from "react";
import { api } from "../../lib/helpers";

export default function SendMoney({ users }: any) {
  const [balance, setBalance] = useState<any>(users[0].balance);
  const [amount, setAmount] = useState<any>(0);
  const sendtoRef = useRef<HTMLInputElement>(null);
  const [message, setMessage] = useState<any>();

  async function handleSend() {
    const response = await fetch(api + "/api/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        balance: amount,
        username: sendtoRef.current.value,
      }),
    });
    const json = await response.json();
    setMessage(json);
    if (response.status === 200) {
      Router.reload();
    }
  }

  return (
    <FlexContainer>
      <Card>
        <FlexDynamic>
          <FlexItem>
            <H2 align={"left"}>Welcome back</H2>
            <H1
              align={"left"}
            >{`${users[0].firstname} ${users[0].lastname}`}</H1>
          </FlexItem>
          <FlexItem>
            <H2 align={"right"}>Current balance</H2>
            <H1 align={"right"}>{`$${
              Math.round((balance.substr(1) - amount) * 1e12) / 1e12
            }`}</H1>
          </FlexItem>
        </FlexDynamic>
      </Card>
      <Card>
        <H1 align={"left"}>Send money</H1>
        <Input placeholder="Send to" ref={sendtoRef} />
        <Input
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <Button onClick={handleSend}>Send</Button>
        <br />
        {JSON.stringify(message)}
      </Card>
      <Link href="/">
        <Button>Go back</Button>
      </Link>
    </FlexContainer>
  );
}

SendMoney.getInitialProps = async (ctx: NextPageContext) => {
  const cookie = ctx.req.headers.cookie;

  const response = await fetch(api + "/api/profile", {
    headers: {
      cookie: cookie!,
    },
  });

  if (response.status === 401 && !ctx.req) {
    Router.replace("/login");
    return {};
  }

  if (response.status === 401 && ctx.req) {
    ctx.res.writeHead(302, {
      Location: api + "/login",
    });
    ctx.res.end();
  }

  const json = await response.json();

  return { users: json };
};
