## Weather App JS

This project is a simple weather application built by AyushRaturi in their free time. It uses HTML, CSS, and JavaScript to display weather information.

![Made with JavaScript](https://img.shields.io/badge/Made_with-JavaScript-1f425f.svg) ![Docker Ready](https://img.shields.io/badge/Docker-Ready-blue.svg) ![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)
## Summary

- Displays current weather data for a specified location.
- Built using HTML (40.2%), CSS (34.2%), JavaScript (25.1%), and some Shell (0.5%).
- Designed for easy setup and use—just open the main HTML file.

### Automated Setup Steps

Follow these steps to run the Weather App locally using Docker:

**Step 1:** Clone this Repository
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

**Step 5:** Usage

- Enter your city or location in the search bar (if available).
- View the displayed weather information.
- You may need an internet connection for live weather data.

**Step 6:** Enjoy the website!
- Open your browser and go to [http://localhost:8000](http://localhost:8000)


**Step 7:** Troubleshooting

- If weather data doesn't load, check your internet connection.
- Make sure your browser supports JavaScript.
- Ensure all dependencies are installed.
- Review shell or Docker logs for errors.

## Contact & Support
For questions, issues, or feature requests:
- Open an issue on the [GitHub Issues page](https://github.com/AyushRaturi/Weather-app-js/issues)
- Email: ayushraturi6679@gmail.com

## License
This project is licensed under the MIT License 2025 - see the LICENSE file for details.
