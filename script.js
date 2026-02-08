const box2 = document.querySelector(".box2");
const text1 = document.querySelector(".text1");
const text2 = document.querySelector(".text2");
const text3 = document.querySelector(".text3");
const text4 = document.querySelector(".text4");
const text5 = document.querySelector(".text5");

// async function doted(){
//   let addchild = document.createElement("div")
//   await setTimeout(() => {addchild.innerHTML=`.`}, 1000);
//   document.getElementsByClassName("text1").appendChild
// }

doted(text1)
let firstline = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Initializing Hacking...");
      text1.innerHTML = `Initializing Hacking...`
      resolve();
    }, 2000);
  });
};

let secondline = () => {
     return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Reading your Files...");
      text2.innerHTML = `Reading your Files...`
      resolve();
    }, 2000);
  });
};

let thirdline = () => {
      return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Password files Detected...");
      text3.innerHTML = `Password files Detected...`
      resolve();
    }, 2000);
  });
};

let fourthline = () => {
    return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Sending all passwords and personal files to server...");
      text4.innerHTML = `Sending all passwords and personal files to server...`
      resolve();
    }, 2000);
  });
};

let fifthline = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Cleaning up...");
      text5.innerHTML = `Cleaning up...`
      resolve();
    }, 2000);
  });
};

async function code1() {
  await firstline();
  await secondline();
  await thirdline();
  await fourthline();
  await fifthline();
}

let a = code1();
