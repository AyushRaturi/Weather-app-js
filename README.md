### 6. Run with Shell Script (Optional)

- To automate setup and run with Docker, use the included bash.sh script:
  ```bash
  chmod +x bash.sh
  ./bash.sh
  ```
- This script will:
  - Update your system's package information
  - Check your Docker installation
  - Build a Docker image for the weather app
  - Run the app in a Docker container mapped to port 8000
