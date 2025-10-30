#!/bin/bash

DOMAINS=(
  "Put your list of domains here"
)

OUTPUT="ssl_report.html"
echo "<html><head><title>SSL Expiry Report</title>
<style>
table {border-collapse: collapse; width: 100%;}
th, td {border: 1px solid #ddd; padding: 8px; text-align: left;}
th {background-color: #222; color: white;}
.green {background-color: #c8e6c9;}
.yellow {background-color: #fff9c4;}
.red {background-color: #ffcdd2;}
</style></head><body>
<h2>SSL Expiry Report</h2>
<table>
<tr><th>Domain</th><th>Issuer</th><th>Expiry Date</th><th>Days Left</th></tr>" > $OUTPUT

for DOMAIN in "${DOMAINS[@]}"; do
  SSL_INFO=$(echo | openssl s_client -connect "$DOMAIN:443" -servername "$DOMAIN" 2>/dev/null | openssl x509 -noout -issuer -enddate)
  if [[ -z "$SSL_INFO" ]]; then
    echo "<tr><td>$DOMAIN</td><td colspan=3>❌ Unable to retrieve SSL info</td></tr>" >> $OUTPUT
    continue
  fi

  ISSUER=$(echo "$SSL_INFO" | grep "issuer=" | cut -d= -f2-)
  EXPIRY_RAW=$(echo "$SSL_INFO" | grep "notAfter=" | cut -d= -f2-)
  EXPIRY_DATE=$(date -j -f "%b %d %T %Y %Z" "$EXPIRY_RAW" "+%Y-%m-%d" 2>/dev/null)
  EXPIRY_TS=$(date -j -f "%Y-%m-%d" "$EXPIRY_DATE" +%s 2>/dev/null)
  NOW_TS=$(date +%s)
  DAYS_LEFT=$(( (EXPIRY_TS - NOW_TS) / 86400 ))

  if (( DAYS_LEFT < 0 )); then COLOR="red"
  elif (( DAYS_LEFT < 30 )); then COLOR="red"
  elif (( DAYS_LEFT < 60 )); then COLOR="yellow"
  else COLOR="green"
  fi

  echo "<tr class=\"$COLOR\"><td>$DOMAIN</td><td>$ISSUER</td><td>$EXPIRY_DATE</td><td>${DAYS_LEFT} days</td></tr>" >> $OUTPUT
done

echo "</table></body></html>" >> $OUTPUT
echo "✅ SSL expiry report generated: $OUTPUT"
