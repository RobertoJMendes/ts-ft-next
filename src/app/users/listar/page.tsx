"use client"
import instance from "@/app/services/api";
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
    <div className="users">
      <div className="title flex">Lista de Usuarios</div>
      <table>
        <thead>
          <tr>
            <th>id:</th>
            <th>nome:</th>
            <th>email:</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user)=>(
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
/*
  <button onSubmit={fetchUsers}>Users</button>
*/