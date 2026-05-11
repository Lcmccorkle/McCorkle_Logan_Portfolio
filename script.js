function openTab(evt, tabName) {
    // Hide all tab contents
    const tabContents = document.querySelectorAll(".tab-content");
    tabContents.forEach(content => content.classList.remove("active"));

    // Remove active from all buttons
    const tabButtons = document.querySelectorAll(".tab-button");
    tabButtons.forEach(button => button.classList.remove("active"));

    // Show the selected tab and mark button active
    document.getElementById(tabName).classList.add("active");
    evt.currentTarget.classList.add("active");
}
