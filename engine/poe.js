

function Story(name)
{
    this.index = 0;
    this.part = 'main';
    this.image = '';
    this.script = {};

    this.load = function(name)
    {
        var path = String.concat('stories/', name, '/main.json');
        var request = new XMLHttpRequest();
        request.open('GET', path, false); // blocking call

        request.send();

        if (request.status == 200) {
            this.script = JSON.parse(request.responseText);
            this.name = name;

            // Start from main
            this.updateScreen();
        } else {
            alert(String.concat("Error loading ", name));
        }

    }

    this.isCommand = function(node)
    {
        // Good god...
        // Testing if it is a string value
        // This is because 'commands' in Poe are tables ..
        return !(typeof node == 'string' || node instanceof String)
    }

    this.imagePath = function()
    {
        return String.concat('stories/', this.name, '/images/', this.image)
    }

    this.current = function()
    {
        return this.script[this.part][this.index];
    }

    this.currentLength = function()
    {
        return this.script[this.part].length;
    }

    this.updateScreen = function()
    {
        while (this.isCommand(this.current()))
        {
            this.execute(this.current());
            this.next();
        }

        $('p#currentText').html(this.current());

        $('img#currentImage').attr('src', this.imagePath());
    }

    this.execute = function(command)
    {
        if (command['type'] == 'img')
        {
            this.image = command['value'];
        }
        else if (command['type'] == 'goto')
        {
            this.part = command['value'];
            this.index = 0;
        }
    }

    this.next = function()
    {
        if (this.index < this.currentLength())
            this.index += 1;
    }

    this.previous = function()
    {
        if (this.currentLength() > 0)
            this.index -= 1;
    }

    this.nextPage = function()
    {
        this.next();
        this.updateScreen();
    }

    this.previousPage = function()
    {
        this.previous();
        this.updateScreen();
    }
}
