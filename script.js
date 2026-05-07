// Number to words conversion
const ones = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];
const teens = ['Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];
const tens = ['', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];

function numberToWords(num) {
    if (num === 0) return 'Zero';
    let words = '';
    if (num >= 1000000) {
        words += numberToWords(Math.floor(num / 1000000)) + ' Million ';
        num %= 1000000;
    }
    if (num >= 1000) {
        words += numberToWords(Math.floor(num / 1000)) + ' Thousand ';
        num %= 1000;
    }
    if (num >= 100) {
        words += ones[Math.floor(num / 100)] + ' Hundred ';
        num %= 100;
    }
    if (num >= 20) {
        words += tens[Math.floor(num / 10)] + ' ';
        num %= 10;
    } else if (num >= 10) {
        words += teens[num - 10] + ' ';
        num = 0;
    }
    if (num > 0) {
        words += ones[num] + ' ';
    }
    return words.trim();
}

document.getElementById('amount').addEventListener('input', function() {
    const amount = parseFloat(this.value);
    if (isNaN(amount) || amount < 0) {
        document.getElementById('amountWords').value = '';
        return;
    }
    const dollars = Math.floor(amount);
    const cents = Math.round((amount - dollars) * 100);
    let words = numberToWords(dollars) + ' Dollars';
    if (cents > 0) {
        words += ' and ' + numberToWords(cents) + ' Cents';
    }
    document.getElementById('amountWords').value = words;
});
const bankData = {
    '021000021': { name: 'JPMorgan Chase Bank', address: '270 Park Avenue, New York, NY 10017' },
    '121000358': { name: 'Bank of America', address: '100 North Tryon Street, Charlotte, NC 28255' },
    '031100173': { name: 'Wells Fargo Bank', address: '420 Montgomery Street, San Francisco, CA 94104' },
    '051000017': { name: 'Citibank', address: '388 Greenwich Street, New York, NY 10013' },
    '111000614': { name: 'US Bank', address: '800 Nicollet Mall, Minneapolis, MN 55402' },
    // Add more as needed
};

document.getElementById('routing').addEventListener('input', function() {
    const routing = this.value;
    if (routing.length === 9 && bankData[routing]) {
        document.getElementById('bankName').value = bankData[routing].name;
        document.getElementById('bankAddress').value = bankData[routing].address;
    } else {
        document.getElementById('bankName').value = '';
        document.getElementById('bankAddress').value = '';
    }
});

document.getElementById('printBtn').addEventListener('click', function() {
    const routing = document.getElementById('routing').value;
    const bankName = document.getElementById('bankName').value;
    const bankAddress = document.getElementById('bankAddress').value;
    const payorName = document.getElementById('payorName').value;
    const payorAddress = document.getElementById('payorAddress').value;
    const date = document.getElementById('date').value;
    const payee = document.getElementById('payee').value;
    const amount = document.getElementById('amount').value;
    const amountWords = document.getElementById('amountWords').value;
    const memo = document.getElementById('memo').value;

    if (!routing || !bankName || !bankAddress || !payorName || !payorAddress || !date || !payee || !amount || !amountWords) {
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
    document.getElementById('micrRouting').textContent = routing;

    // Show preview
    document.getElementById('checkPreview').style.display = 'block';

    // Print
    window.print();
});