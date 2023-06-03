# stream-file

## Execution not docker-compose

### Secrets to the project environment
```environment
AWS_REGION="sa-east-1"
AWS_ACCESS_KEY_ID=""
AWS_SECRET_ACCESS_KEY=""
AWS_BUCKET_S3="testbauk"
```


### Docker project  in execution
**obs: remember to put the envs in the dockerfile**

```sh
docker build . -t stream-file --no-cache
```

```sh
 docker run -m 200m --cpus=0.15 stream-file 
```