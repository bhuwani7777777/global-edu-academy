import React from "react";
import "./AdminPages.css";

export default function Payments() {

  const payments = [
    { name: "Ram", amount: "5000", status: "Paid" },
    { name: "Sita", amount: "3000", status: "Pending" }
  ];

  return (
    <div className="admin-page">
      <h1>💰 Payments</h1>

      <div className="card-table">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {payments.map((p, i) => (
              <tr key={i}>
                <td>{p.name}</td>
                <td>Rs. {p.amount}</td>
                <td>
                  <span className={`status ${p.status.toLowerCase()}`}>
                    {p.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}