function _0x370d() {
  const _0x307497 = [
    "password",
    "&lang=",
    "757872AFcDNV",
    "227500FBxpdt",
    "message",
    "seed",
    "post",
    "驗證碼格式錯誤！",
    "請輸入轉移碼",
    "95Lbctee",
    "error",
    "63vOHNfS",
    "rareGachaSeed:",
    "74140cmoveI",
    "Failed\x20to\x20Parse.\x20Please\x20Check\x20All\x20Fields",
    "13OKduOm",
    "請選擇遊戲版本",
    "2294874ZQgnfM",
    "860ArJBhY",
    "log",
    "434oKdXtw",
    "data",
    "parseSave\x20error:",
    "getElementById",
    "請輸入驗證碼",
    "轉移碼格式錯誤！",
    "請選擇版本",
    "Send\x20Query:",
    "Failed\x20to\x20Parse:\x20",
    "119822xRdgJm",
    "querySelector",
    "https://bc.godfat.org/?seed=",
    "value",
    "textContent",
    "2142152VYjDYm",
    "test",
    "href",
    "80736hWAEVu",
  ];
  _0x370d = function () {
    return _0x307497;
  };
  return _0x370d();
}
(function (_0x583565, _0xc223a7) {
  const _0x2d7c05 = _0x4cd2,
    _0x285c90 = _0x583565();
  while (!![]) {
    try {
      const _0x8a27a0 =
        (parseInt(_0x2d7c05(0x17f)) / 0x1) *
          (parseInt(_0x2d7c05(0x18d)) / 0x2) +
        parseInt(_0x2d7c05(0x181)) / 0x3 +
        (parseInt(_0x2d7c05(0x173)) / 0x4) *
          (parseInt(_0x2d7c05(0x179)) / 0x5) +
        (parseInt(_0x2d7c05(0x195)) / 0x6) *
          (parseInt(_0x2d7c05(0x184)) / 0x7) +
        (-parseInt(_0x2d7c05(0x192)) / 0x8) *
          (parseInt(_0x2d7c05(0x17b)) / 0x9) +
        (-parseInt(_0x2d7c05(0x182)) / 0xa) *
          (parseInt(_0x2d7c05(0x17d)) / 0xb) +
        -parseInt(_0x2d7c05(0x172)) / 0xc;
      if (_0x8a27a0 === _0xc223a7) break;
      else _0x285c90["push"](_0x285c90["shift"]());
    } catch (_0x2daa14) {
      _0x285c90["push"](_0x285c90["shift"]());
    }
  }
})(_0x370d, 0xe5dcf);
function _0x4cd2(_0x2d3a95, _0x37f77f) {
  const _0x370d03 = _0x370d();
  return (
    (_0x4cd2 = function (_0x4cd22c, _0x48199f) {
      _0x4cd22c = _0x4cd22c - 0x171;
      let _0x3083f8 = _0x370d03[_0x4cd22c];
      return _0x3083f8;
    }),
    _0x4cd2(_0x2d3a95, _0x37f77f)
  );
}
async function downloadFile() {
  const _0x552fa6 = _0x4cd2,
    _0x3d8088 = document[_0x552fa6(0x187)]("account")[_0x552fa6(0x190)],
    _0x1026aa = document["getElementById"](_0x552fa6(0x196))[_0x552fa6(0x190)],
    _0x255374 = document[_0x552fa6(0x18e)]("input[name=\x22cc\x22]:checked"),
    _0x5489a1 = document["getElementById"]("gv")[_0x552fa6(0x190)],
    _0x18c2cc = /^[A-fa-f0-9]{9}$/,
    _0x60bd55 = /^\d{4}$/;
  if (!_0x3d8088 || !_0x1026aa || !_0x255374 || !_0x5489a1)
    alert(
      !_0x3d8088
        ? _0x552fa6(0x178)
        : !_0x1026aa
        ? _0x552fa6(0x188)
        : !_0x255374
        ? _0x552fa6(0x18a)
        : _0x552fa6(0x180)
    );
  else
    !_0x18c2cc[_0x552fa6(0x193)](_0x3d8088) ||
    !_0x60bd55[_0x552fa6(0x193)](_0x1026aa)
      ? alert(
          !_0x18c2cc[_0x552fa6(0x193)](_0x3d8088)
            ? _0x552fa6(0x189)
            : _0x552fa6(0x177)
        )
      : console[_0x552fa6(0x183)](_0x552fa6(0x18b), {
          account: _0x3d8088,
          password: _0x1026aa,
          cc: _0x255374[_0x552fa6(0x190)],
          gv: _0x5489a1,
        });
  const _0x260362 = await axios[_0x552fa6(0x176)](
      "https://seedtracker.vercel.app/download",
      {
        account: _0x3d8088,
        password: _0x1026aa,
        cc: _0x255374[_0x552fa6(0x190)],
        gv: _0x5489a1,
      },
      { responseType: "arraybuffer" }
    ),
    _0x21360a = new Uint8Array(_0x260362[_0x552fa6(0x185)]);
  try {
    const _0x4d6c1e = parseSave(_0x21360a, _0x255374[_0x552fa6(0x190)]);
    console["log"](_0x552fa6(0x17c), _0x4d6c1e),
      _0x4d6c1e === undefined
        ? (document["getElementById"]("seed")[_0x552fa6(0x191)] =
            _0x552fa6(0x17e))
        : ((document[_0x552fa6(0x187)](_0x552fa6(0x175))[_0x552fa6(0x191)] =
            "Seed:\x20" + _0x4d6c1e),
          (window["location"][_0x552fa6(0x194)] =
            _0x552fa6(0x18f) +
            _0x4d6c1e +
            _0x552fa6(0x171) +
            _0x255374[_0x552fa6(0x190)]));
  } catch (_0x247dec) {
    console[_0x552fa6(0x17a)](_0x552fa6(0x186), _0x247dec),
      (document[_0x552fa6(0x187)]("seed")[_0x552fa6(0x191)] =
        _0x552fa6(0x18c) + _0x247dec[_0x552fa6(0x174)]);
  }
}
