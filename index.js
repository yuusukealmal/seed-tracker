const _0xd1bde3 = _0x21f6;
(function (_0x40b770, _0x11eb5d) {
  const _0xe22d52 = _0x21f6,
    _0xf3d0c2 = _0x40b770();
  while (!![]) {
    try {
      const _0x804fdf =
        parseInt(_0xe22d52(0x131)) / 0x1 +
        (parseInt(_0xe22d52(0x137)) / 0x2) *
          (-parseInt(_0xe22d52(0x12e)) / 0x3) +
        parseInt(_0xe22d52(0x12f)) / 0x4 +
        -parseInt(_0xe22d52(0x144)) / 0x5 +
        (-parseInt(_0xe22d52(0x125)) / 0x6) *
          (parseInt(_0xe22d52(0x136)) / 0x7) +
        -parseInt(_0xe22d52(0x133)) / 0x8 +
        (-parseInt(_0xe22d52(0x13c)) / 0x9) *
          (-parseInt(_0xe22d52(0x12a)) / 0xa);
      if (_0x804fdf === _0x11eb5d) break;
      else _0xf3d0c2["push"](_0xf3d0c2["shift"]());
    } catch (_0x2b85eb) {
      _0xf3d0c2["push"](_0xf3d0c2["shift"]());
    }
  }
})(_0x5285, 0xa4aea);
function _0x5285() {
  const _0x3daa95 = [
    "4164uKMmaE",
    "axios",
    "express",
    "Method\x20Not\x20Allowed",
    "static",
    "21949030qZeMkD",
    "Page\x20Not\x20Found",
    "sendFile",
    "join",
    "411834MoEteK",
    "5056908JAfEbr",
    "gzip",
    "1003541hkuvWz",
    "create",
    "6648784tlEBph",
    "message",
    "send",
    "13027QErNei",
    "16oaagep",
    "log",
    "post",
    "get",
    "model",
    "9secWUa",
    "use",
    "arraybuffer",
    "data",
    "/download",
    "Request\x20failed:",
    "/v2/transfers/",
    "json",
    "2836385gYfTXc",
    "error",
    "android",
    "./utils",
    "keep-alive",
    "application/octet-stream",
    "Content-Type",
    "path",
    "all",
    "status",
    "index.html",
    "version",
    "https://nyanko-save.ponosgames.com",
  ];
  _0x5285 = function () {
    return _0x3daa95;
  };
  return _0x5285();
}
function _0x21f6(_0x35ede, _0x2635dc) {
  const _0x52852e = _0x5285();
  return (
    (_0x21f6 = function (_0x21f6a4, _0x401d32) {
      _0x21f6a4 = _0x21f6a4 - 0x11a;
      let _0x45ad34 = _0x52852e[_0x21f6a4];
      return _0x45ad34;
    }),
    _0x21f6(_0x35ede, _0x2635dc)
  );
}
const express = require(_0xd1bde3(0x127)),
  path = require(_0xd1bde3(0x11f)),
  axios = require(_0xd1bde3(0x126)),
  { randomDevice, randomHex } = require(_0xd1bde3(0x11b)),
  app = express(),
  PORT = 0xbb8;
app[_0xd1bde3(0x13d)](express[_0xd1bde3(0x143)]()),
  app[_0xd1bde3(0x13d)](express[_0xd1bde3(0x129)]("public")),
  app["get"]("/", (_0x186522, _0x2092b4) => {
    const _0x1f1b88 = _0xd1bde3;
    _0x2092b4[_0x1f1b88(0x12c)](
      path[_0x1f1b88(0x12d)](__dirname, _0x1f1b88(0x122))
    );
  }),
  app[_0xd1bde3(0x13a)]("/health", (_0x1240f2, _0x3a2045) => {
    const _0x16f9bb = _0xd1bde3;
    _0x3a2045[_0x16f9bb(0x121)](0xc8)[_0x16f9bb(0x143)]({ status: "OK" });
  }),
  app[_0xd1bde3(0x13a)](_0xd1bde3(0x140), (_0x48823a, _0x4e1289) => {
    const _0x170852 = _0xd1bde3;
    _0x4e1289[_0x170852(0x121)](0x195)[_0x170852(0x143)]({
      error: _0x170852(0x128),
    });
  }),
  app[_0xd1bde3(0x139)](_0xd1bde3(0x140), async (_0x4bd572, _0x333202) => {
    const _0x383633 = _0xd1bde3;
    try {
      const _0x33626f = _0x383633(0x124),
        _0x33d401 = randomDevice(),
        _0x1356a9 = randomHex(0x20),
        {
          account: _0x2c7775,
          password: _0xda4de9,
          cc: _0x3e845d,
          gv: _0x42f426,
        } = _0x4bd572["body"],
        _0x74db74 = axios[_0x383633(0x132)]({
          headers: {
            "Content-Type": "application/json",
            "Accept-Encoding": _0x383633(0x130),
            Connection: _0x383633(0x11c),
            "User-Agent": _0x33d401["User-Agent"],
          },
        }),
        _0x59b951 = {
          clientInfo: {
            client: {
              countryCode: _0x3e845d["replace"]("jp", "ja"),
              version: _0x42f426,
            },
            device: { model: _0x33d401[_0x383633(0x13b)] },
            os: {
              type: _0x383633(0x11a),
              version: _0x33d401[_0x383633(0x123)],
            },
          },
          nonce: _0x1356a9,
          pin: _0xda4de9,
        },
        _0x3e3272 = _0x33626f + _0x383633(0x142) + _0x2c7775 + "/reception",
        _0x2a5692 = await _0x74db74[_0x383633(0x139)](_0x3e3272, _0x59b951, {
          responseType: _0x383633(0x13e),
        });
      _0x333202["setHeader"](_0x383633(0x11e), _0x383633(0x11d)),
        _0x333202[_0x383633(0x135)](_0x2a5692[_0x383633(0x13f)]);
    } catch (_0x2b67ba) {
      console[_0x383633(0x145)](_0x383633(0x141), _0x2b67ba[_0x383633(0x134)]),
        _0x333202[_0x383633(0x121)](0x1f4)[_0x383633(0x143)]({
          error: "Server\x20error",
        });
    }
  }),
  app[_0xd1bde3(0x120)]("*", (_0x508500, _0x4df947) => {
    const _0x597d45 = _0xd1bde3;
    _0x4df947[_0x597d45(0x121)](0x194)[_0x597d45(0x143)]({
      error: _0x597d45(0x12b),
    });
  }),
  app["listen"](PORT, () => {
    const _0x55ea76 = _0xd1bde3;
    console[_0x55ea76(0x138)]("Server\x20started\x20on\x20port\x203000");
  });
