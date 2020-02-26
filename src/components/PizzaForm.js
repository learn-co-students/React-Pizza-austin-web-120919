import React from "react"

const PizzaForm = (props) => {
  return(
      <form id='editForm' onSubmit={props.handleSubmit}>
        <div className="form-row">
          <div className="col-5">
              <input type="text" className="form-control" placeholder="Pizza Topping" defaultValue={props.topping} name='topping'/>
          </div>
          <div className="col">
            <select defaultValue={props.size} className="form-control" name='size'>
              <option defaultValue="Small">Small</option>
              <option defaultValue="Medium">Medium</option>
              <option defaultValue="Large">Large</option>
            </select>
          </div>
          <div className="col">
            <div className="form-check">
              <input className="form-check-input" type="radio" defaultValue="Vegetarian" name='vegetarian' checked={props.vegetarian} onChange={props.handleVegetarian}/>
              <label className="form-check-label">
                Vegetarian.
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="radio" defaultValue="Not Vegetarian" checked={!props.vegetarian} onChange={props.handleVegetarian}/>
              <label className="form-check-label">
                Not Vegetarian
              </label>
            </div>
          </div>
          <div className="col">
            <button type="submit" className="btn btn-success" form='editForm'>Submit</button>
          </div>
        </div>
      </form> 

  )
}

export default PizzaForm
