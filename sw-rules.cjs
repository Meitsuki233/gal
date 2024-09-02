module.exports.cacheRules = {
  simple: {
    match: (url, $eject) =>
      url.host === "gal.saop.cc" &&
      url.pathname.match(
        /\.(woff2|woff|ttf|cur|ico|avif|webp|bmp|svg|raw|png|jpg|jpeg|gif|css|js|json|html|ass|vtt|mov|mpv|mp4|mp3|m4a|moc|mtn|xml)$/
      ),
  },
};