# Check Printer App

A simple web application for printing checks. Enter the check details, fill in the account and routing numbers when printing, and click print.

## Features

- Form to enter check details: date, payee, amount, amount in words, memo
- Print button that generates a printable check format
- Account and routing numbers entered at print time (not stored)

## Deployment to Vercel

1. Create a Vercel account at https://vercel.com
2. Connect your GitHub repository
3. Deploy the static files

Since this is a static HTML site, Vercel will serve index.html as the root.

## Usage

1. Open the app in your browser
2. Fill in the check details
3. Click "Print Check"
4. In the print dialog, enter your routing and account numbers
5. Print the check

Note: The account and routing numbers are only used for printing and are not stored anywhere.