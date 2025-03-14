function _0x2dbe(_0x2cfd89, _0x36ac1a) {
  const _0x35fd86 = _0x35fd();
  return (
    (_0x2dbe = function (_0x2dbe51, _0x5f2186) {
      _0x2dbe51 = _0x2dbe51 - 0x1bd;
      let _0x4ef444 = _0x35fd86[_0x2dbe51];
      return _0x4ef444;
    }),
    _0x2dbe(_0x2cfd89, _0x36ac1a)
  );
}
function _0x35fd() {
  const _0x57bd4a = [
    "test",
    "324334MEBUWt",
    "驗證碼格式錯誤！",
    "data",
    "&lang=",
    "1074310xIQosW",
    "2726397sHhnbf",
    "686008BPvNmC",
    "error",
    "textContent",
    "arraybuffer",
    "請輸入轉移碼",
    "http://localhost:3000/download",
    "input[name=\x22cc\x22]:checked",
    "https://bc.godfat.org/?seed=",
    "message",
    "Failed\x20to\x20Parse:\x20",
    "請選擇遊戲版本",
    "log",
    "value",
    "7jNWphC",
    "getElementById",
    "4313744TRsYrC",
    "location",
    "1847874VqyZEV",
    "15Ncoqxw",
    "2211377HTpVej",
    "seed",
    "6MBrexJ",
    "Failed\x20to\x20Parse.\x20Please\x20Check\x20All\x20Fields",
    "Seed:\x20",
  ];
  _0x35fd = function () {
    return _0x57bd4a;
  };
  return _0x35fd();
}
(function (_0x165f91, _0x24bc0d) {
  const _0x47cc74 = _0x2dbe,
    _0x14cb82 = _0x165f91();
  while (!![]) {
    try {
      const _0x385f06 =
        (parseInt(_0x47cc74(0x1d8)) / 0x1) *
          (parseInt(_0x47cc74(0x1c5)) / 0x2) +
        (parseInt(_0x47cc74(0x1c1)) / 0x3) *
          (parseInt(_0x47cc74(0x1cb)) / 0x4) +
        (parseInt(_0x47cc74(0x1be)) / 0x5) *
          (-parseInt(_0x47cc74(0x1bd)) / 0x6) +
        parseInt(_0x47cc74(0x1bf)) / 0x7 +
        -parseInt(_0x47cc74(0x1da)) / 0x8 +
        parseInt(_0x47cc74(0x1ca)) / 0x9 +
        parseInt(_0x47cc74(0x1c9)) / 0xa;
      if (_0x385f06 === _0x24bc0d) break;
      else _0x14cb82["push"](_0x14cb82["shift"]());
    } catch (_0x5ac13e) {
      _0x14cb82["push"](_0x14cb82["shift"]());
    }
  }
})(_0x35fd, 0xb4fad);
async function downloadFile() {
  const _0x491a67 = _0x2dbe,
    _0x2bbe0a = document["getElementById"]("account")[_0x491a67(0x1d7)],
    _0x2a1295 = document[_0x491a67(0x1d9)]("password")[_0x491a67(0x1d7)],
    _0x1439e7 = document["querySelector"](_0x491a67(0x1d1)),
    _0x4b874c = document[_0x491a67(0x1d9)]("gv")[_0x491a67(0x1d7)],
    _0x5501a0 = /^[A-Za-z0-9]{9}$/,
    _0x51d419 = /^\d{4}$/;
  if (!_0x2bbe0a || !_0x2a1295 || !_0x1439e7 || !_0x4b874c)
    alert(
      !_0x2bbe0a
        ? _0x491a67(0x1cf)
        : !_0x2a1295
        ? "請輸入驗證碼"
        : !_0x1439e7
        ? "請選擇版本"
        : _0x491a67(0x1d5)
    );
  else
    !_0x5501a0["test"](_0x2bbe0a) || !_0x51d419[_0x491a67(0x1c4)](_0x2a1295)
      ? alert(
          !_0x5501a0[_0x491a67(0x1c4)](_0x2bbe0a)
            ? "轉移碼格式錯誤！"
            : _0x491a67(0x1c6)
        )
      : console[_0x491a67(0x1d6)]("Send\x20Query:", {
          account: _0x2bbe0a,
          password: _0x2a1295,
          cc: _0x1439e7[_0x491a67(0x1d7)],
          gv: _0x4b874c,
        });
  const _0xf56a59 = await axios["post"](
      _0x491a67(0x1d0),
      {
        account: _0x2bbe0a,
        password: _0x2a1295,
        cc: _0x1439e7[_0x491a67(0x1d7)],
        gv: _0x4b874c,
      },
      { responseType: _0x491a67(0x1ce) }
    ),
    _0x414221 = new Uint8Array(_0xf56a59[_0x491a67(0x1c7)]);
  try {
    const _0x1400c4 = parseSave(_0x414221, _0x1439e7["value"]);
    console[_0x491a67(0x1d6)]("rareGachaSeed:", _0x1400c4),
      _0x1400c4 === undefined
        ? (document[_0x491a67(0x1d9)](_0x491a67(0x1c0))[_0x491a67(0x1cd)] =
            _0x491a67(0x1c2))
        : ((document[_0x491a67(0x1d9)](_0x491a67(0x1c0))[_0x491a67(0x1cd)] =
            _0x491a67(0x1c3) + _0x1400c4),
          (window[_0x491a67(0x1db)]["href"] =
            _0x491a67(0x1d2) +
            _0x1400c4 +
            _0x491a67(0x1c8) +
            _0x1439e7[_0x491a67(0x1d7)]));
  } catch (_0x3f92b6) {
    console[_0x491a67(0x1cc)]("parseSave\x20error:", _0x3f92b6),
      (document[_0x491a67(0x1d9)]("seed")[_0x491a67(0x1cd)] =
        _0x491a67(0x1d4) + _0x3f92b6[_0x491a67(0x1d3)]);
  }
}
