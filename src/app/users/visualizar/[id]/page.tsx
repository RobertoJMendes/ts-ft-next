"use client"
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import instance from "@/app/services/api";
import Link from "next/link"

interface User { id:number, name:string, email:string, createdAt:string, updatedAt:string }

export default function Home() {
  const {id} = useParams()
  const [user,setUser] = useState<User|"">("")
  const [error,setError] = useState<string|"">("")

  const userDetails = async (id:string)=>{
    try {
      const response = await instance.get(`/users/${id}`)
      const userFinal = response.data.user
      //console.log(userFinal)
      setUser(userFinal)
      //console.log(response.data.msg)
    } catch (error) {
      if(error){
        setError("Falhou!")
      }
    }
  }
  useEffect(()=>{
    if(id){
      // Para garantir que o id seja um string!
      const userId = Array.isArray(id)?id[0]:id
      userDetails(userId)
    }
  },[id])

  return (
    <main className="flex mt-8 flex-col">
      <div>
      <Link href='/users/listar/' className="text-blue-900" >Voltar!</Link>
      </div>
      <div> { user && !error && (
        <div className="flex flex-col">
          <div>
            <label>Id:</label>
            <div>{user.id}</div>
          </div>
          <div>
            <label >Nome:</label>
            <div>{user.name}</div>
          </div>
          <div>
            <label >E-mail:</label>
            <div>{user.email}</div>
          </div>
          <div>
            <label >Criado em:</label>
            <div>{new Date(user.createdAt).toLocaleString()}</div>
          </div>
          <div>
            <label >Editado em:</label>
            <div>{new Date(user.updatedAt).toLocaleString()}</div>
          </div>
          <div className="flex justify-between">
            <Link href={`/users/visualizar/${user.id}/editar`} className="text-blue-900" >Editar!</Link>

          </div>
        </div> )}
      </div>
    </main>
  )
}
/*
*/