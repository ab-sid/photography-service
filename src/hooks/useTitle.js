import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - AB Siddique`;
    }, [title])
}

export default useTitle;