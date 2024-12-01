const QRCode = require('qrcode');

const url = 'https://www.chloedebloom.xyz';

async function generateQRCodes() {
  try {
    // Generate 1000x1000 QR code
    await QRCode.toFile('public/qr-1000.png', url, {
      width: 1000,
      margin: 1,
      color: {
        dark: '#000000',
        light: '#ffffff'
      }
    });

    // Generate 5000x5000 QR code
    await QRCode.toFile('public/qr-5000.png', url, {
      width: 5000,
      margin: 1,
      color: {
        dark: '#000000',
        light: '#ffffff'
      }
    });

    console.log('QR codes generated successfully!');
  } catch (err) {
    console.error('Error generating QR codes:', err);
  }
}

generateQRCodes();
