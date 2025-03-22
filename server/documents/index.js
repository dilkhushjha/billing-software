import moment from 'moment';

export default function ({
  name, address, phone, email, dueDate, date, id, notes,
  subTotal, type, vat, total, items, status,
  totalAmountReceived, balanceDue, company
}) {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Invoice</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
  <style>
    body {
      background-color: #f4f4f4;
      font-family: 'Arial', sans-serif;
    }
    .invoice-container {
      width: 100%git remote -v
;
      background: #fff;
      padding: 30px;
      border-radius: 8px;
      box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
      margin: auto;

    }
    .invoice-header {
      border-bottom: 1px solid grey;
      padding-bottom: 15px;
      margin-bottom: 20px;
      display:flex;
      justify-content: space-between;
    }
    .invoice-title {
      font-size: 22px;
      font-weight: bold;
      color: #0073e6;
      text-transform: uppercase;
    }
    .table th {
      background-color: #0073e6;
      color: white;
      text-align: left;
    }
    .table td {
      text-align: center;
    }
    .summary-table th {
      background-color: #444;
      color: white;
    }
    .summary-table td {
      font-weight: bold;
      text-align: right;
    }
    .footer {
      text-align: center;
      font-size: 12px;
      color: #666;
      padding-top: 15px;
      border-top: 2px solid #0073e6;
      margin-top: 30px;
    }
  </style>
</head>
<body>
  <div class="invoice-container">
 
  <div class="invoice-header">
    <div class="">
      ${company?.logo ? `<img src="${company.logo}" class="img-fluid" style="max-width: 150px;">` : `<h2>${company.businessName || company.name}</h2>`}
      <p class="mb-1">${company.businessName || company.name}</p>
      <p class="mb-1">${company.email}</p>
      <p class="mb-1">${company.phoneNumber}</p>
      <p>${company.contactAddress}</p>
    </div>
    <div class=" text-end">
      <h3 class="invoice-title">${Number(balanceDue) <= 0 ? 'Receipt' : type}</h3>
      <p class="text-muted">Invoice ID: ${id}</p>
      <p class="text-muted">Status: <strong>${status}</strong></p>
    </div>
  </div>


    <!-- Address & Info -->
    <div class="row d-flex ">
      
      <div class="col-md-6">
        <h6 class="text-muted fw-bold">Bill to:</h6>
        <p>${name}</p>
        <p>${email}</p>
        <p>${phone}</p>
        <p>${address}</p>
      </div>
    </div>

    <!-- Invoice Details -->
    <div class="row mt-3">
      <div class="col-md-6">
        <h6 class="text-muted">Date: ${moment(date).format('ll')}</h6>
        <h6 class="text-muted">Due Date: ${moment(dueDate).format('ll')}</h6>
      </div>
      <div class="col-md-6 text-end">
        <h6 class="text-muted">Total Amount:</h6>
        <h3 class="text-primary">₹${total}</h3>
      </div>
    </div>

    <!-- Items Table -->
    <table class="table table-striped table-bordered mt-4">
      <thead>
        <tr>
          <th>Item</th>
          <th>Quantity</th>
          <th>Price</th>
          <th>Discount (%)</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        ${items.map(item => `
        <tr>
          <td>${item.itemName}</td>
          <td>${item.quantity}</td>
          <td>₹${item.unitPrice}</td>
          <td>${item.discount}%</td>
          <td>₹${(item.quantity * item.unitPrice) - (item.quantity * item.unitPrice * item.discount / 100)}</td>
        </tr>`).join('')}
      </tbody>
    </table>

    <!-- Summary Table -->
    <table class="table table-bordered mt-4 summary-table">
      <thead>
        <tr>
          <th colspan="2">Invoice Summary</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Sub Total</td>
          <td>₹${subTotal}</td>
        </tr>
        <tr>
          <td>VAT</td>
          <td>₹${vat}</td>
        </tr>
        <tr>
          <td>Total</td>
          <td>₹${total}</td>
        </tr>
        <tr>
          <td>Paid</td>
          <td>₹${totalAmountReceived}</td>
        </tr>
        <tr>
          <td>Balance Due</td>
          <td>₹${balanceDue}</td>
        </tr>
      </tbody>
    </table>

    <!-- Notes Section -->
    <div class="mt-4">
      <h6 class="text-muted">Note:</h6>
      <p>${notes}</p>
    </div>

    <!-- Footer -->
    <div class="footer">
      <p>Thank you for your visit!</p>
    </div>
  </div>

  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>`;
};
