import instance from "@/app/services/api";

interface BtnApagarProps{
  id:string;
  route:string;
  onSucess?:()=>void;
//  setError?:(message:string|"")=>void|undefined;
//  setSucess?:(message:string|"")=>void;
}
export default function BtnApagar({id,route
  ,onSucess
  // ,setError,setSucess
  }:BtnApagarProps) {
  const handleDelete = async ()=>{
    const ativarDelete = window.confirm("Ok! Deletado!")
    if(!ativarDelete)
      return
    //setError("");
    //setSucess("");
    try {
      const response = await instance.delete(`/${route}/${id}`)
      console.log(response)
      if(onSucess){
        onSucess()
      }
      //setSucess(response.data.msg || "Deletado!")
      
      
    } catch (error) {
      console.log(error)
      //setError(error.response?.data?.msg) || "Falhou, msg do Front!"
    }

  }
  return (
    <div >
      <button onClick={handleDelete} className="text-blue-900 cursor-pointer" >Excluir!</button>
    </div>
  );
}