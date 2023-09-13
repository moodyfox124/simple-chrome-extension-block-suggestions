const blockingElements = document.querySelectorAll(".ytp-ce-element");

if (blockingElements) {
    for(const el of blockingElements) {
        el.style.visibility = "hidden";
    }
}