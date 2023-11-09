# Warning! This is a demo!
From what I gathered from class, more people are comfortable with Python than Node.js, so I think that's probably what we'll use for the project. This is just something I threw together quickly because I already had Node set up on my machine. It shouldn't be too hard to convert this to Python though.

## Installation
First, make sure you have Node.js installed (and npm, but that comes with Node), by going to their [website](https://nodejs.org/en/) and downloading the current installation

Next, clone this respository (`git clone https://github.com/CS2450-Fall-2023/gpt-api-demo.git`) and change directories into the project (`cd gpt-api-demo/`)

Next, install the project dependencies through npm (`npm install`)

Make sure that you have the `OPENAI_API_KEY` environment variable set to your own API key (In Bash/Zsh, you can set it for the duration of your terminals session via `export OPENAI_API_KEY=INSERT_API_KEY_HERE`, not sure about Windows)

You can then run the project by running `node .` (or `node index.js`)
