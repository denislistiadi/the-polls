import { ADD_POLL, RECEIVE_POLLS } from "../actions/polls";
import { ADD_ANSWER } from "../actions/answers";

export default function polls(state = {}, action) {
  switch (action.type) {
    case ADD_POLL:
      return {
        ...state,
        [action.poll.id]: action.poll,
      };
    case RECEIVE_POLLS:
      return {
        ...state,
        ...action.polls,
      };
    case ADD_ANSWER:
        const { authedUser, id, answer } = action;
        const poll = state[id];
        const votesKey = answer + 'Votes'

        return {
            ...state,
            [action.id]: {
                ...poll,
                [votesKey]: poll[votesKey].concat([authedUser]),
            }
        }
    default:
      return state;
  }
}
