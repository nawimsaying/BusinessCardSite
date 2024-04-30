cd ~/BusinessCardSite
npm run build

rm -rf ~/../var/www/BusinessCardSite/html
mv ~/BusinessCardSite/dist ~/../var/www/BusinessCardSite/html