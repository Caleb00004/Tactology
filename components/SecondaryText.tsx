import { ReactNode } from "react"
import { ThemedText } from "./themed-text"

const SecondaryText = ({children}: {children: ReactNode}) => {
    return (
        <ThemedText style={{fontSize: 14, color: "#4E5D69", lineHeight: 24}}>
            {children}            
        </ThemedText>
    )
}

export default SecondaryText