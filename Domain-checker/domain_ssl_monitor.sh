#!/bin/bash
# ================================================
# SSL & Domain Expiry Monitoring Script (HTML Report)
# ================================================
# Description: Check SSL & domain expiry for multiple domains with days left
# ================================================

DOMAINS=(
  "Put your list of domains here"
)

REPORT_DOMAIN="domain_expiry_report.html"
REPORT_SSL="ssl_expiry_report.html"
DATE=$(date +"%Y-%m-%d %H:%M:%S")

# Detect OS (Linux or macOS)
if [[ "$OSTYPE" == "darwin"* ]]; then
  IS_MAC=true
else
  IS_MAC=false
fi

# =========================================================
# Function: Convert date string to timestamp safely
# =========================================================
to_timestamp() {
  local date_str="$1"
  if [ "$IS_MAC" = true ]; then
    date -j -f "%b %d %T %Y %Z" "$date_str" +%s 2>/dev/null
  else
    date -d "$date_str" +%s 2>/dev/null
  fi
}

# =========================================================
# Function: check_domain_expiry
# =========================================================
check_domain_expiry() {
  echo "🔍 Generating domain expiry report..."

  cat <<EOF > $REPORT_DOMAIN
  <html><head><title>Domain Expiry Report</title>
  <style>
  body { font-family: Arial; margin: 40px; }
  table { border-collapse: collapse; width: 100%; }
  th, td { border: 1px solid #ccc; padding: 8px; }
  th { background-color: #f2f2f2; }
  .expiring { background-color: #ffdddd; }
  .valid { background-color: #ddffdd; }
  </style></head><body>
  <h2>Domain Expiry Report</h2>
  <p>Generated at: $DATE</p>
  <table>
  <tr><th>Domain</th><th>Expiry Date</th><th>Status</th></tr>
EOF

  for domain in "${DOMAINS[@]}"; do
    echo "→ Checking domain expiry for $domain..."
    expiry=$(whois $domain 2>/dev/null | grep -Ei "Expir|validity" | head -1 | awk '{print $NF}')

    if [ -z "$expiry" ]; then
      echo "<tr><td>$domain</td><td colspan=2 style='color:red;'>Unable to fetch WHOIS info</td></tr>" >> $REPORT_DOMAIN
      continue
    fi

    exp_ts=$(to_timestamp "$expiry")
    now_ts=$(date +%s)
    days_left=$(( (exp_ts - now_ts) / 86400 ))

    if [ -z "$exp_ts" ]; then
      status="<td style='color:red;'>Invalid date format</td>"
    elif [ $days_left -lt 0 ]; then
      status="<td class='expiring'>Expired (${days_left} days past)</td>"
    elif [ $days_left -le 30 ]; then
      status="<td class='expiring'>Expiring soon (${days_left} days left)</td>"
    else
      status="<td class='valid'>Valid (${days_left} days left)</td>"
    fi

    echo "<tr><td>$domain</td><td>$expiry</td>$status</tr>" >> $REPORT_DOMAIN
  done

  echo "</table></body></html>" >> $REPORT_DOMAIN
  echo "✅ Domain expiry report generated: $REPORT_DOMAIN"
}

# =========================================================
# Function: check_ssl_expiry
# =========================================================
check_ssl_expiry() {
  echo "🔍 Generating SSL expiry report..."

  cat <<EOF > $REPORT_SSL
  <html><head><title>SSL Expiry Report</title>
  <style>
  body { font-family: Arial; margin: 40px; }
  table { border-collapse: collapse; width: 100%; }
  th, td { border: 1px solid #ccc; padding: 8px; }
  th { background-color: #f2f2f2; }
  .expiring { background-color: #ffdddd; }
  .valid { background-color: #ddffdd; }
  </style></head><body>
  <h2>SSL Certificate Report</h2>
  <p>Generated at: $DATE</p>
  <table>
  <tr><th>Domain</th><th>Issuer</th><th>Valid From</th><th>Valid To</th><th>Status</th></tr>
EOF

  for domain in "${DOMAINS[@]}"; do
    echo "→ Checking SSL for $domain..."
    ssl_info=$(echo | openssl s_client -connect ${domain}:443 -servername ${domain} 2>/dev/null | openssl x509 -noout -issuer -dates)

    if [ -z "$ssl_info" ]; then
      echo "<tr><td>$domain</td><td colspan=4 style='color:red;'>No SSL / Unable to load certificate</td></tr>" >> $REPORT_SSL
      continue
    fi

    issuer=$(echo "$ssl_info" | grep "issuer=" | cut -d'=' -f2-)
    notBefore=$(echo "$ssl_info" | grep "notBefore" | cut -d'=' -f2-)
    notAfter=$(echo "$ssl_info" | grep "notAfter" | cut -d'=' -f2-)

    exp_ts=$(to_timestamp "$notAfter")
    now_ts=$(date +%s)
    days_left=$(( (exp_ts - now_ts) / 86400 ))

    if [ -z "$exp_ts" ]; then
      status="<td style='color:red;'>Invalid date format</td>"
    elif [ $days_left -lt 0 ]; then
      status="<td class='expiring'>Expired (${days_left} days past)</td>"
    elif [ $days_left -le 30 ]; then
      status="<td class='expiring'>Expiring soon (${days_left} days left)</td>"
    else
      status="<td class='valid'>Valid (${days_left} days left)</td>"
    fi

    echo "<tr><td>$domain</td><td>$issuer</td><td>$notBefore</td><td>$notAfter</td>$status</tr>" >> $REPORT_SSL
  done

  echo "</table></body></html>" >> $REPORT_SSL
  echo "✅ SSL report generated: $REPORT_SSL"
}

# =========================================================
# Main Menu
# =========================================================
echo "Select function to run:"
echo "1) Check Domain Expiry"
echo "2) Check SSL Certificate"
read -p "Enter choice [1-2]: " choice

if [ "$choice" == "1" ]; then
  check_domain_expiry
elif [ "$choice" == "2" ]; then
  check_ssl_expiry
else
  echo "Invalid choice."
fi
