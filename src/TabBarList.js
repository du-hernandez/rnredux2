import React, { Component } from 'react'
import { ScrollView, View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import SuperheroresList from './superheroesList'
// Importamos todos los actions
import * as actions from './actions'
import { connect } from 'react-redux'


class TabBarList extends Component {
    render() {
        return (
            <ScrollView style={{ flex: 1 }}>
                <TouchableOpacity onPress={() => this.props.selected_tab('TAB_1')} style={[styles.green, { flex: 1 }]} >
                    <View>
                        <SuperheroresList />
                    </View>
                    <View>
                        {
                            (this.props.tab_id === 'TAB_1') ? <Text>Este</Text> : <Text>Este no</Text>
                        }
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.selected_tab('TAB_2')} style={[styles.red, { flex: 1 }]} >
                    {
                        (this.props.tab_id === 'TAB_2') ? <Text>Este</Text> : <Text>Este no</Text>
                    }
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.selected_tab('TAB_3')} style={[styles.orange, { flex: 1 }]} >
                    {
                        (this.props.tab_id === 'TAB_3') ? <Text>Este</Text> : <Text>Este no</Text>
                    }
                </TouchableOpacity>
            </ScrollView>
        )
    }
}

const mapStateToProps = (state) => {
    return { tab_id: state.TabBarId }
}
export default connect(mapStateToProps, actions)(TabBarList)
// En este caso nos interesan tanto las propiedades (tab_id) como llevar a cabo una acción,
// Por esa razón se hace: connect(mapStateToProps, actions)


const styles = StyleSheet.create({
    green: {
        backgroundColor: '#5dcc8f'
    },
    red: {
        backgroundColor: '#ff5454'
    },
    orange: {
        backgroundColor: '#ffa654'
    }
})