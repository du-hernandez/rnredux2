// Este señor es como decir en el otro lado
// connect(mapStateToProps, actions)
export default (state = 'TAB_3', action) => {
    switch (action.type) {
        case 'selected_tab':
            return action.payload
        default:
            return state
    }
}