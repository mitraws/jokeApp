// import express
const express = require('express')

// create server
const jokeApp = express()

// // HTML string
// const page = `<html>
//   <head>
//     <title>Home</title>
//   </head>

//   <body>
//     <h1>Welcome</h1>
//   </body>
// </html>`

const randomjokes = [
    "I was hit in the head with a can of soda. Luckily it was a soft drink!", 
    "R.I.P boiled water...You will be mist!",
    "Don't spell part backwards...It's a trap!",
    "Love is like a fart. If you have to force it it’s probably shit.",
    "I tried to escape from the apple store...but there were no windows!",];

const femalejokes = [
    "What do you call a man with half a brain? - Gifted.",
    "What do you call an intelligent man in America? - A tourist.",];

const kidjokes = [
    "How do we know that the ocean is friendly? - It waves!",
    "How do you make an octopus laugh? - With ten-tickles!",];

jokeApp.use(express.static('public'));

function createstyle (color) {
    const style = `<style> body {
        background-color: ${color};
        }
        p {text-align: center;}
        h1 {text-align: center;}
        </style>`
        return style
}

function render (joke, color) {
    const document = `<html>
        <head>
        <title>When bored</title>
        ${createstyle(color)}
        </head>
    
        <body>
        <img src="/images/heart.png" alt="heart">    
        <img src="/images/apple.jpg" alt="apple"> 
        <div style="text-align:center;">   
        <marquee direction="down" width="1000" height="500" behavior="alternate" style="border:solid">
  <marquee behavior="alternate">
        <p>&#128514;</p><p>&#128514;</p><p>&#128514;&#128514;&#128514;</p>
        <h1>${joke}</h1>
        <p>&#128514;&#128514;&#128514;</p><p>&#128514;</p><p>&#128514;</p>
        </body>
    </html>`
    
    return document
    }

// define route
jokeApp.get(
    '/jokes/:gender/:age', // route
    (request, response) => { // handler callback

    // age validation 
    const age = parseInt(request.params.age);
    if (isNaN(age)) {
    response.send("Try again with a number!")   
    }

    // gender validation 
    const gender = request.params.gender 
    if (gender !== "f" && gender !== "m") {
    response.send("Try again with an 'f' or an 'm'!")
    }

    // age and gender logic
    let joke
    let color
     if (request.params.age <= 10) {
        joke = kidjokes[Math.floor(Math.random() * kidjokes.length)];
        color="yellow"
        } else {
        color="lightgreen"
        joke = request.params.gender === "f" ? femalejokes[Math.floor(Math.random() * femalejokes.length)] : randomjokes[Math.floor(Math.random() * randomjokes.length)]
     }
        const page = render(joke, color)


     response.send(page)

     student.get(
        '/student/:name', // route
        (request, response) => { // handler callback
        
      
     )
      
    //   const message = `Welcome ${request.params.name}`

    }
  )


// 3000 is common
const port = 3500

// start listening on port 3000
// app.listen(port)

// confirmation function
function onListen () {
    console.log(`Listening on :${port}`)
  }

// start listening
jokeApp.listen(
    port,
    () => console.log(`Listening on :${port}`)
  )