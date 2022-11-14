import React from 'react'
import '../CSS/cars.css';
import Car from "./Car";


 function Cars({ fetchedCars }) {
  return (
    <div className="cars">
			{fetchedCars.map((car) => (
				<Car
					milage={car.mileage}
					description={car.car_description}
					images={car.images}
					registration={car.registration_no}
					is_hired={car.is_hired}
				/>
			))}
		</div>
  )
}
export default Cars;