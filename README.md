<h3 align="center">
Dev-Radar 🚀
</h3>

<div align="center">
Semana OmniStack 10 - RocketSeat
</div>

## Overview

Tools to looking for a Developer By Stack Techs and/or By Location (Proximity)
## Key features

- Search Developers by techs;
- Search Developers by Distance;
- Backend - NodeJS;
- Web - ReactJS;
- Mobile: React-Native;

## Running application?

```sh
$ yarn dev
```

## Roadmap

- Native checkbox/radio support;
- React Native support (should we?);
- Better docs;

## Installation

Just run:
```
yarn install
```
## Guides

### MongoDB
[https://cloud.mongodb.com/](https://cloud.mongodb.com/)

<hr>

### Client MongoDB - MongoDB Compass

https://www.mongodb.com/download-center/compass

<hr>
#### Routes API (Rest)

### Create Dev
 - URL: *POST* - http://localhost:3333/devs
```json
{
	"github_username": "marcuspaulo",
	"techs": "ReactJS, React Native, NodeJS",
	"latitude": -23.6821604,
	"longitude": -46.8754931
}
```
### List All Devs
 - URL: *GET* - http://localhost:3333/devs

GET - Buscar Devs: http://localhost:3333/devs

###List Devs By Techs and Location
http://localhost:3333/search?latitude=-23.6821604%20&longitude=-46.8754931&techs=ReactJS
  
### Update Dev
 - URL: *PUT* - http://localhost:3333/devs/github_username
 - Example: http://localhost:3333/devs/marcuspaulo
```json
{
	"techs": "Angular, React Native, NodeJS",
	"latitude": -23.6821690,
	"longitude": -46.8720931
}
```
### Delete Dev
 - URL: *PUT* - http://localhost:3333/devs/github_username
 - Example: http://localhost:3333/devs/marcuspaulo

<hr>