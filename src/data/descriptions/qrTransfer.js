const str = `
Transfer small files over QR codes offline

- Files are broken down into small chunks that fit inside a QR code
- Scan the QR codes on another device to import the file
- Works offline
- Uploaded / Scanned files are stored in the browser using indexedDB
- Files are hashed to check for integrity after being scanned into the app
- The hashing and scanning functionality is offloaded into web workers to optimize performance and process data in parallel
`;

export default str;