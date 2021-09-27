const handle = (req, res) => {
    let html = `
    <!DOCTYPE HTML>
    <html>
        <head>
            <title>Serve with Nodejs</title>
        </head>
        <body>
            <h1 style="font-family:sans-serif;">GABRIEL, DEU CERTO ! WELCOME A HTTP WITH NODE</h1>
        </body>
    </html>
    `
    res.writeHead(200, {'Content-Type' : 'text/html; charset=utf-8'})
    res.write(html)
    res.end()
}

module.exports = handle