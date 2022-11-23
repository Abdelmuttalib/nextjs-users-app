export default function Head() {
  return (
    <>
      <title>Users App</title>
      <meta content='width=device-width, initial-scale=1' name='viewport' />
      <link rel='icon' href='/favicon.ico' />

      {/* meta description */}
      <meta name='description' content='users app'></meta>

      {/* font inter */}
      <link
        rel='preload'
        href='/fonts/inter-var-latin.woff2'
        as='font'
        type='font/woff2'
        crossOrigin='anonymous'
      />
    </>
  );
}
