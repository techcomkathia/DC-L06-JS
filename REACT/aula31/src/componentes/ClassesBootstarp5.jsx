// objetivo desse arquivo é exemplificar um componente com as classes básicas do bootstrap 5 incluído via CDN no index.html

function ClassesBootstarp5() {
    // return (
    //     <div className=" border border-3border-primary p-3 m-3">   
    //         <h1 className="text-primary">Classes Bootstarp 5</h1>
    //     </div>
    // )

    // return(
    //     <div className="card" style={{width: '18rem;'}}>
    //     <img src="..." className="card-img-top" alt="..."/>
    //     <div className="card-body">
    //         <h5 className="card-title">Card title</h5>
    //         <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    //         <a href="#" className="btn btn-primary">Go somewhere</a>
    //     </div>
    //     </div>
    // )



        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" ariaLabel="Close"></button>
            </div>
            <div class="modal-body">
                ...
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
            </div>
            </div>
        </div>
        </div>
}

export default ClassesBootstarp5