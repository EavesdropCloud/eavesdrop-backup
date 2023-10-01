FROM ubuntu:20.04

ENV TZ=Pacific/Auckland
ENV DEBIAN_FRONTEND=noninteractive
ENV NODE_MAJOR=18

SHELL ["/bin/bash", "-exc"]

RUN apt-get update && apt-get install -y \
    curl \
    git \
    ca-certificates \
    gnupg 

#install node 18
RUN mkdir -p /etc/apt/keyrings
RUN curl -fsSL https://deb.nodesource.com/gpgkey/nodesource-repo.gpg.key | gpg --dearmor -o /etc/apt/keyrings/nodesource.gpg
RUN echo "deb [signed-by=/etc/apt/keyrings/nodesource.gpg] https://deb.nodesource.com/node_$NODE_MAJOR.x nodistro main" | tee /etc/apt/sources.list.d/nodesource.list

RUN apt-get update && apt-get install -y nodejs

WORKDIR /workspace/eavesdrop

COPY . .