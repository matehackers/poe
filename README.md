Poe Storytelling Engine
======================

## How to Run

Include `/engine/poe.js` in a webpage and load a new story using:

    story = new Story;
    story.load('storyname');

For now stories are located in `/stories/`, but `load` should in the future support loading from full URLs.

Look inside `index.html` for an example of usage.

### Running with a server

A `lighttpd` config file is included so you can easily run the app and have the
browser get the files correctly, even though everything runs client-side.

Use with this command:

    lighttpd -D -f lighttpd.conf

## How to Create your Own Stories

todo

### File structure

Stories are JSON files

### Directory Structure

    -> stories/
        -> story1/
            -> main.json
            -> images/
        -> story2/
        ...

### Command Specification

todo

### Custom Commands

todo

## TODO

* Mores examples
* More docs
* Good icon
* Packaging
* Test in various sizes (media queries...)
* Use jquery for beauty
* More commands
* JSLint
