### **Video Conference - VC**
**Overview**

This project is a video conferencing built with React, \
TypeScript, Redux Toolkit, and Material-UI (MUI). \
It allows multiple participants to join in a conference.

**Features**

Multiple participants\
Responsive UI with Material-UI components\
State management with Redux Toolkit

**Additional support- extras**
1. **The microphone**\
   The mocrophone of the speaker works and can be changed to mute and unmute mode.\
   You can see the microphone change depending on the state.
   
3. **The timer**\
   I added timer of the video conference that display the conference duration.
   
5. **Number of participants**
The number of participants in the conversation is correct at all times in real time and it counts and displays the number of participants in the conversation.\

##
![image](https://github.com/user-attachments/assets/4de6e98d-a328-4909-9921-36af0e2c4982)



![image](https://github.com/user-attachments/assets/655a98a9-1bde-4c55-864c-96fdfb7b9931)



**Technologies Used**

**React:** A JavaScript library for building user interfaces.\
**TypeScript:** A typed superset of JavaScript that compiles to plain JavaScript.\
**Redux Toolkit:** A set of tools to simplify Redux development.\
**Material-UI (MUI):** A popular React UI framework.

**Mock connect to server**

I created request like carequst to the server and at the end point, instead of put routing path to the server \
I put a routing of a JSON file, that mock the response from server.

To check that the code is suit your requirements, that the number of participants is dynamic in each part,\
you can add additional participants with a picture in the file:  `users.json`.\ (and pictures to the img packege)
both to the part of the judges and to the part of the parties.

**Getting Started**
- git clone https://github.com/Rachedl-Lebowitz/Video-Conference
- Run npm Install
- Run npm Start\
  
The application will be available at http://localhost:3000/.\

Project Structure

video-conference-app/\
├── public/                     # Static files\
├── src/                        # Source files\
│   ├── components/             # React components\
│   ├── style/                  # Styling components\
│   ├── services/               # API services & Redux\
│   ├── types/                  # Types\
│   ├── pages/                  # React routing pages\
│   ├── utils/                  # Utility functions\
│   ├── App.tsx                 # Main app component\
│   ├── index.tsx               # Entry point\
│   └── ...                     # Other configuration and setup files\
├── .gitignore                  # Git ignore file\
├── package.json                # npm configuration\
├── tsconfig.json               # TypeScript configuration\
├── README.md                   # Project documentation\
└── ...                         # Other project files


**Author:** Rachel Lebowitz
