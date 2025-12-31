import { useReducer } from 'react';
export function useUserStore() {
  const userReducer = (
    state: { username: string },
    action: { type: string; value: string }
  ) => {
    console.log(action);
    switch (action.type) {
      case 'SET_USERNAME':
        if (state.username === action.value) {
          return state;
        }
        return { ...state, username: action.value };
      default:
        return state;
    }
  };
  // Placeholder for user store logic
  const [state, dispatch] = useReducer(userReducer, { username: '' });
  return { state, dispatch };
}
