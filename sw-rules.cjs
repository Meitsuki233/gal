module.exports.cacheRules = {
  simple: {
    match: (url, $eject) =>
      url.host === "gal.saop.cc" &&
      url.pathname.match(
        /\.(woff2|woff|ttf|cur|ico|avif|webp|svg|png|jpg|jpeg|gif|css|js|json|html|mp3|m4a|moc|mtn|xml)$/
      ),
  },
};
