import { createContext, ReactNode, useMemo } from "react";
import useBottomSheet from "../util/useBottomSheet";

interface AppContextProps {
    isShiftDetailsSheetOpen: boolean,
    openShiftDetailsSheet: () => void,
    closeShiftDetailsSHeet: () => void
}

const appContext = createContext<AppContextProps>({
    isShiftDetailsSheetOpen: false,
    openShiftDetailsSheet: () => {},
    closeShiftDetailsSHeet: () => {}
})

function AppContextProvider({children}: {children: ReactNode}) {
    const {openSheet: openShiftDetailsSheet, isSheetOpen: isShiftDetailsSheetOpen, closeSheet: closeShiftDetailsSHeet} = useBottomSheet()

    const value = useMemo(() => ({
        openShiftDetailsSheet,
        isShiftDetailsSheetOpen,
        closeShiftDetailsSHeet
    }),[openShiftDetailsSheet, isShiftDetailsSheetOpen, closeShiftDetailsSHeet])

    return (
        <appContext.Provider value={value}>
            {children}
        </appContext.Provider>
    )
}

export { appContext, AppContextProvider };

