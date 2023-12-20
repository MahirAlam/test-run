"use client";
import {
  AppShell,
  Burger,
  ColorSchemeScript,
  Group,
  MantineProvider,
  Skeleton,
} from "@mantine/core";
import "@mantine/core/styles.css";
import { useDisclosure } from "@mantine/hooks";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [opened, { toggle }] = useDisclosure();

  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider>
          <AppShell
            header={{ height: 60 }}
            navbar={{
              width: 300,
              breakpoint: "xs",
              collapsed: { mobile: !opened, desktop: !opened },
            }}
            padding="md"
          >
            <AppShell.Header>
              <Group h="100%" px="md">
                <Burger opened={opened} onClick={toggle} size="sm" />
                fd
              </Group>
            </AppShell.Header>
            <AppShell.Navbar p="md">
              Navbar
              {Array(15)
                .fill(0)
                .map((_, index) => (
                  <Skeleton key={index} h={28} mt="sm" animate={false} />
                ))}
            </AppShell.Navbar>
            <AppShell.Main>{children}</AppShell.Main>
          </AppShell>
        </MantineProvider>
      </body>
    </html>
  );
}
