# 🌟 Image Authentication Microservices 🌟

This project is build because I wanted to learn more about Kubernetes and how the services work.
I also wanted to learn more about Microservices. 
For future references I can use this project to go further into communicating components.
Like rabbitMQ.

---

## Creating the microservices 💭

First I created an authentication service. Here you can do the following:

* Register a user.

![postman_image_register][imagePostmanApiRegisterUser]
    
* Login a user.

![postman_image_login][imagePostmanApiLoginUser]

When you log in with a registered user, you get a JSON token for authentication with other services.
The image service uses this JSON token to authenticate if the user can use this service.

![postman_image][imagePostmanApiPOSTimage]
## Creating the database 🔐

First I created the database to store the images. I wanted to create the database and service inside my Kubernetes Cluster.
I connected a SSD drive to the cluster for storage purpose, and I used this guide to know how to store items on it.
Then I created the configmap. This is where I stored the password, username and the database-name. Location of 🔗[database YAML files][locationRepoDatabaseDeployment].

1. Connected SSD to the server. Used this 🔗[guide][websiteAddingSSDRaspberryPI] to figure out how to connect to it and where it is stored.
2. Created configmap - for storing user data for connecting to the database. Here I used documentation from 🔗[Rancher][websiteCreatingVolumeK3s].
3. Created the storage - This part is most important because this is where I specify where to store the files. ![hostImagePath][imageStorageLocationDatabase] 
4. Created the deployment -  This is the pod. When something goes wrong with the database this is the thing that replicates and restarts the services. 
5. Created the service - This is for exposing the pod. This is, so I can connect an outside service to it like the database local on my laptop.

## Creating the deployments ⚡

For deploying I created a dockerfile for each microservice. This is used for creating images. 
The images I can use on any platform I want as long as I deploy with Docker buildx.
Buildx is an experimental feature of Docker. I used the following actions:

* ✅ Action for [check out][actionCheckOut]
* ✅ Docker action for [QMU][actionDockerSetupQmu]
* ✅ Docker action for [buildx][actionDockerSetupBuildx]
* ✅ Docker action for [login][actionDockerLogin]
* ✅ Docker action for [build and push][actionDockerBuildPush]
* ✅ Action for pushing files to a [local kubernetes cluster][actionPushToKubernetes] 

Location for deployment files:

* 🔗[authentication service][locationRepoAuthenticationDeployments]
* 🔗[image service][locationRepoImageDeployments]

## Testing the deployments 🏁

* todo Locust testing




[imageSecrets]:https://user-images.githubusercontent.com/42863867/101778710-830c8880-3af4-11eb-88ff-65b8df4f2974.png
[websiteAddingSSDRaspberryPI]:https://www.raspberrypi.org/documentation/configuration/external-storage.md
[websiteCreatingVolumeK3s]:https://rancher.com/docs/k3s/latest/en/storage/
[imageStorageLocationDatabase]:https://user-images.githubusercontent.com/42863867/102088815-b9f7dc80-3e1b-11eb-9c74-cd89240ddc1b.png

[actionCheckOut]:https://github.com/actions/checkout
[actionDockerSetupQmu]: https://github.com/docker/setup-qemu-action
[actionDockerSetupBuildx]: https://github.com/docker/setup-buildx-action
[actionDockerLogin]: https://github.com/docker/login-action
[actionDockerBuildPush]: https://github.com/docker/build-push-action
[actionPushToKubernetes]: https://github.com/steebchen/kubectl

[locationRepoDatabaseDeployment]: https://github.com/teundeclercq/image-authentication-microservice/tree/main/PostgresqlDeployment
[locationRepoAuthenticationDeployments]: https://github.com/teundeclercq/image-authentication-microservice/tree/main/AuthenticationService/deployments
[locationRepoImageDeployments]:https://github.com/teundeclercq/image-authentication-microservice/tree/main/ImageService/deployments

[imagePostmanApiRegisterUser]:https://user-images.githubusercontent.com/42863867/102227037-65bb2e00-3ee9-11eb-8959-9f9ded502685.png
[imagePostmanApiLoginUser]:https://user-images.githubusercontent.com/42863867/102234031-285a9e80-3ef1-11eb-930f-9763cb211b23.png
[imagePostmanApiPOSTimage]:https://user-images.githubusercontent.com/42863867/102235770-f9452c80-3ef2-11eb-8257-a9ed85a7eb63.png
