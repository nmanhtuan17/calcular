import Context from "./Context";
import { useReducer } from "react";
import rootReducerimport, { initState } from "./reducer/rootReducer";

const ContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(rootReducerimport, initState)
    return (
        <Context.Provider value={[state, dispatch]}>
            {children}
        </Context.Provider>
    )
}

export default ContextProvider