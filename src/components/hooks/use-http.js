import { useReducer, useCallback } from "react";

const httpReducer = (state, action) => {
  switch (action.type) {
    case "SEND":
      return { status: "pending", error: null, data: null };
    case "SUCCESS":
      return { error: null, status: "completed", data: action.responseData };
    case "ERROR":
      return { status: "completed", error: action.errorMessage, data: null };
    default:
      return state;
  }
};

const useHttp = (requestFunction, startWithPending = false) => {
  const [httpState, dispatch] = useReducer(httpReducer, {
    status: startWithPending ? "pending" : null,
    error: null,
    data: null,
  });

  const sendRequest = useCallback(
    async (requestData) => {
      dispatch({ type: "SEND" });
      try {
        const responseData = await requestFunction(requestData);
        dispatch({ type: "SUCCESS", responseData });
      } catch (error) {
        dispatch({
          type: "ERROR",
          errorMessage: error.message || "Something went wrong!",
        });
      }
    },
    [requestFunction]
  );

  return {
    sendRequest,
    ...httpState,
  };
};

export default useHttp;
