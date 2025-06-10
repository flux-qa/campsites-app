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
import logo from "./img/logo.png"; // Adjust path if needed

const Layout = (): JSX.Element => {
  const theme = useMantineTheme();
  const navigate = useNavigate();

  return (
    <AppShell
      style={{ background: theme.colors.gray[0] }}
      header={
        <Header height={60} p="xs">
          <Container fluid>
            <UnstyledButton onClick={() => navigate("/")}>
              <Group>
                <Image
                  src={logo}
                  fit="contain"
                  width={36}
                  height={36}
                  alt="Campsite Explorer logo"
                />
                <Title order={2}>Campsite Explorer</Title>
              </Group>
            </UnstyledButton>
          </Container>
        </Header>
      }
    >
      <Outlet />
    </AppShell>
  );
};

export default Layout;
