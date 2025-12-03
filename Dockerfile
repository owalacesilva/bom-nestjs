FROM ubuntu:latest

ARG NODE_VERSION=18
ARG NVM_VERSION=v0.40.3

# Install system dependencies
RUN apt update && apt install -y \
    curl \
    wget \
    bash

# Create operator user and group 
RUN useradd -m -r -g operator -s /bin/bash operator
ENV SHELL=/bin/bash

# Install nvm and Node.js
ENV NVM_DIR=/home/operator/.nvm

# Switch to operator user
USER operator

# Install nvm and Node.js
RUN mkdir -p $NVM_DIR && \
    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/${NVM_VERSION}/install.sh | bash && \
    bash -lc ". \"$NVM_DIR/nvm.sh\" && nvm install ${NODE_VERSION} && nvm alias default ${NODE_VERSION}"

# Set working directory
WORKDIR /app

# Copy project files
COPY . .

# Add nvm to PATH
ENV PATH="/home/operator/.nvm/versions/node/v${NODE_VERSION}/bin:${PATH}"

# Expose port
EXPOSE 3000

#ENTRYPOINT ["entrypoint.sh"]

# Start the application
CMD ["/bin/bash"]
