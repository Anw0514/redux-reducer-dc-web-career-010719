export function manageFriends(state, action){
    switch (action.type) {
        case "ADD_FRIEND": 
            return {...state, "friends": [...state.friends, action.friend]};
        case "REMOVE_FRIEND":
            let friends = state.friends.filter(friend => friend.id !== action.id)
            return {...state, "friends": friends}
        default: return state;
    }    
}
