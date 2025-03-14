(function (_0x14ed97, _0xca42e5) {
  const _0x1379af = _0x4050,
    _0x1f7d15 = _0x14ed97();
  while (!![]) {
    try {
      const _0x49518f =
        (parseInt(_0x1379af(0x162)) / 0x1) *
          (-parseInt(_0x1379af(0x178)) / 0x2) +
        -parseInt(_0x1379af(0x164)) / 0x3 +
        (parseInt(_0x1379af(0x165)) / 0x4) *
          (parseInt(_0x1379af(0x177)) / 0x5) +
        (-parseInt(_0x1379af(0x163)) / 0x6) *
          (parseInt(_0x1379af(0x175)) / 0x7) +
        -parseInt(_0x1379af(0x16f)) / 0x8 +
        parseInt(_0x1379af(0x17b)) / 0x9 +
        (parseInt(_0x1379af(0x172)) / 0xa) * (parseInt(_0x1379af(0x173)) / 0xb);
      if (_0x49518f === _0xca42e5) break;
      else _0x1f7d15["push"](_0x1f7d15["shift"]());
    } catch (_0x1b0ce3) {
      _0x1f7d15["push"](_0x1f7d15["shift"]());
    }
  }
})(_0x59a1, 0x7499b);
async function downloadFile() {
  const _0x473a22 = _0x4050,
    _0x121d6b = document[_0x473a22(0x166)](_0x473a22(0x169))["value"],
    _0x4e9636 = document["getElementById"](_0x473a22(0x167))[_0x473a22(0x161)],
    _0x5534cd = document["querySelector"]("input[name=\x22cc\x22]:checked"),
    _0x52728c = document[_0x473a22(0x166)]("gv")["value"];
  let _0xaf4c56 = null;
  const _0xf8d442 = /^[A-Za-z0-9]{9}$/,
    _0x3b1078 = /^\d{4}$/;
  if (!_0x121d6b || !_0x4e9636 || !_0x5534cd || !_0x52728c)
    alert(
      !_0x121d6b
        ? "請輸入轉移碼"
        : !_0x4e9636
        ? "請輸入驗證碼"
        : !_0x5534cd
        ? "請選擇版本"
        : _0x473a22(0x17d)
    );
  else
    !_0xf8d442[_0x473a22(0x17f)](_0x121d6b) ||
    !_0x3b1078[_0x473a22(0x17f)](_0x4e9636)
      ? alert(
          !_0xf8d442["test"](_0x121d6b) ? _0x473a22(0x176) : _0x473a22(0x168)
        )
      : console[_0x473a22(0x17a)](_0x473a22(0x17c), {
          account: _0x121d6b,
          password: _0x4e9636,
          cc: _0x5534cd[_0x473a22(0x161)],
          gv: _0x52728c,
        });
  const _0x36e1ce = await axios[_0x473a22(0x179)](
      _0x473a22(0x171),
      { account: _0x121d6b, password: _0x4e9636, cc: _0xaf4c56, gv: _0x52728c },
      { responseType: "arraybuffer" }
    ),
    _0x32e408 = new Uint8Array(_0x36e1ce["data"]);
  try {
    const _0x3b6bfb = parseSave(_0x32e408, _0xaf4c56);
    _0x3b6bfb === undefined
      ? (document[_0x473a22(0x166)](_0x473a22(0x16b))[_0x473a22(0x17e)] =
          _0x473a22(0x16c))
      : ((document[_0x473a22(0x166)](_0x473a22(0x16b))[_0x473a22(0x17e)] =
          _0x473a22(0x16a) + _0x3b6bfb),
        (window["location"][_0x473a22(0x170)] =
          "https://bc.godfat.org/?seed=" + _0x3b6bfb + "&lang=" + _0xaf4c56));
  } catch (_0x26ad04) {
    console[_0x473a22(0x16e)](_0x473a22(0x174), _0x26ad04),
      (document[_0x473a22(0x166)](_0x473a22(0x16b))[_0x473a22(0x17e)] =
        "Failed\x20to\x20Parse:\x20" + _0x26ad04[_0x473a22(0x16d)]);
  }
}
function _0x4050(_0x5ecc85, _0x27cebf) {
  const _0x59a187 = _0x59a1();
  return (
    (_0x4050 = function (_0x405018, _0x32221a) {
      _0x405018 = _0x405018 - 0x161;
      let _0x1d800c = _0x59a187[_0x405018];
      return _0x1d800c;
    }),
    _0x4050(_0x5ecc85, _0x27cebf)
  );
}
function _0x59a1() {
  const _0x11139f = [
    "Send\x20Query:",
    "請選擇遊戲版本",
    "textContent",
    "test",
    "value",
    "211687EVMJet",
    "1447326rpWtZR",
    "730398IvARSw",
    "4OyhLDg",
    "getElementById",
    "password",
    "驗證碼格式錯誤！",
    "account",
    "Seed:\x20",
    "seed",
    "Failed\x20to\x20Parse.\x20Please\x20Check\x20All\x20Fields",
    "message",
    "error",
    "4915032fUaKrB",
    "href",
    "https://seedtracker.vercel.app//download",
    "75910KLBrcn",
    "649KGbzSs",
    "parseSave\x20error:",
    "21KtTIyh",
    "轉移碼格式錯誤！",
    "4442590MSqkDY",
    "2cYsFZi",
    "post",
    "log",
    "8409627MajstR",
  ];
  _0x59a1 = function () {
    return _0x11139f;
  };
  return _0x59a1();
}
