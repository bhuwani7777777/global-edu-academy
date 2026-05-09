import React from "react";
import "./WhatsAppButton.css";
import { openWhatsApp } from "../utils/whatsapp";

export default function WhatsAppButton() {
  return (
    <div
      className="whatsapp-float"
      onClick={() =>
        openWhatsApp("Hello Global Educational Academy, I need information.")
      }
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
        alt="WhatsApp"
      />
    </div>
  );
}