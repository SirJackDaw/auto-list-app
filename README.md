**Start**
docker-compose up --build -V

***then go to the client foulder and:***

**Create car**
npx tsx ./src/main.ts create -b=Tesla -n=model1 -p=12 -y=14 -u=Ilon -q=mask

**Get car by id**
npx tsx ./src/main.ts byId --id=65b75fdc30a6ec236585dabb -u=Ilon -q=mask

**Get cars**
***you can use flags from creation***
npx tsx ./src/main.ts all -u=Ilon -q=mask -b=Tesla

**Update car**
***you can use flags from creation***
npx tsx ./src/main.ts update -n=cybertruck -u=Ilon -q=mask --id=65b66e76aec6a9c1b968800f

**Delete car by id**
npx tsx ./src/main.ts delete -u=Ilon -q=mask --id=65b75fdc30a6ec236585dabb