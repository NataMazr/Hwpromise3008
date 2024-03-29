        // var fs = require('fs');

        // fs.readFile('./DATA.txt', 'utf8', function(err, content) {
        //     console.log(content);
        // });

        // console.log('after calling readFile');

        const fs = require('fs');
        readFile = (way, type) => {
            return new Promise((res, rej) =>
                fs.readFile(way, type, (err, content) => {
                    if (err !== true) {
                        res(content)
                    } else {
                        rej('Ошибка...')
                    }
                }),
                // console.log(contents);
            )
        };
        readFile('./DATA.txt', 'utf8')
            .then(content => console.log(content))
            .catch(err => console.log(error));