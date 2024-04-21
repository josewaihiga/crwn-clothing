import { createSelector } from "reselect";
export const selectCurrentUser = (state) => state.user.currentUser;


export const selectCurrentDisplayName = createSelector(
    [selectCurrentUser],
    (user) => user?.displayName
)
