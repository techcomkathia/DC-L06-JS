function ComponentePropsDesestruturado({um, dois, tres, trinta}){
    return(
        <div>
            <h5>Propriedade um: {um}</h5>
            {/* <h5>Propriedade um: {props.um}</h5> */}
            <h5>Propriedade dois: {dois}</h5>
            <h5>Propriedade tres: {tres}</h5>
            <h5>Propriedade trinta: {trinta}</h5>
        </div>
    )
}

export default ComponentePropsDesestruturado

