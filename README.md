# RECAPIFY.AI
#### Project for MHacks 2023

### Recapify.ai is a cutting-edge software that takes YouTube video URLs and converts them into three distinct note formats: concise summaries, detailed notes, and organized bullet-point notes. Users can choose the format that best suits their preferences.Drawing inspiration from the evolving landscape of digital content consumption, we aimed to create a tool that seamlessly transforms video content into concise and personalized notes so that you don't ned to wory about creating hectic notes.

## How to run project
* Fork and clone this project. Go to the project directory
* Run ```cd frontend``` and then ```npm install```. Then run ```npm start```. Your local server would start
at localhost:3000. It might start on a different port.

## Tech Stack
We used a lot of technologies and libraries to build this project. We used Python Flask to create
the web server for the API routes. We developed a program that would take a youtube video and generate
a transcript using youtube_transcript_api. Based on that transcript, we generated a summary of the notes.
We also created a chatbot that would answer user queries about that video using OpenAI API.
All of our output was served to the frontend using APIs that we developed in Flask. We deployed
our Flask server on Microsoft Azure. The link for the server is [here](https://recapify-ai.azurewebsites.net/).

## Features
* Recapify takes a youtube video and generates notes for the user.
* This tool essentially offers a comprehensive solution for those seeking a more efficient way to engage with and retain information from video content.