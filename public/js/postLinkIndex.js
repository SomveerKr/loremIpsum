document.addEventListener("DOMContentLoaded", function () {
    const headingLinksSection = document.getElementById("heading-links");
    const headings = document.querySelectorAll("h2");

    headings.forEach((heading, index) => {
        const link = document.createElement("a");
        link.textContent = heading.textContent;
        link.href = `#post-heading${index + 1}`;
        headingLinksSection.appendChild(link);
    });
});





