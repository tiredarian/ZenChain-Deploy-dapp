import React from "react";
import { Link } from "react-router-dom";
import { FaTwitter, FaTelegram, FaDiscord } from "react-icons/fa";

const Navbar = () => {
  return (
    <div style={styles.wrapper}>
      <nav style={styles.navbar}> <h1 style={styles.logo}>
  <img 
    src="/Z2.png" 
    alt="Logo Z2" 
    style={{ height: "40px", verticalAlign: "middle", marginRight: "20px" }} 
  />
</h1>

        <h1 style={styles.logo}>ZenChain</h1>
        <div style={styles.navLinks}>
          <Link to="/" style={styles.link}>Home</Link>
          <Link to="/deploy-contract" style={styles.link}>Deploy Contract</Link>
          <Link to="/deploy-nft" style={styles.link}>Deploy NFT</Link>
        </div>
      </nav> 

      <div style={styles.contentWrapper}>
        {/* این قسمت محتوا رو با route ها پر می‌کنی */}
      </div>

      <footer style={styles.footer}>
        <a href="https://twitter.com" target="_blank" rel="noreferrer" style={styles.icon}><FaTwitter /></a>
        <a href="https://t.me" target="_blank" rel="noreferrer" style={styles.icon}><FaTelegram /></a>
        <a href="https://discord.com" target="_blank" rel="noreferrer" style={styles.icon}><FaDiscord /></a>
      </footer>
    </div>
  );
};

const styles = {
  wrapper: {
    minHeight: "150",
    background: "linear-gradient(100deg, #fffb0075, ة#080808ff, #11cc0069)",
    color: "#fff",
    display: "flex",
    flexDirection: "column",
  },
  navbar: {
    backgroundColor: "#111",
    padding: "20px 40px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottom: "2px solid #39ff14", // 🟢 سبز نئونی
    boxShadow: "0 0 10px #39ff14", // افکت نئون
  },
  logo: {
    color: "#eeff00ff", // 🟡 زرد نئونی
    fontSize: "22px",
    fontWeight: "bold",
    textShadow: "0 0 10px #ffee00, 0 0 20px #ffee00",
  },
  navLinks: {
    display: "flex",
    gap: "20px",
  },
  link: {
    color: "#fff",
    textDecoration: "none",
    fontSize: "16px",
    transition: "color 0.3s, text-shadow 0.3s",
  },
  contentWrapper: {
    flexGrow: 1,
    padding: "40px",
  },
  footer: {
    background: "linear-gradient(135deg, #14ff3bff, #fbff00ff)", // 🟢🟡 گرادینت سبز و زرد
    padding: "15px",
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    borderTop: "1px solid #222",
    boxShadow: "0 0 15px #37ff1462",
  },
  icon: {
    fontSize: "22px",
    color: "#000000ff",
    transition: "color 0.3s, text-shadow 0.3s",
  } 
  
};

// افکت Hover برای لینک‌ها و آیکون‌ها
Object.assign(styles.link, {
  ':hover': {
    color: '#15ff00ff',
    textShadow: '0 0 10px #15ff00ff, 0 0 20px #ffee00',
  }
});
Object.assign(styles.icon, {
  ':hover': {
    color: '#ff1414ff',
    textShadow: '0 0 10px #ff1414ff, 0 0 20px #ff1414ff',
  }
});

export default Navbar;
