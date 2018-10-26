import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'

import { fetchData } from './actions'

class SuperheroresList extends Component {

    componentWillMount() {
        this.props.fetchData()
    }

    getTvShow() {
        const { dataTvMaze } = this.props
        return dataTvShow = dataTvMaze.data.map((tv, key) => {
            return <Text key={key}> {tv.show.name} </Text>
        })
    }

    render() {
        return (
            <View>
                {this.props.dataTvMaze.isFetching && <Text>Loading...</Text>}
                {
                    this.props.dataTvMaze.data.length ?
                        this.getTvShow()
                        : null
                }
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
    return { dataTvMaze: state.dataReducer }
}

const mapDispachtToProps = (dispatch) => {
    return {
        fetchData: () => dispatch(fetchData())
    }
}

// Vamos a obtener los datos como si fueran propiedades
// Una vez se ejecute la función 'connect', se ejecutará el componente SuperheroresList
export default connect(mapStateToProps, mapDispachtToProps)(SuperheroresList)
// En este caso solo nos interesan las propiedades que se retornan (Sheroes)
// Por esa razón solo se hace: connect(mapStateToProps)