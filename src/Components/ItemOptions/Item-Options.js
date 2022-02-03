import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    categories:["Popular","Products","Services","Events","Hustlers"]
}

const categoriesSlice = createSlice(
    {
        name:"category",
        initialState,
        reducers:{}
    }
)
//console.log(initialState);

export const selectCategory = state =>state.category.categories;
export default categoriesSlice.reducer
