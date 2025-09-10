## Weather App JS

This is my little Project that I made in my free time :)

### Automated Setup Steps

Follow these steps to run the Weather App locally using Docker:

**Step 1:** Clone this repo
```bash
git clone https://github.com/AyushRaturi/Weather-app-js.git
```

**Step 2:** Install Docker
- Make sure Docker is installed on your system. [Get Docker here.](https://docs.docker.com/get-docker/)

**Step 3:** Check if your localhost port (e.g., 8000) is busy or free
- Ensure port 8000 is available for the app to run. You can check with:
```bash
lsof -i:8000
```

**Step 4:** Run the shell script
```bash
chmod +x bash.sh
./bash.sh
```
- This script will:
   - Update your system's package info
   - Check your Docker installation
   - Build the Docker image for the weather app
   - Run the app in a Docker container mapped to port 8000

**Step 5:** Enjoy the website!
- Open your browser and go to [http://localhost:8000](http://localhost:8000)