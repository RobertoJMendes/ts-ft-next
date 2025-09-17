
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Link href='/users/listar/' className="w2 h2" >Users</Link>
    </main>
  );
}