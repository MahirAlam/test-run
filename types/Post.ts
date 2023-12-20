export type Post = {
  id: number;
  title: string;
  createdAt: Date;
};

export interface Data {
  posts: Post[];
  nextId: number | undefined;
}
