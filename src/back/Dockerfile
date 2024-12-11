FROM python:3.10-slim

# Set the working directory in the container
WORKDIR /app

# Install system dependencies for MySQL client
RUN apt-get update && apt-get install -y \
    default-libmysqlclient-dev \
    gcc \
    pkg-config \
    && apt-get clean

# Copy the requirements file into the container
COPY requirements.txt .

# Upgrade pip and install Python dependencies
RUN pip install --no-cache-dir --upgrade pip && \
    pip install --no-cache-dir -r requirements.txt

# Copy the application code into the container
COPY . .

# Expose the default Django port
EXPOSE 8000

# Command to run the application
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]



# # Backend Dockerfile

# # Use the official Python image as the base image
# FROM python:3.11-slim as base

# # Set environment variables
# ENV PYTHONDONTWRITEBYTECODE 1
# ENV PYTHONUNBUFFERED 1

# # Set the working directory
# WORKDIR /app

# # Install system dependencies
# RUN apt-get update && apt-get install -y \
#     libmariadb-dev gcc \
#     && apt-get clean \
#     && rm -rf /var/lib/apt/lists/*

# # Copy the requirements file into the container
# COPY requirements.txt .

# # Install Python dependencies
# RUN pip install --no-cache-dir --upgrade pip && \
#     pip install --no-cache-dir -r requirements.txt

# # Copy application files into the container
# COPY . .

# # Expose the Django application port
# EXPOSE 8000

# # Set the default command to run the Django application
# # CMD ["gunicorn", "--bind", "0.0.0.0:8000", "EventManagement.wsgi:application"]
# CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
