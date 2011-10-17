var BUF_MAX;
BUF_MAX = 100;
module.exports = {
  on: {
    chat: function(data, cb) {
      var overflow;
      if (this.users[this.name] && this.name === data.name) {
        console.log("[chat][" + this.name + "]: " + (data != null ? data.msg : void 0));
        data.date = new Date().valueOf();
        this.chatBuffer.push(data);
        if ((overflow = this.chatBuffer.length - BUF_MAX) > 0) {
          this.chatBuffer.splice(0, overflow);
        }
        try {
          cb({
            date: data.date
          });
        } catch (_e) {}
        return this.socket.broadcast.emit('chat', data);
      }
    }
  }
};