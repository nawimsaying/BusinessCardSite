cd ~/BusinessCardSite
npm run build

rm -rf ~/../var/www/VirtSpaceSite/html
mv ~/VirtSpaceSite/dist ~/../var/www/VirtSpaceSite/html
