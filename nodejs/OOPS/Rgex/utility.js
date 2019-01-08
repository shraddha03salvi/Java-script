var filestream = require('fs');
module.exports = {
        regexExpression(name, fullname, contact, answer) {

            var content = filestream.readFileSync('Rgex.txt', 'utf8');

            content = content.replace(/<<name>>/g, name);
            content = content.replace(/<<full name>>/g, fullname);
            content = content.replace("xxxxxxxxxx", contact);
            content = content.replace("xx/xx/xxxx", answer);

            filestream.writeFileSync("Rgex.txt", content);

        }
    }