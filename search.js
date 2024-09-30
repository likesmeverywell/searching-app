const items = [
    "Apple",
    "Banana",
    "Orange",
    "Pineapple",
    "Strawberry",
    "Watermelon",
    "Grapes",
    "Peach",
    "Cherry",
    "Blueberry"
];


const searchInput = document.getElementById('searchInput');
const resultsList = document.getElementById('resultsList');


function searchItems() {
    const query = searchInput.value.toLowerCase();
    resultsList.innerHTML = ''; 

    const filteredItems = items.filter(item => item.toLowerCase().includes(query));

    filteredItems.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        resultsList.appendChild(li);
    });
}


searchInput.addEventListener('input', searchItems);

