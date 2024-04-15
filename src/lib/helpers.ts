export const scrollToHash = function (element_id: string) {
    const element = document.getElementById(element_id)
    element?.scrollIntoView({ 
        behavior: "smooth", 
        block: "end", 
        inline: "nearest" 
    });
}

export const scrollToHashWithOffset = function (element_id: string, offsetTop:number) {
    const element = document.getElementById(element_id);
    if (element) {
        const elementRect = element.getBoundingClientRect();
        const absoluteElementTop = elementRect.top + window.pageYOffset;
        const scrollToPosition = absoluteElementTop - offsetTop;

        window.scrollTo({
            top: scrollToPosition,
            behavior: 'smooth'
        });
    }
}