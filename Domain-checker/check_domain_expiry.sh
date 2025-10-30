#!/bin/bash
# ================================================
# Domain Expiry Detailed Report (HTML)
# ================================================
# Description: Check domain expiry and key WHOIS details
# ================================================

DOMAINS=(
  "Put your list of domains here"
)

OUTPUT="domain_report.html"

# =========================================================
# Function: Convert date string to timestamp
# =========================================================
to_timestamp() {
  local date_str="$1"
  if [[ "$OSTYPE" == "darwin"* ]]; then
    date -j -f "%Y-%m-%d" "$date_str" +%s 2>/dev/null
  else
    date -d "$date_str" +%s 2>/dev/null
  fi
}

# =========================================================
# Generate HTML Header
# =========================================================
echo "<html><head><title>Domain Expiry Report</title>
<style>
body {font-family: Arial, sans-serif; margin: 40px;}
table {border-collapse: collapse; width: 100%;}
th, td {border: 1px solid #ddd; padding: 8px; text-align: left; vertical-align: top;}
th {background-color: #333; color: white;}
.green {background-color: #c8e6c9;}
.yellow {background-color: #fff9c4;}
.red {background-color: #ffcdd2;}
.grey {background-color: #eeeeee;}
</style></head><body>
<h2>Domain Expiry Report</h2>
<p>Generated at: $(date)</p>
<table>
<tr>
  <th>Domain</th>
  <th>Registrar</th>
  <th>Registrant Organization</th>
  <th>Name Servers</th>
  <th>Expiry Date</th>
  <th>Days Left</th>
  <th>Remaining</th>
</tr>" > $OUTPUT

# =========================================================
# Loop Through Domains
# =========================================================
for DOMAIN in "${DOMAINS[@]}"; do
  echo "🔍 Checking $DOMAIN ..."
  WHOIS=$(whois "$DOMAIN" 2>/dev/null)

  EXPIRY_RAW=$(echo "$WHOIS" | grep -Ei 'expir|Expiry Date' | head -n 1 | awk '{print $NF}')
  REGISTRAR=$(echo "$WHOIS" | grep -i 'Registrar:' | head -n 1 | cut -d: -f2- | xargs)
  ORG=$(echo "$WHOIS" | grep -i 'Registrant Organization' | head -n 1 | cut -d: -f2- | xargs)
  NS=$(echo "$WHOIS" | grep -i 'Name Server' | cut -d: -f2- | xargs)

  # Handle missing data
  [[ -z "$REGISTRAR" ]] && REGISTRAR="N/A"
  [[ -z "$ORG" ]] && ORG="N/A"
  [[ -z "$NS" ]] && NS="N/A"

  if [[ -z "$EXPIRY_RAW" ]]; then
    echo "<tr class=\"grey\"><td>$DOMAIN</td><td>$REGISTRAR</td><td>$ORG</td><td>$NS</td><td colspan=3>❌ Unable to retrieve expiry</td></tr>" >> $OUTPUT
    continue
  fi

  # Normalize date (try multiple formats)
  EXPIRY_DATE=$(date -jf "%Y-%m-%d" "$EXPIRY_RAW" "+%Y-%m-%d" 2>/dev/null || echo "$EXPIRY_RAW")
  EXPIRY_TS=$(to_timestamp "$EXPIRY_DATE")
  NOW_TS=$(date +%s)
  DAYS_LEFT=$(( (EXPIRY_TS - NOW_TS) / 86400 ))

  # Convert to months/days
  MONTHS=$(( DAYS_LEFT / 30 ))
  REM_DAYS=$(( DAYS_LEFT % 30 ))
  REMAINING="${MONTHS} mo ${REM_DAYS} d"

  # Color rules
  if (( DAYS_LEFT < 0 )); then COLOR="red"
  elif (( DAYS_LEFT < 30 )); then COLOR="red"
  elif (( DAYS_LEFT < 60 )); then COLOR="yellow"
  else COLOR="green"
  fi

  echo "<tr class=\"$COLOR\">
    <td>$DOMAIN</td>
    <td>$REGISTRAR</td>
    <td>$ORG</td>
    <td>$NS</td>
    <td>$EXPIRY_DATE</td>
    <td>${DAYS_LEFT} days</td>
    <td>$REMAINING</td>
  </tr>" >> $OUTPUT
done

# =========================================================
# Finish HTML
# =========================================================
echo "</table></body></html>" >> $OUTPUT
echo "✅ Domain expiry report generated: $OUTPUT"
