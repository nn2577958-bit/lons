import express from 'express';
import { OAuth2Client } from 'google-auth-library';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors()); // GitHub Pages에서 fetch 가능

// Google Web Client ID
const CLIENT_ID = "755692328918-rncbloi5oh3tj9kh4nauhurihui1ohfp.apps.googleusercontent.com";
const client = new OAuth2Client(CLIENT_ID);

// 로그인 인증 엔드포인트
app.post('/auth/google', async (req, res) => {
  const { idToken } = req.body;

  try {
    const ticket = await client.verifyIdToken({ idToken, audience: CLIENT_ID });
    const payload = ticket.getPayload();

    // 관리자 이메일 설정
    const adminEmails = ["nn2577958@gmail.com"];
    const isAdmin = adminEmails.includes(payload.email);

    res.json({ isAdmin });
  } catch (err) {
    console.error(err);
    res.status(401).json({ error: "Invalid token" });
  }
});

// 서버 포트
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
