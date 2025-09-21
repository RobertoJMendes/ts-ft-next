"use client"
import instance from "@/app/services/api";
import Link from "next/link";
import { useEffect, useState } from "react";

interface User { id:number, name:string, email:string }

export default function Users() {
    //const [error, setError] = useState<string|null>(null)
    const [users, setUsers] = useState<User[]>([])
    const fetchUsers = async()=>{
      try {
        const response = await instance.get("/users")
        console.log(response.data)
        //setUser(user)
        setUsers(response.data)
      } catch (error) {
        console.log(error)
      }
    }
    useEffect(()=>{
      fetchUsers()
    },[])
  return (
    <main className="w-full flex flex-col gap-2">
      <div className="title flex justify-around mt-4">
        <div>
          Lista de Usuarios
          </div>
      <Link href='/users/cadastrar/' className="w2 h2" >Cadastrar</Link>
      <Link href='/' className="w2 h2" >Início</Link>
          </div>
      <table className="mt-4">
        <thead>
          <tr className="flex justify-around px-8">
            <th className="w-full flex justify-items-start">id:</th>
            <th className="w-full flex justify-items-start">nome:</th>
            <th className="w-full flex justify-items-start">email:</th>
          </tr>
        </thead>
        <tbody className="flex flex-col gap-2 px-8 mt-2">
          {users.map((user)=>(
            <tr key={user.id} className="flex justify-between ">
              <td className="w-full flex justify-items-start">{user.id}</td>
              <td className="w-full flex justify-items-start">{user.name}</td>
              <td className="w-full flex justify-items-start">{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
    
  );
}
/*
  <button onSubmit={fetchUsers}>Users</button>
*/