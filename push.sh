date=`date`
github_id="dl_frontend"
github_token="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"
github_address="github.com/nhn-commerce-fe/design-system"
dir_name="storybook-static"
logFile="/Users/hanseungcheol/Desktop/project/commerce-front/packages/ui/push.log"

echo "cd storybook-static" >> $logFile 2>&1
cd $dir_name
echo "==" >> $logFile 2>&1

echo "git init" >> $logFile 2>&1
git init

echo "==" >> $logFile 2>&1
echo "git add ." >> $logFile 2>&1
git add .


echo "==" >> $logFile 2>&1
echo "git status" >> $logFile 2>&1
echo "`git status`" >> $logFile 2>&1


echo "==" >> $logFile 2>&1
echo "git commit -m $date commit" >> $logFile 2>&1
git commit -m "$date commit";


echo "==" >> $logFile 2>&1
echo "remote origin add" >> $logFile 2>&1
git remote add origin https://$github_id:$github_token@$github_address


echo "git push -f" >> $logFile 2>&1
git push origin master:gh-pages -f >> $logFile 2>&1
# git push -u origin gh-pages -f >> $logFile 2>&1

sleep 2

result="`awk '/Everything up-to-date' $logFile 2>&1`"
echo "$result"12k

if [ -z "$result" ];then
  echo "git push Success" && echo "git push Success" >> $logFile 2>&1
else 
  echo "!! git push ERROR please check $logFile" && echo "git push ERROR please check $logFile" >> $logFile 2>&1
fi

echo "==" >> $logFile 2>&1
echo "cd .." >> $logFile 2>&1
cd ..

echo "==" >> $logFile 2>&1
echo "delete storybook-static" >> $logFile 2>&1
rm -rf $dir_name


exit 0