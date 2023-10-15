// Calculator Logic
document.addEventListener('DOMContentLoaded', function () {
    // Get the display element
    const display = document.getElementById('display');

    // Add event listeners for calculator buttons
    // Implement your calculator logic here

    // CSV Export Logic
    const exportButton = document.getElementById('exportButton');
    exportButton.addEventListener('click', function () {
        // Create a CSV content string based on the calculator input and output
        const csvContent = `"Input","Output"\n`;
        // Loop through your calculator history or data and add rows to the CSV content

        // Create a Blob with the CSV content
        const blob = new Blob([csvContent], { type: 'text/csv' });

        // Create a download link
        const a = document.createElement('a');
        a.href = URL.createObjectURL(blob);
        a.download = 'calculator_data.csv';
        a.style.display = 'none';
        document.body.appendChild(a);

        // Trigger a click event on the link to download the CSV
        a.click();

        // Clean up
        document.body.removeChild(a);
    });
});
