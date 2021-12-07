import { Link, NavLink } from 'react-router-dom'
const Details = () => {

    return (
        <>
            <div className="feturedsection">
					<h1 className="text-center"><span className="bdots"></span>F E A T U R E S<span className="carstxt">C A R S</span></h1>
				</div>
				<div className="fetured/image">
					<div className="row firstrow">
						
						
								
					
									<div className="featurecontant">
									<img width="50%" src="http://cdn.shopify.com/s/files/1/2481/4466/products/Golf-5-R32-8_1200x1200.jpg?v=1515171398" alt="Golf5" />
										<h1>VW Golf 5</h1>
										<h2>Details:</h2>
										<p>Mnogo bqga i vurvi, Mnogo bqga i vurvi, Mnogo bqga i vurvi,
											 Mnogo bqga i vurvi, Mnogo bqga i vurvi,Mnogo bqga i vurvi, Mnogo bqga i vurvi, Mnogo bqga i vurvi,  </p>
										<h2>Price: 10000 &euro;</h2>
										<h2>Engine: 1.9TDI</h2>
										<h2>Condition: Used</h2>
										<h2>Likes: 32</h2>
										<button id="btnRM2">Edit</button>
										<button id="btnRM2">Delete</button>
										<button id="btnRM2">Like</button>
										
									</div>
								
							
					</div>
				</div>
        </>


    )
}

export default Details;