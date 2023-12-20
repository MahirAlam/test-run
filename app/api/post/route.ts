import { type NextRequest, type NextResponse } from "next/server";

export async function GET(req: NextRequest, res: NextResponse) {
  try {
    const url = req.nextUrl;
    const take = url.searchParams;
    console.log(take);

    // let result = await prisma.post.findMany({
    //   take: take ? parseInt(take as string) : 10,
    //   ...(lastCursor && {
    //     skip: 1, // Do not include the cursor itself in the query result.
    //     cursor: {
    //       id: parseInt(lastCursor as string),
    //     },
    //   }),
    //   orderBy: {
    //     createdAt: "asc",
    //   },
    // });

    // if (result.length == 0) {
    //   return new Response(
    //     JSON.stringify({
    //       data: [],
    //       metaData: {
    //         lastCursor: null,
    //         hasNextPage: false,
    //       },
    //     }),
    //     { status: 200 }
    //   );
    // }

    // const lastPostInResults: any = result[result.length - 1];
    // const cursor: any = lastPostInResults.id;

    // const nextPage = await prisma.post.findMany({
    //   // Same as before, limit the number of events returned by this query.
    //   take: take ? parseInt(take as string) : 7,
    //   skip: 1, // Do not include the cursor itself in the query result.
    //   cursor: {
    //     id: cursor,
    //   },
    // });

    // const data = {
    //   data: result,
    //   metaData: {
    //     lastCursor: cursor,
    //     hasNextPage: nextPage.length > 0,
    //   },
    // };

    return new Response(JSON.stringify("data"), { status: 200 });
  } catch (error: any) {
    return new Response(
      JSON.stringify(JSON.stringify({ error: error.message })),
      { status: 403 }
    );
  }
}
