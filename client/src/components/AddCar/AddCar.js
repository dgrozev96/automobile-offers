import { Link, NavLink } from 'react-router-dom'
import './AddCar.css'
const AddCar = () => {

    return (
        <>
           <form action="" >
  <div className="container">
    <h1>Add Car</h1>
    <p>Please fill in this form to add a new car.</p>
    <hr />

    <label for="email"><b>Brand and make</b></label>
    <input type="text" placeholder="e.g VW Golf 5" name="email" id="email" required />

    <label for="psw"><b>Details</b></label>
    <input type="text" placeholder="more info about the car" name="psw" id="psw" required />

    <label for="psw-repeat"><b>Price</b></label>
    <input type="text" placeholder="price in euro" name="psw-repeat" id="psw-repeat" required />

    <label for="psw-repeat"><b>Engine</b></label>
    <input type="text" placeholder="e.g 1.9 TDI" name="psw-repeat" id="psw-repeat" required />

    <label for="psw-repeat"><b>Condition</b></label>
    <br />
    
    <input type="radio" id="new" name="condition" value="HTML" />
  <label for="new">new</label> 
  <input type="radio" id="used" name="condition" value="CSS" /> 
  <label for="used">used</label>


    <hr />

    <button type="submit" className="registerbtn">Add</button>
  </div>
  
</form>
				
        </>


    )
}

export default AddCar;