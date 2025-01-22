var audio = new Audio("asset/audio.mp3");
audio.autoplay = true;
audio.loop = true;
function ilang() {
  audio.play();
  open = document.querySelector(".open");
  open.style = "transition: 1.5s ease-out all; opacity: 0; transform: scale(100) translateY(-20px); filter: brightness(0);";
  setTimeout(function () {
    open.style = "display:none;";
  }, 1500);
  start();
}
var bisaklik = true;
function start() {
  if (bisaklik) {
    setTimeout(bgZoomIn, 500);
    setTimeout(() => {
      tampilContent1();
    }, 1000);
  }
  bisaklik = false;
}
bg = document.querySelector(".bg");
function bgZoomIn() {
  bg.style = "transform: scale(1.3);";
}
function bgZoomOut() {
  bg.style = "transform: scale(1);";
}
function showBtnNext() {
  btnLanjut.style = "opacity: 1";
}
function hideBtnNext() {
  btnLanjut.style = "opacity: 0";
}
function ketik(_0x84462e, _0x468e5e, _0x7fbfa6) {
  var _0x10f2d2 = document.querySelector(_0x468e5e);
  _0x10f2d2.innerHTML = "";
  var _0x1059d9 = _0x84462e;
  var _0x350ecc = 50;
  var _0x5d52e2 = 0;
  var _0x50bd9d = [];
  for (i = 0; i < _0x1059d9.length; i++) {
    _0x50bd9d.push(_0x1059d9[i]);
  }
  var _0x405261 = 0;
  _0x50bd9d.forEach(_0x3a1714 => {
    setTimeout(() => {
      _0x405261++;
      if (_0x3a1714 == "#") {
        _0x10f2d2.innerHTML += "<br>";
      } else {
        _0x10f2d2.innerHTML += _0x3a1714;
      }
      if (_0x405261 == _0x50bd9d.length) {
        setTimeout(_0x7fbfa6, 100);
      }
    }, _0x5d52e2);
    _0x5d52e2 += _0x350ecc;
  });
}
function ketik5(_0x99069f, _0x41d5ac, _0x5ee2cc) {
  var _0xf56563 = document.querySelector(_0x41d5ac);
  _0xf56563.innerHTML = "";
  var _0x575491 = _0x99069f;
  var _0x3a11a8 = 50;
  var _0x5197bf = 0;
  var _0xa9567f = [];
  for (i = 0; i < _0x575491.length; i++) {
    _0xa9567f.push(_0x575491[i]);
  }
  var _0x39f868 = 0;
  _0xa9567f.forEach(_0xe0ca3d => {
    setTimeout(() => {
      _0x39f868++;
      updatescroll();
      if (_0xe0ca3d == "#") {
        _0xf56563.innerHTML += "<br>";
      } else {
        _0xf56563.innerHTML += _0xe0ca3d;
      }
      if (_0x39f868 == _0xa9567f.length) {
        setTimeout(_0x5ee2cc, 100);
      }
    }, _0x5197bf);
    _0x5197bf += _0x3a11a8;
  });
}
function tampilLope() {
  bgLove = document.querySelector(".bg-love");
  x = innerWidth / 15;
  for (i = 0; i < x; i++) {
    delay = Math.random() * 5 + "s";
    durasi = Math.random() * 4 + 3 + "s";
    var _0x214df5 = document.createElement("div");
    _0x214df5.setAttribute("style", "animation-delay: " + delay + ";animation-duration: " + durasi);
    _0x214df5.innerHTML = "<i class=\"love material-icons-sharp\"> favorite </i>";
    console.log(i);
    bgLove.appendChild(_0x214df5);
  }
}
window.onload = function () {
  document.querySelector(".preload").remove();
};
const swalo = Swal.mixin({
  allowOutsideClick: false,
  showCancelButton: false,
  customClass: {
    popup: "border-radius"
  }
});
function slide1() {
  var _0x193e0c = "Selamat Ulang Tahun, Jantungku.##Semoga aku berhasil jadi orang pertama yang ucapin itu, yang terpenting aku masih nemuin ulang tahun kali ini sama kamu.";
  function _0x25d063() {
    document.querySelector(".lanjut1").style = "opacity: 1";
  }
  ketik(_0x193e0c, ".typetxt1", _0x25d063);
}
async function dapethadiah(_0x448a4) {
  await swalo.fire({
    title: "Yeayy kamu dapet " + _0x448a4,
    confirmButtonText: "OK"
  });
  await swalo.fire({
    title: "Lanjut gak nihh",
    confirmButtonText: "Lanjuttt"
  });
  tampilContent4();
}
const kadoArr = document.querySelectorAll(".kado");
kadoArr[0].onclick = () => {
  dapethadiah(kadoArr[0].getAttribute("kadoo"));
};
kadoArr[1].onclick = () => {
  dapethadiah(kadoArr[1].getAttribute("kadoo"));
};
kadoArr[2].onclick = () => {
  dapethadiah(kadoArr[2].getAttribute("kadoo"));
};
kadoArr[3].onclick = () => {
  dapethadiah(kadoArr[3].getAttribute("kadoo"));
};
function munculkado() {
  var _0x2e61b5 = document.querySelectorAll(".kado");
  setTimeout(() => {
    _0x2e61b5[0].style = "animation: anmkado 0.5s ease; opacity: 1;";
  }, 100);
  setTimeout(() => {
    _0x2e61b5[1].style = "animation: anmkado 0.5s ease; opacity: 1;";
  }, 200);
  setTimeout(() => {
    _0x2e61b5[2].style = "animation: anmkado 0.5s ease; opacity: 1;";
  }, 300);
  setTimeout(() => {
    _0x2e61b5[3].style = "animation: anmkado 0.5s ease; opacity: 1;";
  }, 400);
}
function slide2() {
  ketik("Kamu pilih kado yang mana, ga aku kabulin ini cuma game aja", ".typetxt2", munculkado);
}
async function sendwish() {
  pesanku = valuewish.value;
  if (pesanku) {
    await swalo.fire({
      confirmButtonText: "OK",
      title: "Kirim ke wa aku yah"
    });
    location.assign("https://wa.me/?text=" + pesanku);
  } else {
    await swalo.fire({
      confirmButtonText: "OK",
      title: "Jangan dikosongin dong"
    });
  }
}
function slide3() {
  function _0x57801c() {
    document.querySelector("#valuewish").style = "animation: anmwish 0.7s ease; opacity: 1";
    setTimeout(_0x4f7e3a, 500);
  }
  function _0x4f7e3a() {
    document.querySelector(".kirimwish").style = "animation: anmkado 0.7s ease; opacity: 1";
  }
  function _0x2c0afd() {
    document.querySelector(".lanjut6").style = "opacity: 1";
  }
  ketik("Isi wish kamu disini ya", ".typetxt3", _0x57801c);
}
function slide4() {
  var _0x4c64a4 = "Semoga di umur kamu sekarang semesta lebih berpihak, semoga bisa mendapatkan hal yang selama ini di perjuangkan. Semoga senantiasa diberi kebahagiaan.##I love you on your birthday, and everyday, now and forever.";
  function _0x29e9f0() {
    document.querySelector(".lanjut4").style = "opacity: 1";
  }
  ketik(_0x4c64a4, ".typetxt4", _0x29e9f0);
}
function slide5() {
  var _0x26d0e0 = "Seperti biasanya, kamu masuk di slide longtext##Aku mau ucapain banyak\" terimakasih buat selama ini, terimakasih udah jalan sejauh ini, terimakasih udah nerima kurang lebihnya aku, terimakasih atas sabarmu,  terimakasih buat semua yang kamu kasih ke aku, yang aku gabisa bales satu per satu, makasih atas effort, perhatian, apapun itu dalam bentuk apapun itu, aku ucapain terimakasih banyak##Aku minta maaf aku bukan cowo yang bisa ngerti kamu, ngga paham sama pikiran kamu#Maaf buat perilaku yang nyakitin kamu, maaf selalu ngerepotin kamu, im so lucky have you#Jangan bosen sama aku, jangan jauh sama aku, tetep sama aku, aku udah cukup berantakan apalagi kalo ga sama kamu.";
  function _0x54b8b7() {
    document.querySelector(".lanjut5").style = "opacity: 1";
  }
  ketik5(_0x26d0e0, ".typetxt5", _0x54b8b7);
}
function updatescroll() {
  valcontainer = document.querySelector(".slidekuy");
  valcontent = document.querySelector(".typetxt5");
  valcontainer.scrollTop = valcontent.scrollHeight;
}
function slide6() {
  var _0x211fc7 = "Mau bikin web ucapan seperti ini?##Pesan sekarang di Deka Tutorial!";
  function _0x58893e() {
    document.querySelector(".lanjut6").style = "opacity: 1";
  }
  ketik(_0x211fc7, ".typetxt6", _0x58893e);
}
var bgs = document.querySelector(".bg").children;
function tampilContent1() {
  document.querySelector(".contentslide1").style = " display: block";
  slide1();
}
function tampilContent2() {
  bgZoomOut();
  document.querySelector(".contentslide1").style = "opacity: 0";
  setTimeout(() => {
    document.querySelector(".contentslide1").style = "opacity: 0; display: none";
  }, 1000);
  bgs[5].style = "opacity: 0";
  document.querySelector(".contentslide2").style = " display: flex";
  setTimeout(slide2, 1000);
}
function tampilContent4() {
  bgZoomIn();
  document.querySelector(".contentslide2").style = "opacity: 0";
  setTimeout(() => {
    document.querySelector(".contentslide2").style = "opacity: 0; display: none";
  }, 1000);
  bgs[4].style = "opacity: 0";
  document.querySelector(".contentslide4").style = " display: block";
  setTimeout(slide4, 1000);
}
function tampilContent5() {
  bgZoomOut();
  document.querySelector(".contentslide4").style = "opacity: 0";
  setTimeout(() => {
    document.querySelector(".contentslide4").style = "opacity: 0; display: none";
  }, 1000);
  bgs[3].style = "opacity: 0";
  document.querySelector(".contentslide5").style = " display: block";
  setTimeout(slide5, 1500);
}
function tampilContent6() {
  bgZoomIn();
  document.querySelector(".contentslide5").style = "opacity: 0";
  setTimeout(() => {
    document.querySelector(".contentslide5").style = "opacity: 0; display: none";
  }, 1000);
  bgs[2].style = "opacity: 0";
  document.querySelector(".contentslide6").style = " display: block";
  setTimeout(slide6, 1500);
}
function tampilContent3() {
  bgZoomOut();
  tampilLope();
  document.querySelector(".contentslide6").style = "opacity: 0";
  setTimeout(() => {
    document.querySelector(".contentslide6").style = "opacity: 0; display: none";
  }, 1000);
  bgs[1].style = "opacity: 0";
  document.querySelector(".contentslide3").style = " display: block";
  setTimeout(slide3, 1000);
}
