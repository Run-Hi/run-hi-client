import StyledComponentsRegistry from './utils/registry'
import './globals.css'

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode
}) {
  return (
      <html>
      <body>
      <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
      </html>
  )
}