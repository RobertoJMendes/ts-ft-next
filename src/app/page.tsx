
import Link from "next/link";
import './pg.css'

export default function Home() {
  return (
    <main className="flex justify-center mt-8">
      <Link href='/users/listar/' className="text-blue-900 text-6xl" >Users</Link>
    </main>
  );
}