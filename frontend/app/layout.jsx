import Footer from "@/components/footer"
import Navbar from "@/components/homeNavbar"

export const metadata = {
  title: 'DropSwift',
  description: 'DropSwift E-commerce store.',
}
 
export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <body>
        {/* <Navbar /> */}
        {children}
        <Footer />
      </body>
    </html>
  )
}
