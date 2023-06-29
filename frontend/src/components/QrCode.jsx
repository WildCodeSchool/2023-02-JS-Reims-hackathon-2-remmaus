/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState } from "react";
import QRCode from "react-qr-code";

function QrCode() {
  const [size, setSize] = useState(256);
  const url = window.location.href;
  const [value] = useState(url);
  return (
    <div className="main-menu">
      <h1 className="titleMainMenu">QR Code</h1>
      <center>
        <br />
        <br />
        <div className="input-data">
          <input
            type="number"
            onChange={(e) =>
              setSize(parseInt(e.target.value === "" ? 0 : e.target.value, 10))
            }
            placeholder="Taille du Qr-code"
          />
          <div className="underline" />
          <label htmlFor="">QR Code Size</label>
        </div>
        <br />

        {value && (
          <QRCode
            title="smartphone QR code"
            value={url}
            bgColor="#FFFFFF"
            fgColor="#000000"
            size={size === "" ? 0 : size}
          />
        )}
        <br />
        <br />
        <button
          type="button"
          onClick={() => window.print()}
          className="linkMenu"
        >
          Imprimer le QR code
        </button>
      </center>
    </div>
  );
}

export default QrCode;
