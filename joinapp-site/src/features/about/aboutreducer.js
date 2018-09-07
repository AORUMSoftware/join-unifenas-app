const INITIAL_STATE = { }

export default function(state = INITIAL_STATE, action)
{
    switch (action.type) {
        case 'SAME_STATE':
            return { ...state }
        
        default:
            return state
    }
}