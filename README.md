Prereq:
1. az cli
2. npm/nodejs
3. docker/docker-compose

Local Build:
1. Remove package lock file
2. Run "npm install"
3. Run "npm run dev" and check the deployment

Build Docker image
1. Run "docker build -t levelupwww ."
2. Run "docker images" check the image
3. Run "docker run -it -p 80:5173 levelupwww" and deploy the image locally on port 80
4. Run "az login" to login to Azure
5. Run "az acr login --name levelupwww" to log in to container registry
6. Run "docker tag levelupwww levelupwww.azurecr.io/levelupwww:latest" to tag the local image
7. Run "docker push levelupwww.azurecr.io/levelupwww:latest" to push the latest image


