document.getElementById('printBtn').addEventListener('click', function() {
    const bankName = document.getElementById('bankName').value;
    const bankAddress = document.getElementById('bankAddress').value;
    const payorName = document.getElementById('payorName').value;
    const payorAddress = document.getElementById('payorAddress').value;
    const date = document.getElementById('date').value;
    const payee = document.getElementById('payee').value;
    const amount = document.getElementById('amount').value;
    const amountWords = document.getElementById('amountWords').value;
    const memo = document.getElementById('memo').value;

    if (!bankName || !bankAddress || !payorName || !payorAddress || !date || !payee || !amount || !amountWords) {
        alert('Please fill in all required fields.');
        return;
    }

    // Generate random check number
    const checkNumber = Math.floor(Math.random() * 90000000) + 10000000; // 8-digit number

    // Populate preview
    document.getElementById('previewBankName').textContent = bankName;
    document.getElementById('previewBankAddress').textContent = bankAddress;
    document.getElementById('previewPayorName').textContent = payorName;
    document.getElementById('previewPayorAddress').textContent = payorAddress;
    document.getElementById('previewCheckNumber').textContent = checkNumber;
    document.getElementById('previewDate').textContent = date;
    document.getElementById('previewPayee').textContent = payee;
    document.getElementById('previewAmount').textContent = amount;
    document.getElementById('previewAmountWords').textContent = amountWords;
    document.getElementById('previewMemo').textContent = memo;

    // Show preview
    document.getElementById('checkPreview').style.display = 'block';

    // Print
    window.print();
});