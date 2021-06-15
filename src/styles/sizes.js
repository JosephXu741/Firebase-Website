
export default {
    down(size) {
        const sizes = {
            lg: "1220px",
            md: "992px",
            sm: "768px",
            xs: "576px"
        }
        return `@media (max-width: ${sizes[size]})`
    }
}