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

For testing an application capability's on a kubernetes cluster I searched the internet for 'How to load test an application in a kubernetes cluster.'
This is when I found [locust](https://locust.io/). This framework can be used to load test and simulate Users. 

For the first test I started with a replicaset of 2 pods, 100 users at a spawn rate of 10.

![loadUsers][imageLocustLoad]

which saw the following results:

![imageSchema2Replica][imageLocust2Replicas]

Here you can see that I get 55 Requests per second.
After this  I tried to scale up. I scaled up to a replicaset of 10.

![imageReplicaKubernetes][imageKubernetes10Replicas]

The result I got where the following.

![locustResult10Replica][imageLocust10Replicas]

With more replicasets I get more requests per second. The median response time also goes down, from 1700 to 900 ms.




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

[imageLocustLoad]:https://user-images.githubusercontent.com/42863867/102395216-1e14cf00-3fdb-11eb-80f0-28e3a19a5841.png
[image2Replicas]:https://user-images.githubusercontent.com/42863867/102395259-2a009100-3fdb-11eb-987d-6ec130ef4dcf.png
[imageLocust2Replicas]:https://user-images.githubusercontent.com/42863867/102395329-44d30580-3fdb-11eb-854a-9512f89e0eba.png
[imageLocust10Replicas]:https://user-images.githubusercontent.com/42863867/102395409-5fa57a00-3fdb-11eb-9d6c-83c43a15e1bc.png
[imageKubernetes10Replicas]:https://user-images.githubusercontent.com/42863867/102395438-6af8a580-3fdb-11eb-8d1b-7ee5ea128e2f.png
