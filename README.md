# OES - ORDER EXCECUTION SYSTEM

## Overview
**OES** the web based application that lets **customers** to create orders and **executors** to implement/execute those orders.


## Tech stack
* typescript: 2.4^
* nodejs: 8.3^
* koa: 2.3^


## Docker command scripts in package.json 
`npm run docker:build`: build docker image  
`npm run docker:run`: run docker image (after building)  
`npm run docker:rm`: remove all containers based on image  
`npm run docker:rmi`: remove image  
`npm run docker:stack:init`: init swarm to connect to connect to local swarm  
`npm run docker:stack:deploy`: start/restart swarm when docker-compose.yml changes (if already deployed)  
`npm run docker:stack:rm`: down the swarm (leaves single instance of the container)  
`npm run docker:stack:leave`: down the swarm (all containers)  
