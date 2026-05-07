document.getElementById('printBtn').addEventListener('click', function() {
    const date = document.getElementById('date').value;
    const payee = document.getElementById('payee').value;
    const amount = document.getElementById('amount').value;
    const amountWords = document.getElementById('amountWords').value;
    const memo = document.getElementById('memo').value;

    if (!date || !payee || !amount || !amountWords) {
        alert('Please fill in all required fields.');
        return;
    }

    // Populate preview
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