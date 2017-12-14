//if this state return undefined instead return null,
// cause if return undefined redux will throw an error
export default (state = null, action) => {
    console.log(action);
    switch (action.type) {
        case 'select_library':
            return action.payload;
        default:
            return state;
    }
};
