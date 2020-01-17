import React from "react"
import {connect} from 'react-redux'
import {onPizzaEditFormChange, deletePizza} from '../redux/actions'

const Pizza = ({pizza, onPizzaEditFormChange, onDeletePizza}) => {

  return(
    <tr>
      <td>{pizza.topping}</td>
      <td>{pizza.size}</td>
      <td>{pizza.vegetarian ? 'Yes' : 'No'}</td>
      <td><button type="button" className="btn btn-primary" onClick={() => onPizzaEditFormChange(['id', pizza.id], ['topping', pizza.topping], ['size', pizza.size], ['vegetarian', pizza.vegetarian])}>Edit Pizza</button></td>
      <td><button type="button" className="btn btn-primary" onClick={() => onDeletePizza(pizza.id)}>Delete</button></td>
    </tr>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    onPizzaEditFormChange: (...editedData) => dispatch(onPizzaEditFormChange(...editedData)),
    onDeletePizza: id => dispatch(deletePizza(id))
  }
}

export default connect(null, mapDispatchToProps)(Pizza)
