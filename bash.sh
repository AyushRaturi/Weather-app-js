docker --version
docker build . -t weather-app
docker run -p 8000:80 -d weather-app