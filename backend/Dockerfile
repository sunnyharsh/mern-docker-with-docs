FROM node:20

WORKDIR /app

COPY ./package*.json ./

RUN npm install

COPY . .

EXPOSE 5001

CMD [ "npm", "start" ]




# documentaion
# create image
# docker build -t sunnyharsh/backend:01 .  

# Run conatiner
# docker run --rm -d -p 5001:5001 --name backend-container sunnyharsh/backend:01

# Run conatiner with synching mode means docker data change frequently if we change something in response
#docker run --rm -d -p 5001:5001 -v $(pwd):/app --name backend-container sunnyharsh/backend:01

#in mac root directory comes from pwd 
# and :/app is working directory of Docker we mention in Dockerfile

# dynamically env variable pass
# docker run --rm -d -p 5001:5006 -v $(pwd):/app -e PORT='5006' --name backend-container sunnyharsh/backend:01

# multiple env key pass 
# docker run --rm -d -p 5001:5006 -v $(pwd):/app -e PORT='5006' -e SECRET_KEY='SECRETKEY' --name backend-container sunnyharsh/backend:01

# move on folder of Docker in interactive way
# docker exec -it f46cfef03200 bash

# can see logs of running docker container by container is
# docker logs f46cfef03200

# .env file path pass place of individual key
# docker run --rm -d -p 5001:5006 -v $(pwd):/app --env-file ./.env --name backend-container sunnyharsh/backend:01