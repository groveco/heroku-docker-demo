# This is an experiment

If this is your first time:
```sh
docker login --username=_ --password=$(heroku auth:token) registry.heroku.com
```

For each subsequent release:
```sh
docker build -t heroku-docker-demo .
docker tag heroku-docker-demo registry.heroku.com/heroku-docker-demo/web
docker push registry.heroku.com/heroku-docker-demo/web
```
