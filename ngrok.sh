#!/bin/bash
ngrok http $PORT --log=stdout > /tmp/ngrok.log &
sleep 3
file_content=$(cat /tmp/ngrok.log)
url=$(echo "$file_content" | grep -o 'http[s]\?://[^[:space:]]\+' | grep -v '^http://localhost')
curl -X POST "$API" -d "url=$url&cell=$CELL>
