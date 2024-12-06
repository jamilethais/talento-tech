document.getElementById('expense-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const description = document.getElementById('description').value;
    const amount = document.getElementById('amount').value;

    addExpense(description, amount);
    clearForm();
});

function addExpense(description, amount) {
    const expenseList = document.getElementById('expense-list');
    const li = document.createElement('li');

    li.innerHTML = `${description} - R$${amount} <button onclick="removeExpense(this)">X</button>`;
    expenseList.appendChild(li);
}

function removeExpense(button) {
    const li = button.parentNode;
    li.parentNode.removeChild(li);
}

function clearForm() {
    document.getElementById('description').value = '';
    document.getElementById('amount').value = '';
}
