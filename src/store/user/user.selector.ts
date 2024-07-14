import { createSelector } from "reselect";

import { UserState } from "./user.reducer";
import { UserData } from "../../utils/firebase/firebase.utils";
import { RootState } from "../store";

export const selectUserReducer = (state: RootState): UserState => state.user;

export const selectCurrentUser = createSelector(selectUserReducer, (user) => user.currentUser);

export const selectCurrentDisplayName = createSelector(selectCurrentUser, (user) => user?.displayName);
