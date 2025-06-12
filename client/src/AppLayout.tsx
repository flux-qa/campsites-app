import React from "react";
import {
  AppShell,
  Container,
  Header,
  Title,
  Image,
  useMantineTheme,
  Group,
  UnstyledButton,
} from "@mantine/core";
import { Outlet, useNavigate } from "react-router-dom";
import logo from "./img/logo.png";

const Layout = (): JSX.Element => {
  const theme = useMantineTheme();
  const navigate = useNavigate();

  return (
    <AppShell
      style={{
        background:
          theme.colorScheme === "dark"
            ? theme.colors.dark[7]
            : theme.colors.gray[0],
      }}
      header={
        <Header
          height={60}
          p="xs"
          style={{
            boxShadow: theme.shadows.sm,
            background:
              theme.colorScheme === "dark"
                ? theme.colors.dark[6]
                : theme.white,
          }}
        >
          <Container fluid>
            <UnstyledButton
              onClick={() => navigate("/")}
              aria-label="Go to homepage"
              style={{ width: "100%" }}
            >
              <Group spacing="sm" align="center">
                <Image
                  src={logo}
                  fit="contain"
                  width={36}
                  height={36}
                  alt="Campsite Explorer logo"
                />
                <Title order={2} size="h4" fw={700}>
                  Campsite Explorer
                </Title>
              </Group>
            </UnstyledButton>
          </Container>
        </Header>
      }
    >
      <main>
        <Outlet />
      </main>
    </AppShell>
  );
};

export default Layout;
