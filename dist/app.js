"use strict";
document.addEventListener('DOMContentLoaded', () => {
    const logoContainer = document.querySelector('.logo-container');
    // Define the color palette
    const colors = ['#001F2E', '#003D47', '#F2F7F7', '#EBFF53', '#91FF77', '#00B3D3'];
    // Initial colors
    let currentBgColor = '#001F2E';
    let currentLogoColor = '#91FF77';
    if (logoContainer) {
        // Insert the SVG with the initial color
        logoContainer.innerHTML = `
        <svg width="294" height="201" viewBox="0 0 294 201" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M294 73.0875V95.3642H176.747V83.4749C176.747 72.7955 179.271 64.619 184.32 58.9456C189.368 53.1887 194.964 49.3507 201.106 47.4318C207.333 45.4294 214.948 43.719 223.951 42.3006C227.485 41.7166 231.356 41.216 235.563 40.7988C241.116 40.1314 245.449 39.5056 248.563 38.9216C251.76 38.3376 254.411 37.4198 256.514 36.1683C258.618 34.8334 259.67 33.0813 259.67 30.912C259.67 27.2409 257.103 24.5711 251.971 22.9024C246.838 21.1503 240.611 20.2743 233.291 20.2743C226.307 20.3577 220.375 21.484 215.495 23.6533C210.614 25.7391 208.174 28.993 208.174 33.415H176.747C176.747 20.5663 182.595 11.8058 194.291 7.13354C205.986 2.37785 218.986 0 233.291 0C248.521 0 262.026 2.0024 273.806 6.00719C285.67 10.012 291.602 18.397 291.602 31.1623C291.602 37.837 289.372 43.1767 284.913 47.1815C280.453 51.1028 275.404 53.8978 269.767 55.5665C264.213 57.2352 257.987 58.6535 251.087 59.8216L247.048 60.5725C246.627 60.5725 245.281 60.7811 243.009 61.1983C231.818 62.7835 222.563 64.4939 215.242 66.3294C208.006 68.0815 204.388 70.3342 204.388 73.0875H294Z" fill="${currentLogoColor}"/>
            <path d="M157.647 27.1575H170.773V46.806H157.647V95.3642H128.618V46.806H114.86V27.1575H128.618V12.3898L157.647 0.750896V27.1575Z" fill="${currentLogoColor}"/>
            <path d="M95.6706 59.0707H108.923V81.3474H95.6706V95.3642H66.3888V81.3474H0V59.0707L66.3888 2.75332H95.6706V59.0707ZM66.3888 27.7833L30.4177 59.0707H66.3888V27.7833Z" fill="${currentLogoColor}"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M81.7005 161.275C101.544 168.869 124.226 173.078 145.893 173.078C167.561 173.078 190.243 168.869 210.086 161.275C230.078 153.624 246.137 142.951 255.726 130.803L277.901 148.012C264.176 165.401 243.169 178.543 220.226 187.324C197.134 196.161 171.013 201 145.893 201C120.774 201 94.6527 196.161 71.5609 187.324C48.6175 178.543 27.6105 165.401 13.8852 148.012L36.0602 130.803C45.6492 142.951 61.7089 153.624 81.7005 161.275Z" fill="${currentLogoColor}"/>
        </svg>
        `;
    }
    // Get the SVG element
    const svgElement = document.querySelector('svg');
    // Function to get a random color different from the current one and the excluded color
    const getRandomColor = (currentColor, excludeColor = '') => {
        let newColor;
        do {
            newColor = colors[Math.floor(Math.random() * colors.length)];
        } while (newColor === currentColor || newColor === excludeColor);
        return newColor;
    };
    // Function to update all SVG paths with a new color
    const updateLogoColor = (color) => {
        if (svgElement) {
            const paths = svgElement.querySelectorAll('path');
            paths.forEach(path => {
                path.setAttribute('fill', color);
            });
            currentLogoColor = color;
        }
    };
    // Function to shake the logo
    const shakeLogo = () => {
        if (svgElement) {
            // Add the shake class
            svgElement.classList.add('shake');
            // Remove the shake class after the animation completes
            setTimeout(() => {
                svgElement.classList.remove('shake');
            }, 200); // 200ms matches the animation duration
        }
    };
    // Function to change colors
    const changeColors = () => {
        // Change colors - ensure they're different from each other
        const newBgColor = getRandomColor(currentBgColor);
        const newLogoColor = getRandomColor(currentLogoColor, newBgColor); // Exclude the new background color
        // Update background color
        document.body.style.backgroundColor = newBgColor;
        currentBgColor = newBgColor;
        // Update logo color
        updateLogoColor(newLogoColor);
    };
    // Add click event to the entire document to change colors and shake the logo
    document.addEventListener('click', () => {
        changeColors();
        shakeLogo();
    });
    // No need for a separate event handler for the SVG since we want the same behavior
    // for clicking anywhere on the page
});
