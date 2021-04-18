//Author Younis Rahman
//www.younisrahman.com
const inquirer = require('inquirer');

var figlet = require('figlet');


figlet.text(`Younis Rahman !!`, {
    font: 'Ghost',
    horizontalLayout: 'default',
    verticalLayout: 'default',
    width: 100,
    whitespaceBreak: true
}, function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data);
    display()
});


// figlet(`Welcome to my resume \n\n\n\n\n\n\n\n\n I'm Younis Rahman !!`, function (err, data) {
//     if (err) {
//         console.log('Something went wrong...');
//         console.dir(err);
//         return;
//     }
//     console.log(data)

//     display()
// });



function display() {
    inquirer
        .prompt([
            /* Pass your questions in here */
            {
                type: 'list',
                name: 'Select',
                choices: ['About', 'Skill', 'Project','exit']
            }
        ])
        .then(ans => {
            // Use user feedback for... whatever!!
            if (ans.Select == 'About') {
                console.log(`I'm Younis Rahman, an efficient, responsible, and reliable Software developer,delivering the best quality of service is my pursuit \n`)
                console.log(` I’m a talented Software Engineer with hands-on experience and a strong passion for designing and developing mobile apps for IOS and Android, web-based applications, Windows Application, and delivering high-quality dependable software solutions. Self-driven professional with strong problem-solving techniques, and strong oral and written communication skills. \n`)
                displayNext()
            }
            else if (ans.Select == 'Skill') {
                console.log(`I gained knowledge in several languages, frameworks, libraries and databases... \n`)
                console.log(`Language : JavaScript and React js(library) , React-native(framework), Node JS(Runtime Environment), Express(framework)  \n`)
                console.log(`Language : Python and Django(framework)  \n`)
                console.log(`Language : Java and Android  \n`)
                console.log(`Language : C# and Windowd Form Application  \n`)
                console.log(`Language : C \n`)
                console.log(`Database : SqlServer, MySql, SQLite, PostgreSQL  \n`)
                displayNext()
            }
            else if (ans.Select == 'Project') {
                console.log(`Check out my website : https://www.younisrahman.com/ \n`)
                displayNext()
            }
            else {
                console.log('Bye')
            }
        })
        .catch(error => {
            if (error.isTtyError) {
                // Prompt couldn't be rendered in the current environment
            } else {
                // Something else when wrong
            }
        });
}

function displayNext() {
    inquirer
        .prompt([
            /* Pass your questions in here */
            {
                type: 'list',
                name: 'Back',
                choices: ['Back']
            }
        ])
        .then(ans => {
            display()
        })
}
