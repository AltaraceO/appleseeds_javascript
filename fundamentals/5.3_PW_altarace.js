function ifPassWord(pw) {
  if (pw.length > 7) {
    console.log("strong");
  } else {
    console.log("weak");
  }
}

function terPassWord(pw) {
  pw.length > 7 ? console.log("strong") : console.log("weak");
}

function logiPassWord(pw) {
  if (pw.length > 7 && pw) {
    console.log("strong");
  } else {
    console.log("weak");
  }
}

ifPassWord("apple");
ifPassWord("appleseeds");

terPassWord("apple");
terPassWord("appleseeds");

logiPassWord("apple");
logiPassWord("appleseeds");

function advPassWord(pw) {
  if (pw.length < 7) {
    console.log("weak");
  } else if (/[A-Z]/.test(pw)) {
    console.log("very strong");
  } else {
    console.log("strong");
  }
}

advPassWord("HellOeoo");
advPassWord("helloooo");
advPassWord("helL");
