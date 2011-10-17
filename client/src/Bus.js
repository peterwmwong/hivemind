define(function() {
  var sock, _ref;
  return sock = io.connect(((_ref = window.hivemind) != null ? _ref.socketurl : void 0) || "http://96.126.114.123:80");
});