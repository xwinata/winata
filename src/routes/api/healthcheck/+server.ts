export async function GET() {
  const options: ResponseInit = {
    status: 200
  }

  return new Response('OK', options)
}