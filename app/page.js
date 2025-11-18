import Link from "next/link";


export default function page() {
  return (
    <div>

<h2>Go to About</h2>      
  <Link href={'/blog'}>Blog</Link>
    </div>
  )
}
