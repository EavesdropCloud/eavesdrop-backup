apt update && apt upgrade
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash - 
apt install -y nodejs
cat > /etc/systemd/system/nodeserver.service << EOF
[Unit]
Description=Node Server Service
After=network.target

[Service]
Type=simple
Restart=always
RestartSec=1
WorkingDirectory=/vagrant
ExecStart=/usr/bin/npm run dev -- -p 80

[Install]
WantedBy=default.target
EOF
systemctl start nodeserver
systemctl enable nodeserver