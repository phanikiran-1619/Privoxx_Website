# Privoxx Backend Server

This is a simple Node.js + Express backend for handling booking form submissions and sending them to your email via Gmail SMTP.

## Setup

1. **Install dependencies:**
   ```
   npm install
   ```

2. **Create a `.env` file in the `server/` folder:**
   ```env
   MAIL_USER=your_gmail_address@gmail.com
   MAIL_PASS=your_gmail_app_password
   PORT=5000
   ```
   - For Gmail, use an [App Password](https://support.google.com/accounts/answer/185833?hl=en) if you have 2-step verification enabled.

3. **Start the server:**
   ```
   npm start
   ```

The server will run on `http://localhost:5000` by default.

## API Endpoint

- **POST /api/book-demo**
  - Body: `{ name, email, phone, message }`
  - Sends an email to the configured address with the booking details. 