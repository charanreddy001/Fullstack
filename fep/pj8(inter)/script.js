function calculateSI() {
    
    const principal = document.getElementById('principal').value;
    const years = document.getElementById('years').value;
    const rate = document.getElementById('rate').value;
  
    // Basic validation
    if (principal === '' || years === '' || rate === '') {
      alert('Please fill in all fields');
      return;
    }
  
    // Calculate Simple Interest and Amount
    const si = (principal * years * rate) / 100;
    const amount = parseFloat(principal) + si;
  
    // Display results
    document.getElementById('principalVal').textContent = `Principal : Rs. ${principal}`;
    document.getElementById('yearVal').textContent = `Years : ${years} years`;
    document.getElementById('rateVal').textContent = `Rate of interest : ${rate}%`;
    document.getElementById('siVal').textContent = `Simple Interest : Rs. ${si.toFixed(2)}`;
    document.getElementById('amountVal').textContent = `Amount : Rs. ${amount.toFixed(2)}`;
  }
  