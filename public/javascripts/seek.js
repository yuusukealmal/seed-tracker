(function (_0x495d39, _0x295a32) {
  const _0x37b758 = _0xcc89,
    _0x5f332a = _0x495d39();
  while (!![]) {
    try {
      const _0x34e40b =
        parseInt(_0x37b758(0x13c)) / 0x1 +
        (parseInt(_0x37b758(0x132)) / 0x2) *
          (parseInt(_0x37b758(0x140)) / 0x3) +
        -parseInt(_0x37b758(0x13a)) / 0x4 +
        parseInt(_0x37b758(0x138)) / 0x5 +
        (parseInt(_0x37b758(0x136)) / 0x6) *
          (parseInt(_0x37b758(0x133)) / 0x7) +
        (parseInt(_0x37b758(0x134)) / 0x8) *
          (parseInt(_0x37b758(0x13e)) / 0x9) +
        (parseInt(_0x37b758(0x13d)) / 0xa) *
          (-parseInt(_0x37b758(0x13b)) / 0xb);
      if (_0x34e40b === _0x295a32) break;
      else _0x5f332a["push"](_0x5f332a["shift"]());
    } catch (_0x36e6c6) {
      _0x5f332a["push"](_0x5f332a["shift"]());
    }
  }
})(_0x5191, 0x8612c);
let address = 0x0,
  save_data = null;
function setAddress(_0x2fd663) {
  address = _0x2fd663;
}
function seek(_0x5a8cde) {
  const _0x196e13 = _0xcc89,
    _0x291ec5 = convertLittle(
      save_data[_0x196e13(0x135)](address, address + _0x5a8cde)
    );
  return setAddress(address + _0x5a8cde), _0x291ec5;
}
function convertLittle(_0x1506d9) {
  let _0x316bbd = 0x0;
  for (let _0x51967c = 0x0; _0x51967c < _0x1506d9["length"]; _0x51967c++) {
    _0x316bbd += (_0x1506d9[_0x51967c] & 0xff) << (0x8 * _0x51967c);
  }
  return _0x316bbd;
}
function getTimeStamp(_0x34de3a) {
  if (_0x34de3a) seek(0x1);
  seek(0x4), seek(0x4), seek(0x4), seek(0x4), seek(0x4), seek(0x4);
}
function getData(_0x12e39c = 0x4, _0x4ddd6c = 0x4, _0x209b24 = null) {
  const _0x5002cc = _0xcc89,
    _0x43c822 = [];
  if (_0x209b24 === null) _0x209b24 = seek(_0x12e39c);
  for (let _0x47cb91 = 0x0; _0x47cb91 < _0x209b24; _0x47cb91++) {
    _0x43c822[_0x5002cc(0x13f)](seek(_0x4ddd6c));
  }
  return _0x43c822;
}
function _0x5191() {
  const _0x501a29 = [
    "Could\x20not\x20find\x20date",
    "3227195zwedkd",
    "length",
    "1093084uiMEqT",
    "14417337QWbFaG",
    "306439vlbysb",
    "20Glorxl",
    "162513cHHKrQ",
    "push",
    "128505TCNBnN",
    "20fIHKCw",
    "42dYNZRv",
    "440quHnBv",
    "slice",
    "1070406YhvOCc",
  ];
  _0x5191 = function () {
    return _0x501a29;
  };
  return _0x5191();
}
function seekVar() {
  let _0x2698be = 0x0;
  for (let _0x58cd8e = 0x0; _0x58cd8e < 0x4; _0x58cd8e++) {
    const _0x2d47e0 = _0x2698be << 0x7,
      _0xcb441f = seek(0x1);
    _0x2698be = _0x2d47e0 | (_0xcb441f & 0x7f);
    if ((_0xcb441f & 0x80) === 0x0) return _0x2698be;
  }
  return _0x2698be;
}
function findDate() {
  const _0x508114 = _0xcc89;
  for (let _0x284be8 = 0x0; _0x284be8 < 0x64; _0x284be8++) {
    const _0x425888 = seek(0x4);
    if (_0x425888 >= 0x7d0 && _0x425888 <= 0xbb8) return address - 0x4;
  }
  throw new Error(_0x508114(0x137));
}
function _0xcc89(_0x4f4601, _0x102e41) {
  const _0x5191ea = _0x5191();
  return (
    (_0xcc89 = function (_0xcc89c3, _0x2697c6) {
      _0xcc89c3 = _0xcc89c3 - 0x132;
      let _0x1933a7 = _0x5191ea[_0xcc89c3];
      return _0x1933a7;
    }),
    _0xcc89(_0x4f4601, _0x102e41)
  );
}
function getDst(_0x253933, _0x2361a5) {
  let _0x5cdb4f = ![];
  if (_0x253933[_0x2361a5] >= 0xf && _0x253933[_0x2361a5] <= 0x14)
    _0x5cdb4f = !![];
  else {
    if (_0x253933[_0x2361a5 - 0x1] >= 0xf && _0x253933[_0x2361a5 - 0x1] <= 0x14)
      _0x5cdb4f = ![];
  }
  return _0x5cdb4f;
}
function parseSave(_0x49bf7c, _0x467463, _0x19b421 = null) {
  const _0xe8a356 = _0xcc89;
  setAddress(0x0),
    (save_data = _0x49bf7c),
    seek(0x4),
    seek(0x1),
    seek(0x1),
    seek(0x1),
    seek(0x4),
    seek(0x4);
  const _0x26759f = address,
    _0x6f3799 = findDate();
  setAddress(_0x26759f), seek(_0x6f3799 - _0x26759f);
  if (_0x19b421 === null) _0x19b421 = getDst(_0x49bf7c, address + 0x76);
  seek(0x4),
    seek(0x4),
    seek(0x4),
    seek(0x4),
    seek(0x4),
    seek(0x4),
    setAddress(address + 0x8),
    seek(0x4),
    seek(0x4),
    seek(0x4);
  if (_0x19b421) seek(0x1);
  getData(0x4, 0x4, 0x3),
    seek(0x4),
    seek(0x4),
    seek(0x4),
    getData(0x4, 0x4, 0xc),
    seek(0x1),
    getData(0x1, 0x4, seek(0x1) * 0xa),
    seek(0x4),
    getData(0x4, 0x4, 0x1e),
    seek(0x4),
    seek(0x4),
    getData(0x4, 0x4, 0xa);
  for (let _0x5ab656 = 0x0; _0x5ab656 < 0xa; _0x5ab656++) seek(0x4);
  for (let _0x10e610 = 0x0; _0x10e610 < 0xa; _0x10e610++) {
    for (let _0xc9a248 = 0x0; _0xc9a248 < 0x33; _0xc9a248++) seek(0x4);
  }
  for (let _0x3dc7d1 = 0x0; _0x3dc7d1 < 0xa; _0x3dc7d1++) {
    for (let _0x1a4a56 = 0x0; _0x1a4a56 < 0x31; _0x1a4a56++) seek(0x4);
  }
  try {
    const _0x4a0c79 = getData();
    if (_0x4a0c79[_0xe8a356(0x139)] === 0x0)
      return parseSave(_0x49bf7c, _0x467463, !_0x19b421);
  } catch (_0x366662) {
    return parseSave(_0x49bf7c, _0x467463, !_0x19b421);
  }
  getData(),
    getData(0x4, 0x2, seek(0x4) * 0x2),
    getData(),
    getData(0x4, 0x2, 0xb * 0x2),
    getData(),
    getData(),
    getData(0x4, 0x4, 0x6),
    getData(),
    seek(0x4),
    getData(0x4, 0x4, 0x15),
    seek(0x1),
    getData(0x1, 0x1, 0x6),
    getTimeStamp(_0x19b421),
    getData(0x4, 0x4, 0x32),
    getTimeStamp(_0x19b421),
    seek(0x6 * 0x4),
    getData(0x4, 0x1, null);
  const _0x1e6de1 = seekVar();
  for (let _0x3f5e79 = 0x0; _0x3f5e79 < _0x1e6de1; _0x3f5e79++) {
    seekVar(), seekVar();
  }
  const _0x4c428e = seekVar();
  for (let _0x5511e2 = 0x0; _0x5511e2 < _0x4c428e; _0x5511e2++) {
    seekVar(), seek(0x1);
  }
  getData(0x4, 0x4, 0x4),
    seek(0x4),
    seek(0x4),
    getData(),
    getData(0x4, 0x4, 0xa);
  let _0x155ef3 = seek(0x2);
  _0x155ef3 !== 0x80 && (seek(-0x2), (_0x155ef3 = 0x64));
  getData(0x2, 0x4, _0x155ef3), getData(0x2, 0x4, _0x155ef3);
  const _0x19a746 = seek(0x1),
    _0x4ffb5a = seek(0x2) * _0x19a746,
    _0x41fb6d = seek(0x1),
    _0x17aacb = seek(0x1);
  getData(0x1, 0x1, _0x4ffb5a * _0x41fb6d),
    getData(0x1, 0x1, _0x4ffb5a * _0x41fb6d),
    getData(0x1, 0x2, _0x4ffb5a * _0x17aacb * _0x41fb6d),
    getData(0x1, 0x1, _0x4ffb5a * _0x41fb6d),
    getData(0x4, 0x4, 0x26),
    getData();
  const _0x4d61de = seek(0x4);
  return _0x4d61de;
}
