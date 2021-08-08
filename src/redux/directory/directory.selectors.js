import { createSelector } from "reselect";

const directorySelector = (state) => state.directory;

export const selectSections = createSelector([directorySelector], (directory) => directory.sections);
