// Serverless function to verify reCAPTCHA v3 token against Google API
// POST /api/verify-recaptcha
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Method Not Allowed' })
  }

  const { token } = req.body || {}
  const secretKey = process.env.RECAPTCHA_SECRET_KEY || '6LfOpRctAAAAAFsfHCAki_z8RXXZtiJjaTdyOzAX'

  if (!token) {
    return res.status(400).json({ success: false, error: 'Missing token' })
  }

  try {
    const verificationUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${token}`
    const response = await fetch(verificationUrl, { method: 'POST' })
    const data = await response.json()

    // Google returns: { success: true|false, score: 0.0 - 1.0, action: 'string', challenge_ts: '...', hostname: '...' }
    if (data.success && data.score >= 0.5) {
      return res.status(200).json({ success: true, score: data.score })
    } else {
      return res.status(400).json({
        success: false,
        score: data.score,
        error: 'reCAPTCHA verification failed or low trust score'
      })
    }
  } catch (err) {
    return res.status(500).json({ success: false, error: err.message })
  }
}
