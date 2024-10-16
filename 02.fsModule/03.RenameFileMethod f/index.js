


let http = require('http')
let fs = require('fs');

let server = http.createServer((req, res) => {
    if (req.url == '/') {

        // Async File System (fs) Rename file method
        // fs.rename('Home.docx', "Practice.txt", (error) => {
        //     if (error) {
        //         res.writeHead(200, { 'Content-Type': "text/html" })
        //         res.write('Opps.. Something is wrong.')
        //         res.end();
        //     } else {
        //         res.writeHead(200, { 'Content-Type': "text/html" })
        //         res.write("File Rename Successful")
        //         res.end();
        //     }
        // })

        // Sync File System (fs) read file method
        let error = fs.renameSync('HomeSnyc.html', "PracticeSync.txt");
        if (error) {
            res.writeHead(200, { 'Content-Type': "text/html" })
            res.write("File Rename fail")
            res.end();
        } else {
            res.writeHead(200, { 'Content-Type': "text/html" })
            res.write("File Rename successful.")
            res.end();
        }
    }

});

server.listen(4000)
console.log('Server run Successful')


const users = {
    name: 'Md Jasim Uddin',
    age: 22,
    designation: "MERN Stack Web Developer",
    Adderss: "Nachole, Chapainawabganj"
}


