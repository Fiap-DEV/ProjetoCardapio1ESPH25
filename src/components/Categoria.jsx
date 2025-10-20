

const Categoria = ({categorias,filtroItems}) => {


  const produtos =(opcao)=>{
    switch(opcao.toLowerCase()){
      case "acao":
        return;
      case "aventura":
        return;
      case "terror":
        return;
      default:
        return null;
    }
  }

  return (
    <nav>
      {categorias.map((opcao,index)=>(
        <button key={index} onClick={()=>filtroItems(opcao)}>
          {produtos(opcao)}
        </button>
      ))}
    </nav>
  )
}

export default Categoria