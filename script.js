// Check if a number is even
const isEven = (num) => num % 2 === 0;

// Calculate sum of numbers
const sum = (nums) => nums.reduce((acc, el) => acc + el, 0);

// Calculate average
const average = (nums) => sum(nums) / nums.length;

// Calculate median
const median = (nums) => {
    const sorted = nums.slice().sort((a, b) => a - b);
    const length = sorted.length;
    const middle = length / 2 - 1;
    return isEven(length)
        ? average([sorted[middle], sorted[middle + 1]])
        : sorted[Math.ceil(middle)];
};

// Collection of spreadsheet functions
const spreadsheetFunctions = {
    sum,
    average,
    median,
};

// Generate a range of numbers
const range = (start, end) =>
    Array(end - start + 1)
        .fill(start)
        .map((element, index) => element + index);

// Generate a range of chars
const charRange = (start, end) =>
    range(start.charCodeAt(0), end.charCodeAt(0)).map((code) =>
        String.fromCharCode(code)
    );

window.onload = () => {
    const container = document.getElementById("container");
    const createLabel = (name) => {
        const label = document.createElement("div");
        label.className = "label";
        label.textContent = name;
        container.appendChild(label);
    };

    const letters = charRange("A", "J");
    letters.forEach(createLabel);

    range(1, 99).forEach((number) => {
        createLabel(number);
        letters.forEach((letter) => {
            const input = document.createElement("input");
            input.type = "text";
            input.id = letter + number;
            input.ariaLabel = letter + number;
            container.appendChild(input);
        });
    });
};
