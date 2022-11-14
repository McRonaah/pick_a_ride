import React from 'react';
import '../CSS/car.css';
import { Link } from "react-router-dom";

 function Car({
	id,
	milage,
	description,
	is_hired,
	registration_no,
	images,
}) {
  return (
    <Link to={"/cars/" + id} style={{ textDecoration: "none" }}>
			<div className="caritem" key={id}>
				<div className="cartitle_name">
					<img src={images} alt="" srcset="" />
				</div>
				<div className="desc">
					<span>Description:</span> {description}
				</div>
				<div className="desc">
					<span>Mileage:</span> {milage}
				</div>
				<div className="desc">
					<span>Registration</span> {registration_no}
				</div>
				{is_hired ? <p>Hired</p> : <p>Not Hired</p>}
			</div>
		</Link>
  )
}
export default Car;