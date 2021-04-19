import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel' ;

export default function CarouselLocal() {
    return (
        <div className="d-flex justify-content-center text-danger w-100">

            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={'https://static1.cbrimages.com/wordpress/wp-content/uploads/2016/11/wolverine-burned-to-skeleton.jpg?q=50&fit=crop&w=960&h=500&dpr=1.5'}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3 className="text-danger">Wolverine regenerandose en el infierno</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/0707ae52-a627-4461-bfc8-6f2ea8cdc7fc/dgzf01-99a5da52-9876-444a-840c-1220522effd3.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvMDcwN2FlNTItYTYyNy00NDYxLWJmYzgtNmYyZWE4Y2RjN2ZjXC9kZ3pmMDEtOTlhNWRhNTItOTg3Ni00NDRhLTg0MGMtMTIyMDUyMmVmZmQzLmpwZyJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTpmaWxlLmRvd25sb2FkIl19.iCK9MlaJJ3sJfxBClsmU2P-REle1PACgaZHsLVr4vdU'}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3 className="text-danger">Wolverine Regenerado</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 "
                        src={'https://www.animatedtimes.com/wp-content/uploads/2018/11/wolverine-healing-factor-uses-1280x720.jpg'}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3 className="text-danger">Hi Tony</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}