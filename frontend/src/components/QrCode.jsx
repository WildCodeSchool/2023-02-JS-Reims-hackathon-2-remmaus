/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState } from "react";
import QRCode from "react-qr-code";

function QrCode() {
  const [size, setSize] = useState(256);
  const url = window.location.href;
  const [value] = useState(url);
  return (
    <div>
      <h1 className="titleMainMenu">QR Code</h1>
      <div className="input-data">
        <input
          type="number"
          onChange={(e) =>
            setSize(parseInt(e.target.value === "" ? 0 : e.target.value, 10))
          }
          placeholder="Taille du Qr-code: 256"
        />
        <div className="underline" />
      </div>
      {value && (
        <QRCode
          title="smartphone QR code"
          value={url}
          bgColor="#FFFFFF"
          fgColor="#000000"
          size={size === "" ? 0 : size}
        />
      )}
      <button type="button" onClick={() => window.print()} className="linkMenu">
        Imprimer le QR code
      </button>
    </div>
  );
}

export default QrCode;
