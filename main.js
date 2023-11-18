let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
 cursor: "<span style='color: #2b6102;'>|</span>",
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #2b6102;">Soy estudiante y estoy aprendiendo con el grupo de TecnolochicasS.</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
