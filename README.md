# stream-file


### Execution not docker-compose

**obs: remember to put the envs in the dockerfile**

```sh
docker build . -t stream-file --no-cache
```

```sh
 docker run -m 200m --cpus=0.15 stream-file 
```