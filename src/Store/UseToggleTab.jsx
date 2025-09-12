import { create } from "zustand";
 
export const usetoggletab = create((set)=>({
    tab: "review", syllabus:{module1:true , module2:false, module3:false, module4:false,module5:false}, syllabus:false,
 toggletab : (tabName) =>set({tab:tabName}),

 toggleModule:(module)=> set((state)=>({syllabus:{...state.syllabus , [module]:!state.syllabus[module]}}))
}))