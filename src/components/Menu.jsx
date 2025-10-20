import MenuItem from "./MenuItem"

const Menu = ({items}) => {
  return (
    <div>
      {/* mapeia todos os items */}
      {items.map((item)=>(
        // chama o componente menuitem e adiciona todos os items que estiverem disponiveis
        <MenuItem key={item} {...item}/>
      ))}
    </div>
  )
}

export default Menu