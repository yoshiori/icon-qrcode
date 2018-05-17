import QRCode from "qrcode"

window.onload = () =>{
  const canvas = document.getElementById("canvas");
  const DEFAULT_TEXT = "https://github.com/yoshiori/";
  var image_url = "images/icon.png";

  const drawQRcode = () => {
    const logo = new Image();
    logo.src = image_url;
    const text = document.getElementById("input-text").value || DEFAULT_TEXT;
    QRCode.toCanvas(canvas, text, { errorCorrectionLevel: 'H', width: 300 }, error => {
      if (error) throw error;
      logo.onload = () => {
        canvas.getContext('2d').drawImage(logo, 100, 100, 100, 100);
      };
    });
  };

  document.getElementById("button").onclick = () => {
    drawQRcode();
  };

  document.getElementById("input-image").addEventListener("change", (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      image_url = reader.result;
    };
  });
};
