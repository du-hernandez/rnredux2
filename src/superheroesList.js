import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'

class SuperheroresList extends Component {

    getSuperheroes() {
        const { Sheroes } = this.props
        return SheroesData = Sheroes.map((heroe, key) => {
            return <Text key={key}> {heroe.superhero} </Text>
        })
    }

    render() {
        return (
            <View>
                {this.getSuperheroes()}
            </View>
        )
    }
}


// Recibe la combinación de estados que se definen en index.js
/*export default combineReducers({
    superheroes: superheroesReducer
})*/
const mapStateToProps = (state) => {
    // Ahora llamamos al estado específico que necesitemos, en este caso state.superheroes
    return { Sheroes: state.superheroes }
}

// Vamos a obtener los datos como si fueran propiedades
// Una vez se ejecute la función 'connect', se ejecutará el componente SuperheroresList
export default connect(mapStateToProps)(SuperheroresList)
// En este caso solo nos interesan las propiedades que se retornan (Sheroes)
// Por esa razón solo se hace: connect(mapStateToProps)