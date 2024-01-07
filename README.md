# One For All (E-commerce clothing store)

## Background
This is the frontend repo for a mock online clothing shop built on a microservice architecture.

Backend Code Repo - https://github.com/matthewqian1/one-for-all.

Can be viewed here - https://one-for-all-ui-d377592a10bb.herokuapp.com/

## Tech Stack
### Frontend (https://github.com/matthewqian1/life-invader-ui)
- JavaScript
- HTML
- CSS
### Backend
- Spring Boot Java

## Design
### Microservice Architecture - Backend
#### Product Service
Stores and manages product inventory details which is rendered on the frontend.
#### Review Service
Stores and manages product reviews.
#### AI Assistant Service
Rest based service which processes user queries for the app chat bot and provides an answer using the Open AI API.
### Features
- Product listing filtering
- Open AI API powered Chatbot
- Product reviews
- Cart checkout

## Improvements/Future Considerations
- Frontend Layout/Styling
- Configure chatbot to provide answers more tailored to the specifics of the app when needed
- Integrate SQL database to store product details (currently stored within the product service) to reduce service memory usage

