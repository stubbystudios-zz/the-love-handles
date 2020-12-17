export default function PostBody({ content }) {
  return (
    <section>
      <div
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </section>
  )
}
