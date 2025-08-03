const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.post('/api/book-demo', async (req, res) => {
  console.log('Received booking request:', req.body);
  const { name, email, phone, message } = req.body;

  // Check if email credentials are configured
  if (!process.env.MAIL_USER || !process.env.MAIL_PASS) {
    console.log('Email credentials not configured, returning success response');
    return res.status(200).json({ 
      success: true, 
      message: 'Demo booking received! Email service not configured yet.',
      data: { name, email, phone, message }
    });
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.MAIL_USER,
    to: process.env.MAIL_USER,
    subject: 'New Demo Booking',
    text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully');
    res.status(200).json({ success: true, message: 'Booking sent!' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ success: false, message: 'Failed to send email', error });
  }
});

// Add a health check endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({ 
    status: 'ok', 
    message: 'Server is running',
    emailConfigured: !!(process.env.MAIL_USER && process.env.MAIL_PASS)
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Health check available at http://localhost:${PORT}/api/health`);
  if (!process.env.MAIL_USER || !process.env.MAIL_PASS) {
    console.log('⚠️  Email credentials not configured. Demo bookings will work but emails won\'t be sent.');
    console.log('   To configure email, create a .env file with MAIL_USER and MAIL_PASS');
  }
}); 