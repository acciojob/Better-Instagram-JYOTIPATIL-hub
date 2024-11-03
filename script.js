//your code here
document.addEventListener("DOMContentLoaded", () => {
    let draggedElement = null; // Store the dragged element

    // Select all grid items and add event listeners
    const gridItems = document.querySelectorAll(".grid-item");

    gridItems.forEach(item => {
        // Start dragging
        item.addEventListener("dragstart", (event) => {
            draggedElement = event.target; // Store the reference to the dragged element
            event.dataTransfer.setData("text/plain", event.target.id); // Transfer data
        });

        // Allow dropping by preventing the default behavior
        item.addEventListener("dragover", (event) => {
            event.preventDefault();
        });

        // Handle the drop event to swap content
        item.addEventListener("drop", (event) => {
            event.preventDefault();
            if (draggedElement && draggedElement !== event.target) {
                // Swap the background images
                const draggedStyle = window.getComputedStyle(draggedElement).backgroundImage;
                const targetStyle = window.getComputedStyle(event.target).backgroundImage;

                draggedElement.style.backgroundImage = targetStyle;
                event.target.style.backgroundImage = draggedStyle;
            }
            draggedElement = null; // Reset after swap
        });

        // Reset the dragged element
        item.addEventListener("dragend", () => {
            draggedElement = null;
        });
    });
});
