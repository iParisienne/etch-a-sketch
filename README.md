# Odin Project > Foundation - Etch-A-Sketch
Project documentation for the Etch-A-Sketch Project from [the Odin Project](https://www.theodinproject.com/).  
Had something green-ish in mind for my coloring (Website itself) - [This](https://coolors.co/092327-0b5351-00a9a5-4e8098-90c2e7) helped alot.  
* The Grid-Border design was from [here](https://html-css-js.com/css/generator/box-shadow/).
* The Idea for the particle background effect came from [here](https://codepen.io/tonkotsuboy/pen/zJbKNN) - Credit to Takeshi Kano.  
* Background Image is from [here](https://www.superiorwallpapers.com/sun-sky/night-stars-and-green-sky).
  
At first I didn't know exactly on how to implement the particle background effect, but then I just took the effect into a complete empty boilerplate
and implemented three simple div boxes with some content and got it to work. Ofourse I had the problem that the particles would be "over" the grid, so I could test around
with the z-index property, which is the reason why the *container-content* class is in the foreground (including all its children).

## Live Preview
Can be found [here](https://iparisienne.github.io/etch-a-sketch/)!