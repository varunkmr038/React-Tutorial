import { UPDATE_COUNTER } from "../constants";

export const updateCounter = (count) => ({
  type: UPDATE_COUNTER,
  count,
});
