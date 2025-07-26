import Link from 'next/link'
 
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>
        <nav>
          {/* Prefetched when the link is hovered or enters the viewport */}
          <Link href="/home">home</Link>
          {/* No prefetching */}
          <Link href="/assesmentpage1">asessment page1</Link>
          <Link href="/assesmentpage2">asessment page1</Link>
        </nav>
        {children}
      </body>
    </html>
  )
}