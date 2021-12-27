import { useEffect } from "react"
import { useLocation} from "react-router-dom"

const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
}

const ScrollToTop = () => {
    const pathname = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [pathname])

    return null
}

export {openInNewTab, ScrollToTop}