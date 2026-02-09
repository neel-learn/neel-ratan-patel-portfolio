import { useEffect } from "react"


const useAutoHideScrollbar = (isLoading) => {
    useEffect(() => {
        if (isLoading) return;

        let scrollTimeout;
        const handleScroll = () => {
            document.body.classList.add("is-scrolling");

            clearTimeout(scrollTimeout);

            scrollTimeout = setTimeout(() => {
                document.body.classList.remove("is-scrolling");
            }, 0);
        };


        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll" , handleScroll);
            clearTimeout(scrollTimeout);
        };
    }, [isLoading]);
};

export default useAutoHideScrollbar;