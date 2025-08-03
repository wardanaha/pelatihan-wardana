import '@/styles/theme.scss';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='bg-light'>
        {children}
      </body>
    </html>
  )
}