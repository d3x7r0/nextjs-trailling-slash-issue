import Link from 'next/link'

export default function Foo() {
  return (
    <>
      <p>This is the index</p>

      <p>
        <Link href="/bar">
          <a>Go to bar</a>
        </Link>
      </p>

      <p>
        <Link href="/[foo]" as="/foo">
          <a>Go to foo</a>
        </Link>
      </p>
    </>
  )
}
