import { useCallback, useState } from "react";

const useBottomSheet = () => {
    const [isSheetOpen, setSheetOpen] = useState(false)
    
    const closeSheet = useCallback(() => {
        setSheetOpen(false);
    },[]);

    const openSheet = useCallback(() => {
        setSheetOpen(true);
    },[]);

    return {isSheetOpen, closeSheet, openSheet}
}

export default useBottomSheet