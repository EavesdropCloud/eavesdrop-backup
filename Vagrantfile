# -*- mode: ruby -*-
# vi: set ft=ruby :

# A Vagrantfile to set up a frontend, backend, file and a database server,
# connected together using an internal network with manually-assigned
# IP addresses for the VMs.

#deploy = if ENV['DEPLOY'] || 'test'

Vagrant.configure("2") do |config|
    config.vm.box = "ubuntu/focal64"

    config.vm.define "backendserver" do |backendserver|
        backendserver.vm.hostname = "backendserver"

        backendserver.vm.network "forwarded_port", guest: 81, host: 8181, host_ip: "127.0.0.1"
        backendserver.vm.network "private_network", ip: "192.168.56.11"

        backendserver.vm.synced_folder "./backend", "/vagrant", owner: "vagrant", group: "vagrant", mount_options: ["dmode=555,fmode=444"]

        backendserver.vm.provision "shell", path: "backend/build-backendserver-vm.sh"
    end

    config.vm.define "frontendserver" do |frontendserver|
        frontendserver.vm.hostname = "frontendserver"
        
        frontendserver.vm.network "forwarded_port", guest: 80, host: 8080, host_ip: "127.0.0.1"
        frontendserver.vm.network "private_network", ip: "192.168.56.12"

        frontendserver.vm.synced_folder "./frontend", "/vagrant", owner: "vagrant", group: "vagrant", mount_options: ["dmode=555,fmode=444"]

        frontendserver.vm.provision "shell", path: "frontend/build-frontendserver-vm.sh"
    end

    config.vm.define "dbserver" do |dbserver|
        dbserver.vm.hostname = "dbserver"

        dbserver.vm.network "private_network", ip: "192.168.56.13"

        dbserver.vm.synced_folder "./db", "/vagrant", owner: "vagrant", group: "vagrant", mount_options: ["dmode=555,fmode=444"]
        
        dbserver.vm.provision "shell", path: "db/build-dbserver-vm.sh"
    end

    config.vm.define "fileserver" do |fileserver|
        fileserver.vm.hostname = "fileserver"

        fileserver.vm.network "private_network", ip: "192.168.56.14"

        fileserver.vm.synced_folder "./file_hosting", "/vagrant", owner: "vagrant", group: "vagrant", mount_options: ["dmode=555,fmode=444"]
        
        fileserver.vm.provision "shell", path: "file_hosting/build-fileserver-vm.sh"
    end

end