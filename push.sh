date=`date`
github_id="dl_frontend@nhn-commerce.com"
github_token="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"
github_address="https://github.com/nhn-commerce-fe/design-system"
logFile="push.log"

echo 'git add . ...'
echo 'git add . ...' > $logFile 2>&1
echo "`git add .`" >> $logFile 2>&1
echo ""
echo "" >> $logFile 2>&1
echo "==" $logFile 2>&1

echo "git status"  
echo "git status" >>$logFile 2>&1
echo "`git status`" >> $logFile 2>&1
echo "" 
echo "" >> $logFile 2>&1 
echo "==" >> $logFile 2>&1

echo "git commit -m $date commit"
echo "git commit -m $date commit" >> $logFile 2>&1
echo "`git commit -m "$date commit"`" >> $logFile 2>&1
echo "" 
echo "" >> $logFile 2>&1 
echo "==" >> $logFile 2>&1

echo "git push!"
echo "git push" >>$logFile 2>&1
git push https://$github_id:$github_token@$github_address >> $logFile 2>&1

sleep 2

result="`awk '/Everything up-to-date' $logFile 2>&1`"
echo $result

if [ -z "$result"];then
  echo "git push Success" && echo "git push Success" >> $logFile 2>&1
else 
  echo "!! git push ERROR please check $logFile" && echo "git push ERROR please check $logFile" >> $logFile 2>&1
fi

exit 0