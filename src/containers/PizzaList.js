import React, {useEffect} from 'react'
import Pizza from '../components/Pizza'
import {connect} from 'react-redux'
import {isEmpty} from 'lodash'
import {fetchPizzas} from '../redux/actions'

const PizzaList = ({retrievePizzas, pizzas}) => {
  useEffect(() => {
    retrievePizzas()
  }, [])

  let pizzaRows
  if (!isEmpty(pizzas)) {
    pizzaRows = pizzas.map(pizza => <Pizza key={pizza.id} pizza={pizza} />)
  }

  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">Topping</th>
          <th scope="col">Size</th>
          <th scope="col">Vegetarian?</th>
          <th scope="col">Edit</th>
        </tr>
      </thead>
      <tbody>
        {pizzaRows}
      </tbody>
    </table>
  )
}

const mapStateToProps = state => {
  return {
    pizzas: state.pizzas.pizzas
  }
}

const mapDispatchToProps = dispatch => {
  return {
    retrievePizzas: () => dispatch(fetchPizzas())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PizzaList)
