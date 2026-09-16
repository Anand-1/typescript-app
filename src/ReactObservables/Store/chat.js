import { Subject } from "rxjs";

// Subject pattern: a Subject is both observable and observer, so the store can
// publish state changes to all subscribers.
const subject = new Subject();
const initialState = {
  status: "",
  data: [],
  newDataCount: 0,
  error: "",
};

let state = initialState;

const chatStore = {
  init: () => {
    // Store initialization pattern: publish a normalized state snapshot to subscribers.
    state = { ...state, newDataCount: 0 };
    subject.next(state);
  },
  // Subscription facade pattern: React components do not need to know RxJS details.
  subscribe: (setState) => subject.subscribe(setState),
  sendMessage: (message) => {
    // Immutable update pattern: create a new data array before publishing state.
    state = {
      ...state,
      data: [...state.data, message],
      newDataCount: state.newDataCount + 1,
    };
    subject.next(state);
  },
  clearChat: () => {
    // Command method pattern: expose domain actions instead of raw Subject access.
    state = { ...state, data: [] };
    subject.next(state);
  },
  initialState,
};

export default chatStore;
