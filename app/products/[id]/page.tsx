// app/products/[id]/page.js (server component)
import ClientProductPage from './ClientProductPage'

// This goes in the server component file
export async function generateStaticParams() {
  return [
    { id: '1' },
    { id: '2' },
    { id: '3' },
    // Add all your product IDs
  ]
}

export default function ProductPage({ params }) {
  return <ClientProductPage params={params} />
}
