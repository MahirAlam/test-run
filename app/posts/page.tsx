import { Container, SimpleGrid } from "@mantine/core";
import { Post } from "./Post";
import classes from "./postsPage.module.css";

function page() {
  return (
    <Container fluid className={classes.postsPageContainer}>
      <SimpleGrid cols={{ base: 2, sm: 3, md: 4, lg: 5 }} spacing="xs">
        <Post /> <Post /> <Post />
        <Post /> <Post /> <Post /> <Post /> <Post />
      </SimpleGrid>
    </Container>
  );
}

export default page;
