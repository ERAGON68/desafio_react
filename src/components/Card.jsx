export default function Card(props) {
    console.log("PROPS", props)
    return (
        <div className="d-flex justify-content-center">
            <div className="card d-flex justify-content-center text-danger bg-black" style={{ width: '400px' }}>
                <img
                    src={props.imagen}
                    className="card-img-top"
                    alt="..."
                />
                <div className="card-body bg-dark">
                    <h5 className="card-title"> {props.titulo}</h5>
                    <p className="card-text"> {props.descripcion}
                    </p>
                    <p className="card-text">Puntaje:  {props.puntaje}
                    </p>
                    <a href="https://www.ign.com/articles/2019/02/20/marvel-finally-makes-sense-of-wolverines-resurrection#:~:text=The%20crossover%20event%20Hunt%20for,new%20%22hot%20claws%22%20ability." className="btn btn-primary">
                        See More
                </a>
                </div>
            </div>
        </div>
    );
}