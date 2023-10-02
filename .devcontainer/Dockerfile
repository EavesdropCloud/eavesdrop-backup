FROM ubuntu:20.04

ENV TZ=Pacific/Auckland
ENV DEBIAN_FRONTEND=noninteractive
ENV NODE_MAJOR=18

SHELL ["/bin/bash", "-exc"]

RUN apt-get update && apt-get install -y \
    curl \
    ca-certificates \
    gnupg

#install node 18
RUN mkdir -p /etc/apt/keyrings
RUN curl -fsSL https://deb.nodesource.com/gpgkey/nodesource-repo.gpg.key | gpg --dearmor -o /etc/apt/keyrings/nodesource.gpg
RUN echo "deb [signed-by=/etc/apt/keyrings/nodesource.gpg] https://deb.nodesource.com/node_$NODE_MAJOR.x nodistro main" | tee /etc/apt/sources.list.d/nodesource.list

RUN apt-get update && apt-get install -y nodejs

#install additional dependencies
RUN apt-get update && apt-get install -y software-properties-common;

#add git-core repo
RUN add-apt-repository -y ppa:git-core/ppa;

#add hashicorp repo
RUN curl -fsSL https://apt.releases.hashicorp.com/gpg | gpg --dearmor -o /etc/apt/keyrings/hashicorp-archive-keyring.gpg;

RUN echo "deb [signed-by=/etc/apt/keyrings/hashicorp-archive-keyring.gpg] https://apt.releases.hashicorp.com $(lsb_release -cs) main" | \
    tee /etc/apt/sources.list.d/hashicorp.list;

# add kubernetes repo
RUN curl -fsSL https://pkgs.k8s.io/core:/stable:/v1.28/deb/Release.key | gpg --dearmor -o /etc/apt/keyrings/kubernetes-apt-keyring.gpg;

RUN echo 'deb [signed-by=/etc/apt/keyrings/kubernetes-apt-keyring.gpg] https://pkgs.k8s.io/core:/stable:/v1.28/deb/ /' | tee /etc/apt/sources.list.d/kubernetes.list;

#install packages
RUN apt-get update && apt-get install -y \
    git \
    terraform \
    kubectl;

#install glcoud sdk
RUN echo "deb [signed-by=/usr/share/keyrings/cloud.google.asc] http://packages.cloud.google.com/apt cloud-sdk main" | tee -a /etc/apt/sources.list.d/google-cloud-sdk.list && curl https://packages.cloud.google.com/apt/doc/apt-key.gpg | tee /usr/share/keyrings/cloud.google.asc && apt-get update -y && apt-get install google-cloud-sdk -y
      