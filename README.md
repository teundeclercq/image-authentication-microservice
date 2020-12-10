# YoutubeImgurBackend

This project is build because I wanted to learn more about Kubernetes and how the services work
I also wanted to learn more about Microservices. 
For future references I can use this project to go further into communicating components.
Like rabbitMQ.

---

## Creating the microservices

I created an Authentication service which uses a JSON Token to authenticate other services.
Then I created an ImageService. This is for storing images. The ImagesService needs an Authentication token of the AuthenticationService.
This is send via the FrontEnd. I Tested this with Postman. 

Here are the results:

* todo Add Images of postman testing.
---

## Creating the database

First I created the database to store the images. I wanted to create the database and service inside my Kubernetes Cluster.
I connected a SSD drive to the cluster for storage purpose, and I used this guide to know how to store items on it.
Then I created the configmap. This is where I stored the password, username and the database-name.   

* Connected SSD to the server. Used this guide to figure out how to connect to it and where it is stored.
* Created configmap - for storing user data for connecting to the database.
* Created the storage - This part is most important because this is where I specify where to store the files. ![hostImagePath]()
* Created the deployment -  This is the pod. When something goes wrong with the database this is the thing that replicates and restarts the services. 
* Created the service - This is for exposing the pod. This is, so I can connect an outside service to it like the database local on my laptop.

---

## Creating the deployments

First I created the Dockerfile. I am deploying to an arm based cluster. This is the architecture of the Chip.
After this I started with deploying the dockerfile to github container storage. I did this with the main.yml file.
I created secrets for logging in Github Container Registry. Then I used an action to build and push to image to GHC.io
In the map deployments inside the services maps, I created the deployment, ingress, service.

* 

---

## Testing the deployments

* todo Locust testing


