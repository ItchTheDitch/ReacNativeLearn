//if this state return undefined instead return null,
// cause if return undefined redux will throw an error
export default (state = null, action) => {
    switch (action.type) {
        case 'select_library':
            return action.paylaod;
        default:
            return state;
    }
};
