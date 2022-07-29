## Video Streaming Example with Nestjs

#### What do you need to be done?

1. Create a route that will serve the video you want to upload:

```ts
@Get('/video-example')
  getFile(@Res({ passthrough: true }) res): StreamableFile {
    const file = createReadStream(join(process.cwd(), 'videos/video.mp4'));
    res.set({
      'Content-Type': 'video/mp4',
      'Content-Disposition': 'attachment; filename="video.mp4"',
    });
    return new StreamableFile(file);
}
```

2. Consume the video using the video tag on your webpage:

```html
<video width="80%" height="50%" controls>
   <source src="/video-example" type="video/mp4">
</video>
```
3. Result (access localhost:3000):
![image](/videos/it-works.gif)
