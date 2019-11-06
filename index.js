function anim() {
  console.log('click');
  const photo = document.getElementById("photo");
  TweenLite.to(photo, 2, {width:"200px", height:"150px"});
}