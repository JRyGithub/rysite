import { useCallback, useState } from "react"

const useToggle = (initialValue: boolean) => {
    const [value, setValue] = useState<boolean>(initialValue);

    const toggle = useCallback(() => {
        setValue(v => !v);
    }, [])

    return [value, toggle];
}
