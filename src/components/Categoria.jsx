
const Categoria = ({categorias,filtroItems}) => {

  const produtos =(opcao)=>{
    switch(opcao.toLowerCase()){
      case "acao":
        return;
      case "aventura":
        return ;
      case "terror":
        return;
      default:
        return null;
    }
  }

  return (
    <nav className="flex justify-center flex-wrap gap-4 mb-12">
      {categorias.map((opcao,index)=>(
        <button key={index} onClick={()=>filtroItems(opcao)}
        className="bg-slate-800 text-white border-none rounded-lg px-5 py-3 cursor-pointer transition-all duration-300 hover:bg-amber-600 hover:scale-105 hover:shadow-lg"
        >
          {produtos(opcao)}
          {opcao}
        </button>
      ))}
    </nav>
  )
}

export default Categoria