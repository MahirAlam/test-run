"use client";

import {
  ActionIcon,
  Badge,
  Card,
  Group,
  Image,
  Text,
  rem,
  useMantineTheme,
} from "@mantine/core";
import { IconBookmark, IconHeart, IconShare } from "@tabler/icons-react";
import classes from "./Post.module.css";

export function Post() {
  const theme = useMantineTheme();

  return (
    <Card withBorder padding="lg" radius="md" className={classes.card}>
      <Card.Section mb="sm">
        <Image
          src="https://www.themoviedb.org/t/p/w440_and_h660_face/zgBW2eNkN0Ez09GgRaWret90C1T.jpg"
          alt="Top 50 underrated plants for house decoration"
        />
      </Card.Section>

      <Badge w="fit-content" variant="light">
        decorations
      </Badge>

      <Text fw={700} className={classes.title} mt="xs">
        Top 50 underrated plants for house decoration
      </Text>

      <Card.Section className={classes.footer}>
        <Group justify="space-between">
          <Text fz="xs" c="dimmed">
            733 people liked this
          </Text>
          <Group gap={0}>
            <ActionIcon variant="subtle" color="gray">
              <IconHeart
                style={{ width: rem(20), height: rem(20) }}
                color={theme.colors.red[6]}
                stroke={1.5}
              />
            </ActionIcon>
            <ActionIcon variant="subtle" color="gray">
              <IconBookmark
                style={{ width: rem(20), height: rem(20) }}
                color={theme.colors.yellow[6]}
                stroke={1.5}
              />
            </ActionIcon>
            <ActionIcon variant="subtle" color="gray">
              <IconShare
                style={{ width: rem(20), height: rem(20) }}
                color={theme.colors.blue[6]}
                stroke={1.5}
              />
            </ActionIcon>
          </Group>
        </Group>
      </Card.Section>
    </Card>
  );
}
