import Link from 'next/link'

export async function getStaticPaths() {
  return {
    paths: [
      {
        params: {
          foo: 'foo'
        }
      }
    ],
    fallback: false,
  }
}

export async function getStaticProps() {
  return {
    props: {}
  }
}

export default function Foo() {
  return (
    <>
      <p>This is page foo</p>

      <p>
        <Link href="/">
          <a>Go home</a>
        </Link>
      </p>
    </>
  )
}
