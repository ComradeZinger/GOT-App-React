import { configureStore } from '@reduxjs/toolkit'

import currentPageReducer from './slices/currentPageSlice'

export default configureStore({
    reducer: {
        currentPage: currentPageReducer
    },
});
