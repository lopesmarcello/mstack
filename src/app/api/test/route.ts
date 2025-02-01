// https://nextjs.org/docs/app/building-your-application/routing/route-handlers#static-route-handlers

export async function GET(){
    await new Promise(resolve => setTimeout(resolve, 200));
    return Response.json({"test": "hello"}, {
        status: 200,
    })
}