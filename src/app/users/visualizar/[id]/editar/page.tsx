"use client"
import instance from "@/app/services/api";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
export default function Editar() { //    const [error, setError] = useState<string|null>(null) //  const [sucess, setSucess] = useState<string|null>(null)
    const [name, setName] = useState<string|"">("")
    const [email, setEmail] = useState<string|"">("")
    const {id} = useParams()
      const userDetails = async (id:string)=>{
    try {
      const response = await instance.get(`/users/${id}`) //const userFinal = response.data.user
      setName(response.data.user.name)
      setEmail(response.data.user.email)
    } catch (error) {
      if(error){ console.log(error)}}}
  useEffect(()=>{
    if(id){
      // Para garantir que o id seja um string!
      const userId = Array.isArray(id)?id[0]:id
      userDetails(userId)
    }
  },[id])
    const handleSubmit = async (event:React.FormEvent)=>{
      
      event.preventDefault()
      try {
        await instance.put(`/users/${id}`, { name: name, email: email }) // console.log(response.data)
        setName("")
        setEmail("")
      } catch (error) {
        console.log(error)
      }
    }
    const router = useRouter()
    function Redirecionar(){
      router.push('/')
    }
    return (
    <main className="flex flex-col gap-2">

        <div className="mt-2 flex justify-between">
            <Link href='/' className="w2 h2" >Inicio</Link>
            <Link href='/users/listar/' className="w2 h2" >Listar</Link>
        </div>
        
        <form onSubmit={handleSubmit} className="flex flex-col gap-2">

            <div className="flex flex-col gap-2" >
                <label htmlFor="name">Nome</label>
                <input type="text" id="name"
                value={name}
                placeholder="Nome Completo"
                onChange={(e)=>setName(e.target.value)}
                className="bg-amber-100 text-black pl-2" />
            </div>

            <div className="flex flex-col gap-2" >
                <label htmlFor="email">Email</label>
                <input type="email" id="email"
                value={email}
                placeholder="Email"
                onChange={(e)=>setEmail(e.target.value)}
                className="bg-amber-100 text-black pl-2" />
            </div>

            <button type="submit" onClick={Redirecionar} className="bg-fuchsia-700 hover:bg-lime-400 cursor-pointer">Editar!</button>
            
        </form>
    
    </main>
  );
}