// ***************Add - many - btn****************

document
  .getElementById('Add-many-btn')
  .addEventListener('click', function (event) {
    event.preventDefault();

    const Balance = document.getElementById('balance').innerText;
    const MainBalance = parseFloat(Balance);

    const AddAmount = document.getElementById('addAmount').value;
    const Add_num_amount = parseFloat(AddAmount);

    const PinNumber = document.getElementById('pinNumber').value;

    if (PinNumber === '1234') {
      const Total_Balance = MainBalance + Add_num_amount;

      document.getElementById('balance').innerText = Total_Balance;
      console.log(Total_Balance);
    } else {
      alert('Sorry enter the right Password');
    }
  });
