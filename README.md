DOCKER


// CONTAINERS

docker ps
# list all running containers

docker ps -a
# list all containers, including stopped containers

docker create --name CONTAINER_NAME IMAGE_TO_USE
# create a container from an image, but don't start it

docker run --name CONTAINER_NAME -p 3000:3000 IMAGE_TO_USE
# create AND start a new container from an image

docker run --name CONTAINER_NAME -p 3000:3000 IMAGE_TO_USE -e USERNAME=admin -e PASSWORD=123456
# create AND start a new container from an image and declare environments

docker run --name CONTAINER_NAME -p 3000:3000 IMAGE_TO_USE --env-file PATH_FOR_.ENV
# create AND start a new container from an image and take de environments from .env file

docker rm CONTAINER_NAME
# remove a container

docker start CONTAINER_NAME
# start an existing stopped container

docker stop CONTAINER_NAME
# stop a running container

docker exec -it CONTAINER_NAME COMMAND_TO_EXECUTE
# execute a command inside an already-running container
# does NOT create a new container

docker exec -it CONTAINER_NAME ls
# execute "ls" inside the container

docker exec -it CONTAINER_NAME bash
# open an interactive bash terminal inside the container

// NETWORK
docker network create my-network

docker run -d --name CONTAINER_NAME --network mynetwork IMAGE_NAME
# connect a container to a specific network


// IMAGES

docker pull IMAGE_NAME
# download an image from a registry (e.g. Docker Hub)

docker images
# list all local images

docker rmi IMAGE_NAME
# remove an image

// DOCKERFILE

docker build -t IMAGE_NAME .
# build an image from the Dockerfile in the current directory



// LOGS

docker logs CONTAINER_NAME -f
# show logs and follow new log output



// FLAGS

-d -> --detach
# run in detached/background mode

-a -> --all

-f -> --follow

-p -> --publish
# publish/map a container port to a host port

--name
# assign a name to a container

-t -> --tag
# assign a name/tag to an image



// INTERACTIVE / TERMINAL

-i -> --interactive
# keep stdin open so you can interact with the process

-t -> --tty
# allocate a pseudo-terminal

-it
# interactive terminal



// DOCKER COMPOSE

docker compose down
# stop and remove the resources created by Docker Compose

docker compose up --build -d
# build images and start the Compose application in detached mode



// CORE CONCEPTS

IMAGE      = template
CONTAINER  = instance of an image




