import React from "react"
import {connect} from 'react-redux'
import {onPizzaEditFormChange} from '../redux/actions'

const PizzaForm = ({pizzaEditForm, onPizzaEditFormChange}) => {
  const handleChange = e => {
    if (e.target.name === 'vegetarian') {
      onPizzaEditFormChange(['vegetarian', e.target.value === 'vegetarian' ? true : false])
    } else {
      onPizzaEditFormChange([e.target.name, e.target.value])
    }
  }

  const handleReset = () => {
    onPizzaEditFormChange(['id', null], ['topping', ''], ['size', ''], ['vegetarian', null])
  }

  return (
    <div className="form-row">
      <div className="col-5">
          <input id="name" type="text" className="form-control" name="topping" placeholder="Pizza Topping" value={pizzaEditForm.topping} onChange={handleChange}/>
      </div>
      <div className="col">
        <select value={pizzaEditForm.size} className="form-control" name="size" onChange={handleChange}>
          <option value="Small">Small</option>
          <option value="Medium">Medium</option>
          <option value="Large">Large</option>
        </select>
      </div>
      <div className="col" name="vegetarian">
        <div className="form-check">
          <input className="form-check-input" type="radio" value="vegetarian" checked={pizzaEditForm.vegetarian !== null ? pizzaEditForm.vegetarian : false} name="vegetarian" onChange={handleChange}/>
          <label className="form-check-label">
            Vegetarian
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="radio" value="not vegetarian" checked={pizzaEditForm.vegetarian !== null ? !pizzaEditForm.vegetarian: false} name="vegetarian" onChange={handleChange}/>
          <label className="form-check-label">
            Not Vegetarian
          </label>
        </div>
      </div>
      <div className="col">
        <button type="submit" className="btn btn-success" onClick={console.log}>Submit</button>
      </div>
      <div className="col">
        <button className="btn btn-success" onClick={handleReset}>Reset</button>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    pizzaEditForm: state.pizzaEditForm
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onPizzaEditFormChange: (...editedData) => dispatch(onPizzaEditFormChange(...editedData))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PizzaForm)
