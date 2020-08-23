import { Card, TransactionCard } from "../components/Card";
import { FlexContainer } from "../components/FlexContainer";
import { H1, H2 } from "../components/Title";
import Router from "next/router";
import { NextPageContext } from "next";
import fetch from "isomorphic-fetch";
import { FlexDynamic, FlexItem } from "../components/FlexDynamic";
import { Button } from "../components/Button";
import Link from "next/link";
import { api } from "../lib/helpers";

const Arr = [
  { toMe: true, agent: "Tony", date: "01/01/2020", amount: 120.11 },
  { toMe: true, agent: "Steph", date: "01/01/2020", amount: 55.43 },
  { toMe: false, agent: "William", date: "01/01/2020", amount: 41.66 },
  { toMe: true, agent: "Craig", date: "01/01/2020", amount: 3.99 },
];

export default function Home({ users }: any) {
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
            <H1 align={"right"}>{`${users[0].balance}`}</H1>
          </FlexItem>
        </FlexDynamic>
      </Card>
      <Card>
        <H1 align={"left"}>Recent transactions</H1>
        {Arr.map((item) => {
          return (
            <TransactionCard>
              <div style={{ fontSize: "0.7rem" }}>{item.date}</div>
              <FlexDynamic transaction>
                <div>{item.agent}</div>
                <div
                  style={{
                    fontWeight: 600,
                    color: item.toMe ? "green" : "red",
                  }}
                >{`${item.toMe ? "+ " : "- "}$${item.amount}`}</div>
              </FlexDynamic>
            </TransactionCard>
          );
        })}
      </Card>
      <Link href="/sendmoney">
        <Button>Send money</Button>
      </Link>
    </FlexContainer>
  );
}

Home.getInitialProps = async (ctx: NextPageContext) => {
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
