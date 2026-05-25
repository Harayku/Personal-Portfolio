export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const { name, email, subject, message } = req.body;

    // Basic server-side validation
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ error: 'All fields are required.' });
    }

    // ─────────────────────────────────────────────────────────────────
    // ✉️ EMAIL SERVICE SETUP (Choose one)
    // ─────────────────────────────────────────────────────────────────
    
    // OPTION 1: Using Resend (Recommended for Vercel)
    // 1. Run: npm install resend
    // 2. Add RESEND_API_KEY to your Vercel Environment Variables
    // 3. Uncomment the code below:
    
    /*
    const { Resend } = require('resend');
    const resend = new Resend(process.env.RESEND_API_KEY);
    
    await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>', // Update with your verified domain if you have one
      to: 'your.email@example.com', // REPLACE: Where you want to receive emails
      reply_to: email,
      subject: `[Portfolio] ${subject}`,
      html: `
        <h3>New message from your portfolio</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br/>')}</p>
      `
    });
    */

    // OPTION 2: Using SendGrid
    // 1. Run: npm install @sendgrid/mail
    // 2. Add SENDGRID_API_KEY to your Vercel Environment Variables
    // 3. Uncomment the code below:
    
    /*
    const sgMail = require('@sendgrid/mail');
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    
    await sgMail.send({
      to: 'your.email@example.com', // REPLACE: Where you want to receive emails
      from: 'noreply@yourdomain.com', // REPLACE: Verified SendGrid sender
      replyTo: email,
      subject: `[Portfolio] ${subject}`,
      html: `
        <h3>New message from your portfolio</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br/>')}</p>
      `
    });
    */

    // Placeholder log for testing without email service
    console.log('Form submission received:', { name, email, subject, message });

    // Return success response
    return res.status(200).json({ success: true, message: 'Message sent successfully!' });
    
  } catch (error) {
    console.error('Contact form error:', error);
    return res.status(500).json({ error: 'Failed to send message.' });
  }
}
