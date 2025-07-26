export default async function Page() {
  const data = await fetch('https://official-joke-api.appspot.com/random_joke')
  const post = await data.json()
  return (
    <div>
      <p>{post.type}</p>
      <p>{post.setup}</p>
      <p>{post.punchline}</p>
    </div>
  )
}