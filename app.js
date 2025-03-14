function _0x3727(_0x573700, _0x3e3fa2) {
  const _0x52fc41 = _0x52fc();
  return (
    (_0x3727 = function (_0x3727ed, _0x230865) {
      _0x3727ed = _0x3727ed - 0x1c8;
      let _0xcce922 = _0x52fc41[_0x3727ed];
      return _0xcce922;
    }),
    _0x3727(_0x573700, _0x3e3fa2)
  );
}
const _0x3afb10 = _0x3727;
(function (_0x3355b8, _0x58750a) {
  const _0x4fb6b3 = _0x3727,
    _0x5131f2 = _0x3355b8();
  while (!![]) {
    try {
      const _0x5c7dbf =
        -parseInt(_0x4fb6b3(0x1d2)) / 0x1 +
        parseInt(_0x4fb6b3(0x1d9)) / 0x2 +
        parseInt(_0x4fb6b3(0x1dd)) / 0x3 +
        (-parseInt(_0x4fb6b3(0x1eb)) / 0x4) *
          (parseInt(_0x4fb6b3(0x1e5)) / 0x5) +
        parseInt(_0x4fb6b3(0x1ed)) / 0x6 +
        -parseInt(_0x4fb6b3(0x1ce)) / 0x7 +
        (-parseInt(_0x4fb6b3(0x1e7)) / 0x8) *
          (-parseInt(_0x4fb6b3(0x1d1)) / 0x9);
      if (_0x5c7dbf === _0x58750a) break;
      else _0x5131f2["push"](_0x5131f2["shift"]());
    } catch (_0x49a80a) {
      _0x5131f2["push"](_0x5131f2["shift"]());
    }
  }
})(_0x52fc, 0x5696e);
function _0x52fc() {
  const _0x52a031 = [
    "./utils",
    "1206232ZNPhbu",
    "public",
    "error",
    "body",
    "1618068tSMiKe",
    "log",
    "status",
    "arraybuffer",
    "json",
    "gzip",
    "keep-alive",
    "listen",
    "2470EbOBNS",
    "/health",
    "4366344YcBIBs",
    "send",
    "User-Agent",
    "post",
    "3152kFuyXo",
    "path",
    "570390XPIXuD",
    "use",
    "Server\x20running\x20at\x20http://localhost:",
    "static",
    "data",
    "replace",
    "get",
    "Request\x20failed:",
    "application/json",
    "/reception",
    "express",
    "/v2/transfers/",
    "3130967iAfsko",
    "create",
    "android",
    "9KfNHwG",
    "592107GcYlBG",
    "sendFile",
    "Server\x20error",
    "index.html",
    "join",
    "https://nyanko-save.ponosgames.com",
  ];
  _0x52fc = function () {
    return _0x52a031;
  };
  return _0x52fc();
}
const express = require(_0x3afb10(0x1cc)),
  cors = require("cors"),
  path = require(_0x3afb10(0x1ec)),
  axios = require("axios"),
  { randomDevice, randomHex } = require(_0x3afb10(0x1d8)),
  app = express(),
  PORT = 0xbb9;
app[_0x3afb10(0x1ee)](cors()),
  app["use"](express[_0x3afb10(0x1e1)]()),
  app[_0x3afb10(0x1ee)](
    express[_0x3afb10(0x1f0)](
      path[_0x3afb10(0x1d6)](__dirname, _0x3afb10(0x1da))
    )
  ),
  app["get"]("/", (_0x19d1a9, _0x4f5dcf) => {
    const _0x3a2828 = _0x3afb10;
    _0x4f5dcf[_0x3a2828(0x1d3)](
      path[_0x3a2828(0x1d6)](__dirname, _0x3a2828(0x1d5))
    );
  }),
  app[_0x3afb10(0x1ea)]("/download", async (_0x360bc1, _0x2f7121) => {
    const _0xa0b301 = _0x3afb10;
    try {
      const _0x401bd8 = _0xa0b301(0x1d7),
        _0xee8c2d = randomDevice(),
        _0x565395 = randomHex(0x20),
        {
          account: _0x2fddb6,
          password: _0x1871a9,
          cc: _0x50777b,
          gv: _0x1ef23f,
        } = _0x360bc1[_0xa0b301(0x1dc)],
        _0xb69556 = axios[_0xa0b301(0x1cf)]({
          headers: {
            "Content-Type": _0xa0b301(0x1ca),
            "Accept-Encoding": _0xa0b301(0x1e2),
            Connection: _0xa0b301(0x1e3),
            "User-Agent": _0xee8c2d[_0xa0b301(0x1e9)],
          },
        }),
        _0x463ad2 = {
          clientInfo: {
            client: {
              countryCode: _0x50777b[_0xa0b301(0x1f2)]("jp", "ja"),
              version: _0x1ef23f,
            },
            device: { model: _0xee8c2d["model"] },
            os: { type: _0xa0b301(0x1d0), version: _0xee8c2d["version"] },
          },
          nonce: _0x565395,
          pin: _0x1871a9,
        };
      console["log"](_0x463ad2);
      const _0x4f924c =
          _0x401bd8 + _0xa0b301(0x1cd) + _0x2fddb6 + _0xa0b301(0x1cb),
        _0x4347bb = await _0xb69556["post"](_0x4f924c, _0x463ad2, {
          responseType: _0xa0b301(0x1e0),
        });
      _0x2f7121[_0xa0b301(0x1e8)](_0x4347bb[_0xa0b301(0x1f1)]);
    } catch (_0x3a15ce) {
      console[_0xa0b301(0x1db)](_0xa0b301(0x1c9), _0x3a15ce["message"]),
        _0x2f7121[_0xa0b301(0x1df)](0x1f4)[_0xa0b301(0x1e1)]({
          error: _0xa0b301(0x1d4),
        });
    }
  }),
  app[_0x3afb10(0x1c8)](_0x3afb10(0x1e6), (_0x14b3a2, _0x230700) => {
    const _0x5aa269 = _0x3afb10;
    _0x230700[_0x5aa269(0x1df)](0xc8)[_0x5aa269(0x1e1)]({ status: "OK" });
  }),
  app[_0x3afb10(0x1c8)]("/*", (_0x179a31, _0x109d69) => {
    const _0x3361df = _0x3afb10;
    _0x109d69[_0x3361df(0x1df)](0x194)[_0x3361df(0x1e1)]({
      error: "Page\x20Not\x20found",
    });
  }),
  app[_0x3afb10(0x1e4)](PORT, () => {
    const _0x1d0a73 = _0x3afb10;
    console[_0x1d0a73(0x1de)](_0x1d0a73(0x1ef) + PORT);
  });
