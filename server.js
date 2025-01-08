const http = require('http');
const fs = require('fs');

const PORT = 3000;

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');
    if(req.url === '/'){
        res.statusCode = 200;
        const data = fs.readFileSync('index.html');
        res.write(data);
        res.end();
    } else if(req.url === '/about'){    
        res.statusCode = 200;
        const data = fs.readFileSync('about.html');
        res.write(data);    
        res.end();
    } else if(req.url === '/contact'){    
        res.statusCode = 200;
        const data = fs.readFileSync('contact.html');
        res.write(data);
        res.end();
    } else if (req.url === '/admission') {
        res.statusCode = 200;
        const data = fs.readFileSync('admission.html');
        res.write(data);
        res.end();
    }else if (req.url === '/courses') {
        res.statusCode = 200;
        const data = fs.readFileSync('courses.html');
        res.write(data);
        res.end();
    }

     else {
        res.write('<h1>Page Not Found</h1>');
    }
})

server.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
})