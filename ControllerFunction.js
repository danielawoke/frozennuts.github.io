let x = 0;
let y = 0;
window.addEventListener("keypress", (event) => {
    console.log(x);

    if(linePieceActive){
      var linePiece = document.getElementById("line");
      var a = linePiece.style.left;
      
      if(event.key === 'e'){
            str = ""+x+"px";
            linePiece.style.left = str;
            x=x+43.1;
          }
            if(event.key === 'q'){
              if(x >0){
              str = ""+x+"px";
              linePiece.style.left = str;
              x=x-43.1;
            }
          }

          if(event.key === 's'){
            str = ""+y+"px";
            linePiece.style.top = str;
            y=y+40;
          }
    }
});
