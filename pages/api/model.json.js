import * as path from 'path';
import * as fileSystem from 'fs';

export default async function handler(req, res) {
    //var filePath = path.join(__dirname, 'model.json');
    const filePath = path.join(process.cwd(), 'public/model.json');
    var stat = fileSystem.statSync(filePath);

    res.writeHead(200, {
        'Content-Type': 'application/json', // try text/plain if doesn't work
        'Content-Length': stat.size
    });

    var readStream = fileSystem.createReadStream(filePath);
    
    await new Promise(function (resolve) {
        readStream.pipe(res)
        readStream.on('end', resolve)
      });
}
  