import { useState } from "react";

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Helvetica+Neue:wght@400;700&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: Helvetica, Arial, sans-serif;
    background-color: #f0f2f5;
  }

  .fb-page {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    background-color: #f0f2f5;
  }

  .fb-main {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    gap: 32px;
  }

  .fb-hero {
    max-width: 400px;
    padding-bottom: 60px;
  }

  .fb-logo {
    color: #1877f2;
    font-size: 56px;
    font-weight: 700;
    letter-spacing: -1.5px;
    margin-bottom: 16px;
    line-height: 1;
  }

  .fb-tagline {
    font-size: 26px;
    line-height: 32px;
    color: #1c1e21;
    font-weight: 400;
  }

  .fb-card {
    background: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0,0,0,.1), 0 8px 16px rgba(0,0,0,.1);
    padding: 20px;
    width: 396px;
  }

  .fb-input {
    width: 100%;
    padding: 14px 16px;
    font-size: 17px;
    border: 1px solid #dddfe2;
    border-radius: 6px;
    margin-bottom: 12px;
    outline: none;
    color: #1c1e21;
    transition: border-color 0.15s;
    font-family: Helvetica, Arial, sans-serif;
  }

  .fb-input:focus {
    border-color: #1877f2;
    box-shadow: 0 0 0 2px rgba(24,119,242,0.2);
  }

  .fb-input::placeholder {
    color: #90949c;
  }

  .fb-btn-login {
    width: 100%;
    padding: 14px;
    background-color: #1877f2;
    color: #fff;
    font-size: 20px;
    font-weight: 700;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    transition: background-color 0.2s;
    font-family: Helvetica, Arial, sans-serif;
    margin-top: 4px;
  }

  .fb-btn-login:hover {
    background-color: #166fe5;
  }

  .fb-btn-login:active {
    background-color: #1464d8;
  }

  .fb-forgot {
    display: block;
    text-align: center;
    color: #1877f2;
    font-size: 14px;
    text-decoration: none;
    margin: 16px 0;
    cursor: pointer;
  }

  .fb-forgot:hover {
    text-decoration: underline;
  }

  .fb-divider {
    height: 1px;
    background-color: #dadde1;
    margin: 20px 0;
  }

  .fb-btn-create {
    display: block;
    margin: 0 auto;
    padding: 14px 20px;
    background-color: #42b72a;
    color: #fff;
    font-size: 17px;
    font-weight: 700;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    transition: background-color 0.2s;
    font-family: Helvetica, Arial, sans-serif;
    white-space: nowrap;
  }

  .fb-btn-create:hover {
    background-color: #36a420;
  }

  .fb-btn-create:active {
    background-color: #2b9217;
  }

  .fb-page-link {
    text-align: center;
    margin-top: 28px;
    font-size: 14px;
    color: #1c1e21;
  }

  .fb-page-link a {
    color: #1877f2;
    text-decoration: none;
    font-weight: 600;
    cursor: pointer;
  }

  .fb-page-link a:hover {
    text-decoration: underline;
  }

  .fb-footer {
    background: #f0f2f5;
    border-top: 1px solid #dadde1;
    padding: 24px 0 16px;
    font-size: 12px;
    color: #90949c;
  }

  .fb-footer-links {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 4px 8px;
    max-width: 980px;
    margin: 0 auto;
    padding: 0 20px;
  }

  .fb-footer-links a {
    color: #90949c;
    text-decoration: none;
    cursor: pointer;
  }

  .fb-footer-links a:hover {
    text-decoration: underline;
  }

  .fb-footer-copy {
    text-align: center;
    margin-top: 12px;
    font-size: 11px;
  }

  .fb-lang {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 4px 6px;
    max-width: 980px;
    margin: 0 auto 16px;
    padding: 0 20px;
  }

  .fb-lang a {
    color: #90949c;
    text-decoration: none;
    font-size: 12px;
    cursor: pointer;
  }

  .fb-lang a:hover {
    text-decoration: underline;
  }

  .fb-lang-active {
    color: #1c1e21 !important;
    font-weight: 600;
  }

  @media (max-width: 768px) {
    .fb-main {
      flex-direction: column;
      align-items: center;
      padding-top: 40px;
    }

    .fb-hero {
      text-align: center;
      padding-bottom: 0;
      max-width: 100%;
    }

    .fb-logo {
      font-size: 42px;
    }

    .fb-tagline {
      font-size: 18px;
      line-height: 24px;
    }

    .fb-card {
      width: 100%;
      max-width: 396px;
    }
  }

  .fb-error {
    background-color: #fff1f0;
    border: 1px solid #ffa39e;
    border-radius: 6px;
    padding: 10px 14px;
    margin-bottom: 12px;
    font-size: 14px;
    color: #cf1322;
  }
`;

export default function FacebookLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("The email address or mobile number you entered isn't connected to an account.");
      return;
    }
    setError("");
    alert(email);
    alert(password);
  };

  const footerLinks = [
    "Facebook", "Messenger", "Facebook Lite", "Video", "Places", "Games",
    "Marketplace", "Meta Pay", "Meta Store", "Meta Quest", "Instagram",
    "Threads", "Fundraisers", "Services", "Voting Information Center",
    "Privacy Policy", "Privacy Center", "Groups", "About", "Create ad",
    "Create Page", "Developers", "Careers", "Cookies", "Ad choices",
    "Terms", "Help", "Contact Uploading & Non-Users"
  ];

  const languages = [
    { label: "English (US)", active: true },
    { label: "Filipino" }, { label: "Español" }, { label: "Français (France)" },
    { label: "中文(简体)" }, { label: "العربية" }, { label: "Português (Brasil)" },
    { label: "हिन्दी" }, { label: "Italiano" }, { label: "Deutsch" },
    { label: "+ 한국어" }
  ];

  return (
    <>
      <style>{styles}</style>
      <div className="fb-page">
        <main className="fb-main">
          <div className="fb-hero">
            <div className="fb-logo">facebook</div>
            <p className="fb-tagline">
              Connect with friends and the world around you on Facebook.
            </p>
          </div>

          <div>
            <div className="fb-card">
              {error && <div className="fb-error">{error}</div>}
              <form onSubmit={handleLogin}>
                <input
                  className="fb-input"
                  type="text"
                  placeholder="Email address or phone number"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete="email"
                />
                <input
                  className="fb-input"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="current-password"
                />
                <button type="submit" className="fb-btn-login">
                  Log in
                </button>
              </form>

              <a className="fb-forgot">Forgotten password?</a>

              <div className="fb-divider" />

              <button className="fb-btn-create">
                Create new account
              </button>
            </div>

            <p className="fb-page-link">
              <a>Create a Page</a> for a celebrity, brand or business.
            </p>
          </div>
        </main>

        <footer className="fb-footer">
          <div className="fb-lang">
            {languages.map((lang) => (
              <a
                key={lang.label}
                className={lang.active ? "fb-lang-active" : ""}
              >
                {lang.label}
              </a>
            ))}
          </div>
          <div className="fb-footer-links">
            {footerLinks.map((link) => (
              <a key={link}>{link}</a>
            ))}
          </div>
          <div className="fb-footer-copy">
            Meta © 2024
          </div>
        </footer>
      </div>
    </>
  );
}
