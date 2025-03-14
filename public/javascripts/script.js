(function (_0x12f6eb, _0x57425e) {
  const _0x1ace86 = _0x50ad,
    _0x136e68 = _0x12f6eb();
  while (!![]) {
    try {
      const _0x3ae757 =
        (-parseInt(_0x1ace86(0x8c)) / 0x1) *
          (-parseInt(_0x1ace86(0xa3)) / 0x2) +
        -parseInt(_0x1ace86(0x96)) / 0x3 +
        -parseInt(_0x1ace86(0x98)) / 0x4 +
        parseInt(_0x1ace86(0xa0)) / 0x5 +
        (parseInt(_0x1ace86(0x89)) / 0x6) * (parseInt(_0x1ace86(0x99)) / 0x7) +
        -parseInt(_0x1ace86(0xa4)) / 0x8 +
        parseInt(_0x1ace86(0x84)) / 0x9;
      if (_0x3ae757 === _0x57425e) break;
      else _0x136e68["push"](_0x136e68["shift"]());
    } catch (_0x1d74ac) {
      _0x136e68["push"](_0x136e68["shift"]());
    }
  }
})(_0x119e, 0x25884);
async function downloadFile() {
  const _0x844166 = _0x50ad,
    _0x2d0221 = document[_0x844166(0x9a)](_0x844166(0x90))[_0x844166(0x83)],
    _0x222b5a = document[_0x844166(0x9a)]("password")["value"],
    _0x3e9dcc = document[_0x844166(0x8f)](_0x844166(0x9c)),
    _0x3bd5e0 = document["getElementById"]("gv")[_0x844166(0x83)];
  let _0x597e43 = null;
  const _0x15a954 = /^[A-Za-z0-9]{9}$/,
    _0x30e7f4 = /^\d{4}$/;
  if (!_0x2d0221) alert(_0x844166(0x9d));
  else {
    if (!_0x222b5a) alert(_0x844166(0x93));
    else {
      if (!_0x3e9dcc) alert(_0x844166(0x92));
      else {
        if (!_0x3bd5e0) alert(_0x844166(0x95));
        else {
          if (!_0x15a954[_0x844166(0x86)](_0x2d0221)) alert("轉移碼格式錯誤！");
          else
            !_0x30e7f4[_0x844166(0x86)](_0x222b5a)
              ? alert("驗證碼格式錯誤！")
              : ((_0x597e43 = _0x3e9dcc["value"]),
                console[_0x844166(0x8a)](_0x844166(0x97), {
                  account: _0x2d0221,
                  password: _0x222b5a,
                  cc: _0x597e43,
                  gv: _0x3bd5e0,
                }));
        }
      }
    }
  }
  const _0x1e162b = await axios[_0x844166(0x94)](
      _0x844166(0x91),
      { account: _0x2d0221, password: _0x222b5a, cc: _0x597e43, gv: _0x3bd5e0 },
      { responseType: _0x844166(0x8e) }
    ),
    _0x1ee90b = new Uint8Array(_0x1e162b[_0x844166(0x9b)]);
  try {
    const _0x59f54a = parseSave(_0x1ee90b, _0x597e43);
    _0x59f54a === undefined
      ? (document[_0x844166(0x9a)](_0x844166(0x9f))[_0x844166(0x85)] =
          _0x844166(0xa2))
      : ((document[_0x844166(0x9a)](_0x844166(0x9f))["textContent"] =
          _0x844166(0xa6) + _0x59f54a),
        console[_0x844166(0x8a)](
          _0x844166(0x8d) + _0x59f54a + _0x844166(0x87) + _0x597e43
        ),
        (window["location"][_0x844166(0x88)] =
          _0x844166(0x8d) + _0x59f54a + _0x844166(0x87) + _0x597e43));
  } catch (_0x4c9d89) {
    console[_0x844166(0xa1)](_0x844166(0xa5), _0x4c9d89),
      (document[_0x844166(0x9a)](_0x844166(0x9f))[_0x844166(0x85)] =
        _0x844166(0x8b) + _0x4c9d89[_0x844166(0x9e)]);
  }
}
function _0x50ad(_0x2d7a49, _0x5ebe4c) {
  const _0x119e8e = _0x119e();
  return (
    (_0x50ad = function (_0x50add2, _0x3157ff) {
      _0x50add2 = _0x50add2 - 0x83;
      let _0x249910 = _0x119e8e[_0x50add2];
      return _0x249910;
    }),
    _0x50ad(_0x2d7a49, _0x5ebe4c)
  );
}
function _0x119e() {
  const _0x3c2f72 = [
    "post",
    "請選擇遊戲版本",
    "341550FfJLhc",
    "Send\x20Query:",
    "1071440AqfbVS",
    "7blsZdW",
    "getElementById",
    "data",
    "input[name=\x22cc\x22]:checked",
    "請輸入轉移碼",
    "message",
    "seed",
    "477885DTEiei",
    "error",
    "Failed\x20to\x20Parse.\x20Please\x20Check\x20All\x20Fields",
    "1808lESqBb",
    "954576BfPXmY",
    "parseSave\x20error:",
    "Seed:\x20",
    "value",
    "2195190bwgPQN",
    "textContent",
    "test",
    "&lang=",
    "href",
    "1750638PSXjMB",
    "log",
    "Failed\x20to\x20Parse:\x20",
    "26uqMMsH",
    "https://bc.godfat.org/?seed=",
    "arraybuffer",
    "querySelector",
    "account",
    "http://localhost:3001/download",
    "請選擇版本",
    "請輸入驗證碼",
  ];
  _0x119e = function () {
    return _0x3c2f72;
  };
  return _0x119e();
}
