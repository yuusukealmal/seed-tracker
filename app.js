const _0x4d244a = _0x3af4;
(function (_0x59c678, _0x107b16) {
  const _0x70ccd8 = _0x3af4,
    _0x1d2fc3 = _0x59c678();
  while (!![]) {
    try {
      const _0x3dadd1 =
        (parseInt(_0x70ccd8(0x1b9)) / 0x1) *
          (parseInt(_0x70ccd8(0x1a5)) / 0x2) +
        parseInt(_0x70ccd8(0x193)) / 0x3 +
        parseInt(_0x70ccd8(0x1a3)) / 0x4 +
        (parseInt(_0x70ccd8(0x1b2)) / 0x5) *
          (parseInt(_0x70ccd8(0x1a8)) / 0x6) +
        parseInt(_0x70ccd8(0x19f)) / 0x7 +
        (parseInt(_0x70ccd8(0x1ba)) / 0x8) *
          (-parseInt(_0x70ccd8(0x195)) / 0x9) +
        (-parseInt(_0x70ccd8(0x1bb)) / 0xa) *
          (parseInt(_0x70ccd8(0x1a6)) / 0xb);
      if (_0x3dadd1 === _0x107b16) break;
      else _0x1d2fc3["push"](_0x1d2fc3["shift"]());
    } catch (_0x4ebf5b) {
      _0x1d2fc3["push"](_0x1d2fc3["shift"]());
    }
  }
})(_0x3ca5, 0x8a074);
function _0x3af4(_0x3b7755, _0x3de8f0) {
  const _0x3ca521 = _0x3ca5();
  return (
    (_0x3af4 = function (_0x3af453, _0x16bda1) {
      _0x3af453 = _0x3af453 - 0x193;
      let _0x5c7b10 = _0x3ca521[_0x3af453];
      return _0x5c7b10;
    }),
    _0x3af4(_0x3b7755, _0x3de8f0)
  );
}
const express = require(_0x4d244a(0x1c2)),
  cors = require("cors"),
  path = require(_0x4d244a(0x1c3)),
  axios = require(_0x4d244a(0x19c)),
  { randomDevice, randomHex } = require(_0x4d244a(0x1b5)),
  app = express();
function _0x3ca5() {
  const _0x1a40e6 = [
    "post",
    "/v2/transfers/",
    "Server\x20error",
    "/download",
    "5VmnqdK",
    "application/json",
    "arraybuffer",
    "./utils",
    "application/octet-stream",
    "use",
    "keep-alive",
    "55694ZjKPps",
    "8Grdfbb",
    "1553740HyCibW",
    "index.html",
    "data",
    "gzip",
    "get",
    "User-Agent",
    "Request\x20failed:",
    "express",
    "path",
    "787572aekofs",
    "Content-Type",
    "4690575zMqYLm",
    "https://nyanko-save.ponosgames.com",
    "send",
    "json",
    "join",
    "error",
    "model",
    "axios",
    "sendFile",
    "version",
    "2319156nXryhS",
    "/health",
    "exports",
    "all",
    "951260fejYKA",
    "static",
    "6ecKUhR",
    "44DfXhdz",
    "Page\x20Not\x20Found",
    "4255836vkovOr",
    "/reception",
    "android",
    "status",
    "body",
    "create",
  ];
  _0x3ca5 = function () {
    return _0x1a40e6;
  };
  return _0x3ca5();
}
app["use"](cors()),
  app[_0x4d244a(0x1b7)](express[_0x4d244a(0x198)]()),
  app["use"](express[_0x4d244a(0x1a4)]("public")),
  app["get"]("/", (_0x1e5e50, _0x53b042) => {
    const _0x4d80aa = _0x4d244a;
    _0x53b042[_0x4d80aa(0x19d)](
      path[_0x4d80aa(0x199)](__dirname, _0x4d80aa(0x1bc))
    );
  }),
  app[_0x4d244a(0x1bf)](_0x4d244a(0x1a0), (_0x5928e9, _0x28496c) => {
    const _0x467049 = _0x4d244a;
    _0x28496c[_0x467049(0x1ab)](0xc8)[_0x467049(0x198)]({ status: "OK" });
  }),
  app["get"](_0x4d244a(0x1b1), (_0x279be5, _0x254632) => {
    const _0x5d30b7 = _0x4d244a;
    _0x254632[_0x5d30b7(0x1ab)](0x195)[_0x5d30b7(0x198)]({
      error: "Method\x20Not\x20Allowed",
    });
  }),
  app[_0x4d244a(0x1ae)](_0x4d244a(0x1b1), async (_0x580e63, _0x2c54db) => {
    const _0x36cf33 = _0x4d244a;
    try {
      const _0x4d2c6d = _0x36cf33(0x196),
        _0x3d4f07 = randomDevice(),
        _0x5be76a = randomHex(0x20),
        {
          account: _0x259f47,
          password: _0x551b99,
          cc: _0x51a66b,
          gv: _0x2f0187,
        } = _0x580e63[_0x36cf33(0x1ac)],
        _0xad99ef = axios[_0x36cf33(0x1ad)]({
          headers: {
            "Content-Type": _0x36cf33(0x1b3),
            "Accept-Encoding": _0x36cf33(0x1be),
            Connection: _0x36cf33(0x1b8),
            "User-Agent": _0x3d4f07[_0x36cf33(0x1c0)],
          },
        }),
        _0x19253d = {
          clientInfo: {
            client: {
              countryCode: _0x51a66b["replace"]("jp", "ja"),
              version: _0x2f0187,
            },
            device: { model: _0x3d4f07[_0x36cf33(0x19b)] },
            os: {
              type: _0x36cf33(0x1aa),
              version: _0x3d4f07[_0x36cf33(0x19e)],
            },
          },
          nonce: _0x5be76a,
          pin: _0x551b99,
        },
        _0x3713b9 = _0x4d2c6d + _0x36cf33(0x1af) + _0x259f47 + _0x36cf33(0x1a9),
        _0x327c44 = await _0xad99ef["post"](_0x3713b9, _0x19253d, {
          responseType: _0x36cf33(0x1b4),
        });
      _0x2c54db["setHeader"](_0x36cf33(0x194), _0x36cf33(0x1b6)),
        _0x2c54db[_0x36cf33(0x197)](_0x327c44[_0x36cf33(0x1bd)]);
    } catch (_0x3aadbd) {
      console[_0x36cf33(0x19a)](_0x36cf33(0x1c1), _0x3aadbd["message"]),
        _0x2c54db["status"](0x1f4)[_0x36cf33(0x198)]({
          error: _0x36cf33(0x1b0),
        });
    }
  }),
  app[_0x4d244a(0x1a2)]("*", (_0x354f9a, _0x5ec3e2) => {
    const _0x478751 = _0x4d244a;
    _0x5ec3e2[_0x478751(0x1ab)](0x194)[_0x478751(0x198)]({
      error: _0x478751(0x1a7),
    });
  }),
  (module[_0x4d244a(0x1a1)] = app);
