const products = [
    {
        image: 'user.jpg',
        name: 'Cloro',
        quantity: 10,
        brand: 'Marca Cloro',
        enrollNumber: '1234567305477760'
    },
    {
        image: 'user.jpg',
        name: 'Cloro',
        quantity: 10,
        brand: 'Marca Cloro',
        enrollNumber: '1234567305477760'
    }
];

function loadProducts() {
    const productList = document.getElementById('product-list');
    products.forEach(product => {
        const row = `
            <tr>
                <td><img src="${product.image}" alt="${product.name}"></td>
                <td>${product.name}</td>
                <td>${product.quantity}</td>
                <td>${product.brand}</td>
                <td>${product.enrollNumber}</td>
                <td class="actions">
                    <i class="edit">✏️</i>
                    <i class="delete">🗑️</i>
                </td>
            </tr>
        `;
        productList.innerHTML += row;
    });
}

let product = [
    {
        image: 'user.jpg',
        name: 'Cloro',
        quantity: 10,
        brand: 'Marca Cloro',
        enrollNumber: '1234567305477760'
    },
    {
        image: 'user.jpg',
        name: 'Água Sanitária',
        quantity: 5,
        brand: 'Marca Água',
        enrollNumber: '9876543210123456'
    }
];

function loadProducts() {
    const productList = document.getElementById('product-list');
    productList.innerHTML = '';  
    products.forEach((product, index) => {
        const row = `
            <tr>
                <td><img src="${product.image}" alt="${product.name}" style="width:50px;"></td>
                <td>${product.name}</td>
                <td>${product.quantity}</td>
                <td>${product.brand}</td>
                <td>${product.enrollNumber}</td>
                <td class="actions">
                    <button class="edit-btn" onclick="editProduct(${index})">✏️</button>
                    <button class="delete-btn" onclick="deleteProduct(${index})">🗑️</button>
                </td>
            </tr>
        `;
        productList.innerHTML += row;
    });
}

function addProduct() {
    const name = prompt("Digite o nome do produto:");
    const quantity = prompt("Digite a quantidade:");
    const brand = prompt("Digite a marca:");
    const enrollNumber = prompt("Digite o número de enrolamento:");

    if (name && quantity && brand && enrollNumber) {
        products.push({
            image: 'user.jpg', 
            name: name,
            quantity: parseInt(quantity),
            brand: brand,
            enrollNumber: enrollNumber
        });
        loadProducts();
    } else {
        alert("Todos os campos devem ser preenchidos!");
    }
}

function editProduct(index) {
    const product = products[index];
    const newName = prompt("Edite o nome do produto:", product.name);
    const newQuantity = prompt("Edite a quantidade:", product.quantity);
    const newBrand = prompt("Edite a marca:", product.brand);
    const newEnrollNumber = prompt("Edite o número de enrolamento:", product.enrollNumber);

    if (newName && newQuantity && newBrand && newEnrollNumber) {
        products[index] = {
            ...product,
            name: newName,
            quantity: parseInt(newQuantity),
            brand: newBrand,
            enrollNumber: newEnrollNumber
        };
        loadProducts(); 
    } else {
        alert("Todos os campos devem ser preenchidos!");
    }
}

function deleteProduct(index) {
    if (confirm("Tem certeza que deseja deletar este produto?")) {
        products.splice(index, 1); 
        loadProducts(); 
    }
}

window.onload = () => {
    loadProducts();
    document.querySelector('.add-btn').addEventListener('click', addProduct);
};