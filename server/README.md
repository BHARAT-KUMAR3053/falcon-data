## Users Microservice

- The users microservice is responsible for creating events for doctor calendar.

  - `NodeJS`
  - `Express`
  - `Typescript`
  - `Sqlite3`

- There are other packages that are used.
- You can update the version of `NodeJS` used inside the `Dockerfile` and `Dockerfile.dev`.

- Copy contents of `.env.dev` to `.env` file
- You can start the service with `npm run dev`.

### Create docker images

- You can create your own docker image from this microservice.
- Create an account on `hub.docker.com` or login if you already have one.
- Make sure to login on your terminal as well.
- Steps to build and push your image to docker hub
  - `docker build -t <your-dockerhub-username>/calendar .`
  - `docker tag <your-dockerhub-username>/calendar <your-dockerhub-username>/calendar:stable`
  - `docker push <your-dockerhub-username>/:stable`
