function anim() {
  TweenLite.to("#photo", 2, {
    width:"80px",
    height:"80px", 
    backgroundColor:"none", 
    margin: "0px 10px",
  },
  );
  TweenLite.to(".green",2, {
    width:"48px",
    height: "48px",
    backgroundColor:"green",
    onComplete: myFunction4
  });
  TweenLite.to(".yellow",2, {
    width:"48px",
    height: "48px",
    backgroundColor:"yellow",
    onComplete: myFunction3
  })
  TweenLite.to(".black",2, {
    width:"48px",
    height: "48px",
    backgroundColor:"black",
    onComplete: myFunction
  })
  TweenLite.to(".blue",2, {
    width:"48px",
    height: "48px",
    backgroundColor:"blue",
    onComplete: myFunction1,
  })
}
function myFunction() {
  TweenLite.to(".blue",2, {
    top:"-52px",
    left: "-48px",
    ease: Sine.easeInOut,
    transform: "rotate(1080deg)",
  });
}
function myFunction1() {
  TweenLite.to(".black",2, {
    top:"-52px",
    left: "0px",
    ease: Expo.easeInOut
  });
}

function myFunction3() {
  TweenLite.to(".yellow",2, {
    borderRadius: "0% 20% 20% 0%",
    onComplete: fire
  });
}

function myFunction4() {
  TweenLite.to(".green",2, {
    borderRadius: "50% 0% 0% 50%/ 50% 50% 50%",
  });
}
function fire() {
  TweenLite.to(".fire-stick",3, {
    width: "1000px",
    height: "1px",
    backgroundColor: "transparent",
    display: "block",
    marginTop: "1px",
    marginBottom: "1px",
    position:"relative",
    left: "-35px",
    onComplete: nostick
  });
}
function nostick() {
  TweenLite.to(".fire-stick",1, {
    display: "none",
  });
}