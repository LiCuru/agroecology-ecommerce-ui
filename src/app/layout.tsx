import  NavigationMenuDemo  from "./customized-components/navigation-menu"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {/* Layout UI */}
        {/* Place children where you want to render a page or nested layout */}
        <NavigationMenuDemo/>
        <main>{children}</main>
      </body>
    </html>
  )
}