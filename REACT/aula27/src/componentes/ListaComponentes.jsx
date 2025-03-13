import 'ListaComponentes.css'

function ListaComponentes({array}) {
    // [1,100,3,4,5]
    return (
    <>
        { array.map((elemento, index)=>{
            return (<h3 key={index}>{elemento}</h3>)                
            }
        )}
    </>
    )
}
export default ListaComponentes

