export default function comments(state = [], action) {
  switch (action.type) {
    case 'ADD_COMMENT' :
      return {
        ...state,
        [action.postId]: [...state[action.postId], {
          user: action.author, text: action.comment
        }]
      }
    case 'REMOVE_COMMENT':
      const posts = state[action.postId]
      return {
        ...state,
        [action.postId]: [
          ...posts.slice(0, action.index),
          ...posts.slice(action.index + 1)
        ]
      }
    default: return state
  }
}
