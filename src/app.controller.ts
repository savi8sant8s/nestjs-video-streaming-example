import { Controller, Get, Res, StreamableFile } from '@nestjs/common';
import { createReadStream } from 'fs';
import { join } from 'path';

@Controller()
export class AppController {
  @Get('/')
  redirect(@Res() res) {
    return res.redirect('/index.html');
  }

  @Get('/video-example')
  getFile(@Res({ passthrough: true }) res): StreamableFile {
    const file = createReadStream(join(process.cwd(), 'videos/video.mp4'));
    res.set({
      'Content-Type': 'video/mp4',
      'Content-Disposition': 'attachment; filename="video.mp4"',
    });
    return new StreamableFile(file);
  }
}
