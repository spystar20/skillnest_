import { create } from "zustand";

export const toggleStore = create(((set)=> ({

openCourseCategories: false,
openSubCategories:{},
showSort :false,
Liked:[] ,
toggle :(key) => set((state) =>({[key] : !state[key]})),

toggleSubCategories :(name) => set((state) =>({openSubCategories:{...state.openSubCategories , [name]:!state.openSubCategories[name]}})),
toggleLike :(id) => set((state)=>({ 
    Liked:state.Liked.includes(id)? state.Likd.filter((courseid) => courseid !== id ):[...state.Liked,id]
}))
 })))

